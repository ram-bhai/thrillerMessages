import { Resend } from "resend";

export const resend = new Resend(process.env.RESEDN_API_KEY);