import { Product } from "../types/models/product";
import { httpGet } from "./http.service";

const apiEndpoint: string = "/sth/";

const productService = {
  async getProducts(): Promise<Product[]> {
    const response = await httpGet<Product[]>(apiEndpoint);
    return response;
  },
};

export default productService;
