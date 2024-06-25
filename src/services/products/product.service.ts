import { Product } from "../../types";
import httpService from "../http.service";

const apiEndpoint: string = "";

const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await httpService.get<Product[]>(apiEndpoint);
    return response;
  },
};

export default productService;
