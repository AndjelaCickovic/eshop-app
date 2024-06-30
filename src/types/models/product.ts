export interface Product {
  id: number;
  name: string;
  price: number; // Additional component for formatting and currency, double precision, formatting(. or ,) and currency position
  description: string;
  features: string[];
  additionalInformation: AdditionalInformation;
  specifications: Record<string, SpecificationValue>;
}

export type AdditionalInformation = Record<
  AdditionalInformationKey,
  AdditionalInformationValue
>;

type AdditionalInformationKey = "Warranty" | "In the Box";
type AdditionalInformationValue = string | string[];
export type SpecificationValue = string | number | string[] | number[];
