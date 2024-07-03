import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { HttpMethod } from "../types";

export interface IParams {
  [key: string]: any;
}

export interface IGenericOptions {
  url: string;
  params?: IParams;
}

export interface IErrorResponse {
  status: number;
  message: string;
}

const setupHeaders = () => {
  return { "Content-Type": "application/json", Accept: "application/json" };
};

const injectInterceptors = (): void => {
  // Set up response interceptor
  axiosService.interceptors.response.use(
    (response) => response,

    (error: AxiosError): Promise<IErrorResponse> => {
      const { status } = error.response!;

      let response: IErrorResponse = { message: "", status: status };
      switch (status) {
        case 400:
          response.message =
            "There was an issue with your request. Please check and try again.";
          break;
        case 401:
          response.message =
            "You are not authorized. Please log in and try again.";
          break;
        case 403:
          response.message =
            "You do not have permission to access this resource.";
          break;
        case 404:
          response.message = "The requested resource was not found.";
          break;
        case 500:
          response.message =
            "The server encountered an error. Please try again later.";
          break;
        default:
          response.message =
            error.response?.data?.toString() ||
            "An unexpected error occurred. Please try again later.";
          break;
      }
      return Promise.reject(error);
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
