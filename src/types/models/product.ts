export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  additionalInformation: AdditionalInformation;
}

interface AdditionalInformation {
  warranty: string;
  inTheBox: string[];
}
