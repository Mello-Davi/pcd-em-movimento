import type { ContactMessage } from "../../core/domain/entities/ContactMessage";
import type { ContactRepository } from "../../core/application/repositories/ContactRepository";

export class MockContactRepository implements ContactRepository {
  async saveMessage(message: ContactMessage): Promise<void> {
    console.log("Mensagem enviada com sucesso:", message);
    return Promise.resolve();
  }
}
