import { BaseHTMLAttributes } from "react";
import i18next from "i18next";

/**
 * style is omitted from Intl.NumberFormatOptions and renamed to formatStyle to prevent a clash with the
 * BaseHTMLAttributes "style" (which would be the CSS style object). Default currency is USD.
 */
interface LocalizedNumberProps
  extends BaseHTMLAttributes<HTMLSpanElement>,
    Omit<Intl.NumberFormatOptions, "style"> {
  formatStyle?: string;
  /**
   * @default i18next.language
   */
  locale?: string;
  value?: number;
}

export function LocalizedNumber(props: Readonly<LocalizedNumberProps>) {
  const {
    currency,
    currencySign,
    useGrouping,
    minimumIntegerDigits,
    minimumFractionDigits = 2,
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
    minimumFractionDigits,
    maximumFractionDigits,
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

export default LocalizedNumber;
