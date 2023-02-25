import FormLayout from '@/UI/FormLayout';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './ContactForm.module.scss';
import contactFormSchema, {
  ContactFormData,
} from '@/schemas/contactFromSchema';
import TextInput from '@/UI/TextInput';
import { SubmitHandler } from 'react-hook-form/dist/types';
import Button from '@/UI/Button';
import ErrorMessage from '@/UI/ErrorMessage';
import Card from '@/UI/Card';
import Image from 'next/image';
import Checkbox from '@/UI/Checkbox';
import useFetchCall from '@/hooks/useFetchCall';
import FormsService from '@/services/FormsService';

const DEFAULT_VALUES: ContactFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  policyAgreement: false,
};

const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { send, sending, data, error } = useFetchCall(
    FormsService.sendContactForm,
    () => alert('Form is sent!')
  );

  const onSubmit: SubmitHandler<ContactFormData> = (values) => {
    send(values);
  };

  const onReset = () => reset(DEFAULT_VALUES);

  return (
    <Card className={s.wrapper}>
      <div className={s.heading}>
        <Image
          src="https://mist-next.vercel.app/_next/static/media/museum.25fa7a9e.svg"
          alt="site logo"
          width="300"
          height="100"
        />
        <h2>Залишити заявку на зворотній зв&#39;язок</h2>
      </div>
      <FormLayout onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
        <div className={s.inputWrapper}>
          <Controller
            control={control}
            name="firstname"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Ім&#39;я"
                type="text"
                aria-invalid={!!errors.firstname}
              />
            )}
          />
          <ErrorMessage>{errors.firstname?.message}</ErrorMessage>
        </div>
        <div className={s.inputWrapper}>
          <Controller
            control={control}
            name="lastname"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Прізвище"
                type="text"
                aria-invalid={!!errors.lastname}
              />
            )}
          />
          <ErrorMessage>{errors.lastname?.message}</ErrorMessage>
        </div>
        <div className={s.inputWrapper}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Телефон"
                type="tel"
                aria-invalid={!!errors.phone}
              />
            )}
          />
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
        </div>
        <div className={s.inputWrapper}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Електронна пошта"
                type="email"
                aria-invalid={!!errors.email}
              />
            )}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div className={s.inputWrapper}>
          <div className={s.verticalAlign}>
            <Controller
              control={control}
              name="policyAgreement"
              render={({ field: { value, ...otherProps } }) => (
                <Checkbox checked={value} {...otherProps} />
              )}
            />
            <span>Даю згоду на обробку моїх пероснальних даних</span>
          </div>
          <ErrorMessage>{errors.policyAgreement?.message}</ErrorMessage>
        </div>
        <Button type="submit" disabled={sending} role="main">
          Надіслати
        </Button>
        <Button type="reset" disabled={sending} role="alternative">
          Очистити
        </Button>
      </FormLayout>
    </Card>
  );
};

export default ContactForm;
