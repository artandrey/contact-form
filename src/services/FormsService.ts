import { ContactFormData } from '@/schemas/contactFromSchema';

export default class FormsService {
  static sendContactForm(data: ContactFormData) {
    return fetch('/api/forms/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
