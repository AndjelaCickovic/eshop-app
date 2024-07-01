import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Input, Stack } from "@mui/material";
import styles from "./quantity-input.module.scss";

export interface QuantityInputProps {
  /**
   * @default 0
   */
  initialValue?: number;
  /**
   * @default 0
   */
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export default function QuantityInput(props: Readonly<QuantityInputProps>) {
  const { initialValue = 1, min = 1, max, onChange } = props;

  const [quantity, setQuantity] = useState<number>(initialValue);

  const { t } = useTranslation();

  const valueMatchesBounds = useCallback(
    (value: number) => {
      return value >= min && (!max || value <= max);
    },
    [min, max]
  );

  const updateValue = useCallback(
    (newValue: number) => {
      if (valueMatchesBounds(newValue)) {
        setQuantity(newValue);
        onChange?.(newValue);
      }
    },
    [onChange, valueMatchesBounds]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateValue(+e.target.value);
    },
    [updateValue]
  );

  const handleIncrement = useCallback(() => {
    updateValue(quantity + 1);
  }, [updateValue, quantity]);

  const handleDecrement = useCallback(() => {
    updateValue(quantity - 1);
  }, [updateValue, quantity]);

  const decreaseBtn = useMemo(() => {
    return (
      <IconButton
        onClick={handleDecrement}
        disabled={quantity === min}
        title={t("quantity.decreaseBtn")}
      >
        <RemoveIcon className={styles.icon} />
      </IconButton>
    );
  }, [handleDecrement, min, quantity, t]);

  const increaseBtn = useMemo(() => {
    return (
      <IconButton
        onClick={handleIncrement}
        disabled={quantity === max}
        title={t("quantity.increaseBtn")}
      >
        <AddIcon className={styles.icon} />
      </IconButton>
    );
  }, [handleIncrement, max, quantity, t]);

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
        className={styles.quantityInput}
      />
    </Stack>
  );
}
