import axios, { AxiosInstance } from 'axios';

export default class HttpService {
    httpClient: AxiosInstance
    constructor(baseURL?: string) {
        console.log(process.env.BASE_URL)
        console.log(baseURL)
        console.log('XD')
      this.httpClient = axios.create({
        baseURL: baseURL ? baseURL : process.env.BASE_URL,
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    async get(url: string, params = {}) {
      try {
        const response = await this.httpClient.get(url, { params });
        return response.data;
      } catch (error) {
        throw error
      }
    }
  
    async post(url: string, body: any) {
      try {
        const response = await this.httpClient.post(url, body);
        return response.data;
      } catch (error) {
        throw error
      }
    }
  
    async put(url: string, body: any) {
      try {
        const response = await this.httpClient.put(url, body);
        return response.data;
      } catch (error) {
        throw error
      }
    }
  
    async del(url: string) {
      try {
        const response = await this.httpClient.delete(url);
        return response.data;
      } catch (error) {
        throw error
      }
    }
  }