import { z as zod } from 'zod';

const contactFormSchema = zod.object({
  firstname: zod
    .string()
    .min(3, { message: 'Мінімум 3 симоли' })
    .max(20, { message: 'Максимум 20 символів' }),
  lastname: zod
    .string()
    .min(3, { message: 'Мінімум 3 симоли' })
    .max(20, { message: 'Максимум 20 символів' }),
  phone: zod.string().regex(/\+380\d{9}$/, {
    message: 'Введіть номер телефону у форматі +380xxxxxxxxx',
  }),
  email: zod.string().email({ message: 'Введіть дійсну електронну пошту' }),
  policyAgreement: zod.custom<boolean>((value) => value, {
    message: 'Підтвердіть, що ви ознайомилися з правилами обробки даних',
  }),
});

export type ContactFormData = zod.infer<typeof contactFormSchema>;

export default contactFormSchema;
