declare module 'Interfaces' {
  export interface UserInterface {
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
