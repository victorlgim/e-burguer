import React from "react";

export interface iDefaultUserContext {
  children: React.ReactNode;
}

export interface iRegisterFormData {
  email: string;
  password: string;
  passwordConfirmed: string;
  name: string;
}

export interface iLoginFormData {
  email: string;
  password: string;
}

export interface iFormRegister {
  registerUser: (data: iRegisterFormData) => Promise<void>;
}

export interface iRegisterUser {
  setLoading: (loading: boolean) => void;
  reset: (data?: Partial<iRegisterFormData>) => void;
  navigate: (path: string) => void;
  data: iRegisterFormData;
}

export interface iFormRegister {
  registerUser: (data: iRegisterFormData) => Promise<void>;
}
