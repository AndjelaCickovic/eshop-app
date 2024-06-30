import i18next from "i18next";
import React, { BaseHTMLAttributes } from "react";

/**
 * style is omitted from Intl.NumberFormatOptions and renamed to formatStyle to prevent a clash with the
 * BaseHTMLAttributes "style" (which would be the CSS style object)
 */
export interface LocalizedNumberProps
  extends BaseHTMLAttributes<HTMLSpanElement>,
    Omit<Intl.NumberFormatOptions, "style"> {
  formatStyle?: string;
  locale?: string;
  value?: number;
}

export function LocalizedNumber(props: Readonly<LocalizedNumberProps>) {
  const {
    currency,
    currencySign,
    useGrouping,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits = 2,
    minimumSignificantDigits,
    maximumSignificantDigits,
    formatStyle,
    locale = i18next.language,
    value,
    ...rest
  } = props;
  const numberFormatter = new Intl.NumberFormat(locale, {
    style: formatStyle,
    currency: "USD",
    currencySign,
    useGrouping,
    minimumIntegerDigits,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    minimumSignificantDigits,
    maximumSignificantDigits,
  });

  return (
    <span data-number={value?.toString()} {...rest}>
      {value === undefined || Number.isNaN(value)
        ? ""
        : numberFormatter.format(value)}
    </span>
  );
}
