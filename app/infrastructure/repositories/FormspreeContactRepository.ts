import type { ContactMessage } from "../../core/domain/entities/ContactMessage";
import type { ContactRepository } from "../../core/application/repositories/ContactRepository";

/**
 * Implementação concreta do ContactRepository usando o Formspree.
 *
 * O Formspree é um serviço que recebe submissões de formulário de SPAs estáticas
 * e as encaminha para o e-mail configurado no painel (contato@pcdemmovimento.org.br).
 *
 * Como configurar:
 * 1. Crie uma conta gratuita em https://formspree.io
 * 2. Crie um novo Form e configure o e-mail de destino para contato@pcdemmovimento.org.br
 * 3. Copie o Form ID (ex: "xpwzgkqr") e substitua FORMSPREE_FORM_ID abaixo.
 *
 * Plano gratuito: 50 submissões/mês. Planos pagos oferecem mais.
 */
const FORMSPREE_FORM_ID = "SEU_FORM_ID_AQUI";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

export class FormspreeContactRepository implements ContactRepository {
  async saveMessage(message: ContactMessage): Promise<void> {
    const payload = {
      name: message.name,
      email: message.email,
      message: message.message,
      interest: message.interest,
    };

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const errorMessage =
        (data as { error?: string }).error ??
        "Não foi possível enviar a mensagem. Tente novamente.";
      throw new Error(errorMessage);
    }
  }
}
