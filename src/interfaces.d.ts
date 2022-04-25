declare module 'Interfaces' {
  export interface UserInterface {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    _id: string;
  }
  export interface CustomAPIError {
    code: number;
    message: string;
  }
  export interface TokenUser {
    name: string;
    email: string;
    _id: string;
  }
}
