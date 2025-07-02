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
  address: string;
  zipCode: number;
  date?: string;
  dob?: string;
  height?: string;
  lastApoint?: string;
  registerDate?: string;
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

export interface SidebarLink {
  icon: ReactNode;
  name: string;
  link: string;
}
