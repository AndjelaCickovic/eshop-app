import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Input, Stack } from "@mui/material";
import styles from "./QuantityInput.module.scss";
import clsx from "clsx";

interface QuantityInputProps {
  /**
   * @default 0
   */
  initialValue?: number;
  /**
   * @default 'md'
   */
  size?: "small" | "medium";
  /**
   * @default 0
   */
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent | React.MouseEvent, value: number) => void;
}

export function QuantityInput(props: Readonly<QuantityInputProps>) {
  const { initialValue = 1, min = 1, max, onChange, size = "medium" } = props;

  const [quantity, setQuantity] = useState<number>(initialValue);

  const { t } = useTranslation();

  const valueMatchesBounds = useCallback(
    (value: number) => {
      return value >= min && (!max || value <= max);
    },
    [min, max]
  );

  const updateValue = useCallback(
    (e: React.ChangeEvent | React.MouseEvent, newValue: number) => {
      if (valueMatchesBounds(newValue)) {
        setQuantity(newValue);
        onChange?.(e, newValue);
      }
    },
    [onChange, valueMatchesBounds]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateValue(e, +e.target.value);
    },
    [updateValue]
  );

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      updateValue(e, quantity + 1);
    },
    [updateValue, quantity]
  );

  const handleDecrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      updateValue(e, quantity - 1);
    },
    [updateValue, quantity]
  );

  const decreaseBtn = useMemo(() => {
    return (
      <IconButton
        size={size}
        onClick={handleDecrement}
        disabled={quantity === min}
        title={t("quantity.decreaseBtn")}
      >
        <RemoveIcon
          className={size === "small" ? styles.fontSmall : styles.fontMedium}
        />
      </IconButton>
    );
  }, [handleDecrement, min, quantity, size, t]);

  const increaseBtn = useMemo(() => {
    return (
      <IconButton
        onClick={handleIncrement}
        disabled={quantity === max}
        title={t("quantity.increaseBtn")}
        size={size}
      >
        <AddIcon
          className={size === "small" ? styles.fontSmall : styles.fontMedium}
        />
      </IconButton>
    );
  }, [handleIncrement, max, quantity, size, t]);

  return (
    <Stack direction={"row"} display={"flex"} alignItems={"center"}>
      <Input
        size="small"
        type="number"
        value={quantity}
        onChange={handleChange}
        startAdornment={decreaseBtn}
        endAdornment={increaseBtn}
        disableUnderline={true}
        inputProps={{ min: min, max: max }}
        className={clsx(styles.quantityInput, {
          [styles.fontSmall]: size === "small",
          [styles.fontMedium]: size === "medium",
        })}
      />
    </Stack>
  );
}

export default QuantityInput;
