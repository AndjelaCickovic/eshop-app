import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { HttpMethod } from "../types";

export interface IParams {
  [key: string]: any;
}

export interface IGenericOptions {
  url: string;
  params?: IParams;
}

export interface IErrorResponse {
  status: string;
  message: string;
}

const setupHeaders = () => {
  return { "Content-Type": "application/json", Accept: "application/json" };
};

const injectInterceptors = (): void => {
  // Set up response interceptor
  axiosService.interceptors.response.use(
    (response) => response,

    (error) => {
      //TODO: Error handling
      // Add method to check errors and toast error from component
      // Check statuses 400, 404, 500
    }
  );
};

const axiosService: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: false,
  headers: setupHeaders(),
});

injectInterceptors();

// Handle HTTP requests
async function request<T>(
  method: HttpMethod,
  url?: string,
  options?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = axiosService.request<T>({
      method: method,
      url: url,
      ...options,
    });

    return (await response).data;

    // return response.data;
  } catch (error) {
    return normalizeError(error);
  }
}

const httpGet = async <T>(url: string, params?: IParams): Promise<T> => {
  return request<T>(HttpMethod.GET, url, {
    params,
  });
};

const httpPost = async <T, P>(
  url: string,
  payload: P,
  params?: IParams
): Promise<T> => {
  return request<T>(HttpMethod.POST, url, {
    params,
    data: payload,
  });
};

const httpPut = async <T, P>(
  url: string,
  payload: P,
  params?: IParams
): Promise<T> => {
  return request<T>(HttpMethod.PUT, url, {
    params,
    data: payload,
  });
};

const httpDelete = async <T>(url: string, params?: IParams): Promise<T> => {
  return request<T>(HttpMethod.DELETE, url, {
    params,
  });
};

// Normalize errors
const normalizeError = (error: any) => {
  return Promise.reject(error);
};

export { httpGet, httpPost, httpPut, httpDelete };
