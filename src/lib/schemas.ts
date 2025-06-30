import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["ADMIN", "USER"]),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const userDetailsSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  gender: z.enum(["Male", "Female", "Other"]),
  phoneNumber: z.string().min(10),
  dateOfBirth: z.string().datetime(),
  bloodType: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(5),

  emergencyContacts: z.array(z.object({
    fullName: z.string(),
    phoneNumber: z.string(),
    email: z.string().email(),
    relationship: z.string()
  })),

  physicalInfo: z.array(z.object({
    name: z.string(),
    diagnosis: z.string(),
    phone: z.string(),
    address: z.string(),
    notes: z.string()
  }))
});
