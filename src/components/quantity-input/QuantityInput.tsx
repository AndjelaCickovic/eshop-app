import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Input, Stack, TextField } from "@mui/material";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import styles from "./quantity-input.module.scss";

export interface QuantityInputProps {
  min?: number;
  max?: number;
  /**
   * Initial value for input
   * @default 0
   */
  initialValue?: number;
  onChange?: (value: number) => void;
}

export default function QuantityInput(props: Readonly<QuantityInputProps>) {
  const { initialValue, min = 0, max, onChange } = props;

  const [quantity, setQuantity] = useState<number>(initialValue ?? 0);

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
      <IconButton onClick={handleDecrement} disabled={quantity === min}>
        <RemoveIcon fontSize="small" />
      </IconButton>
    );
  }, [handleDecrement, min, quantity]);

  const increaseBtn = useMemo(() => {
    return (
      <IconButton onClick={handleIncrement} disabled={quantity === max}>
        <AddIcon fontSize="small" />
      </IconButton>
    );
  }, [handleIncrement, max, quantity]);

  return (
    <Stack direction={"row"} display={"flex"} alignItems={"center"}>
      <Input
        //variant="outlined"
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
