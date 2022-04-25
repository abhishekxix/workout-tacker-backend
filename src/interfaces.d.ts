declare module 'Interfaces' {
  export interface User {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    isVerified: boolean;
    _id: string;
  }
  export interface CustomAPIError {
    code: number;
    message: string;
  }
}
