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

class HttpService {
  private http: AxiosInstance;
  private baseURL = process.env.REACT_APP_API_BASE_URL;

  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: this.setupHeaders(),
    });
  }

  // Initialize service configuration
  public service() {
    this.injectInterceptors();

    return this;
  }

  // Set up request headers
  private setupHeaders() {
    return { "Content-Type": "application/json" };
  }

  // Handle HTTP requests
  private async request<T>(
    method: HttpMethod,
    url?: string,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }

  public async get<T>(url: string, params?: IParams): Promise<T> {
    return this.request<T>(HttpMethod.GET, url, {
      params,
      headers: this.setupHeaders(),
    });
  }

  public async post<T, P>(
    url: string,
    payload: P,
    params?: IParams
  ): Promise<T> {
    return this.request<T>(HttpMethod.POST, url, {
      params,
      data: payload,
      headers: this.setupHeaders(),
    });
  }

  public async update<T, P>(
    url: string,
    payload: P,
    params?: IParams
  ): Promise<T> {
    return this.request<T>(HttpMethod.PUT, url, {
      params,
      data: payload,
      headers: this.setupHeaders(),
    });
  }

  public async delete<T>(url: string, params?: IParams): Promise<T> {
    return this.request<T>(HttpMethod.DELETE, url, {
      params,
      headers: this.setupHeaders(),
    });
  }

  // Inject interceptors for request and response
  private injectInterceptors() {
    // Set up request interceptor
    this.http.interceptors.request.use((request) => {
      // * Perform an action
      // TODO: implement an NProgress
      return request;
    });

    // Set up response interceptor
    this.http.interceptors.response.use(
      (response) => {
        // * Do something
        return response;
      },

      (error) => {
        // * Implement a global error alert
        return Promise.reject(error);
      }
    );
  }

  // Normalize errors
  private normalizeError(error: any) {
    return Promise.reject(error);
  }
}

const httpService = new HttpService();

export { httpService as default };
