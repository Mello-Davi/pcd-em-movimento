import type { ContactMessage } from "../../domain/entities/ContactMessage";
import type { ContactRepository } from "../repositories/ContactRepository";

export class SendContactMessageUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(message: ContactMessage): Promise<void> {
    if (!message.name || !message.email || !message.message) {
      throw new Error("Campos obrigatórios estão faltando.");
    }
    await this.contactRepository.saveMessage(message);
  }
}
