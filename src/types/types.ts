import type { JSX, ReactNode } from "react";

export interface SubTypes {
  icon: ReactNode;
  title: string;
  numbers: number;
  bg: string;
}

export interface TodayTypes {
  image: string;
  name: string;
  note: string;
  time: Date | string;
  date?: string;
  dob?: Date
  height?:string;
  lastApoint?: string
  registerDate?: Date;
  weight?: string;
  sext?: string;
  phoneNumber?: number;
}
export interface ApointmentTypes {
  image: string;
  icon1: ReactNode;
  icon2: ReactNode;
  name: string;
  note: string;
  time: Date | string;
}

export interface PatientsInfo {
  name: string;
  image: string;
  dob: Date;
  height: string;
  lastApoint: string;
  registerDate: Date;
  weight: string;
  sext: string;
  phoneNumber: Number;
}
