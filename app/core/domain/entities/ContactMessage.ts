export type ContactInterest = "participar" | "voluntario" | "apoiar" | "duvida";

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  interest: ContactInterest;
  message: string;
  createdAt?: Date;
}
