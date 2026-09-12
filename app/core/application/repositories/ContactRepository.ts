import type { ContactMessage } from "../../domain/entities/ContactMessage";

export interface ContactRepository {
  saveMessage(message: ContactMessage): Promise<void>;
}
