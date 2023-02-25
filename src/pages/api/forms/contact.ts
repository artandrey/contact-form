// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import BadRequestError from '@/api-structures/errors/BadRequestError';
import MethodNotAllowedError from '@/api-structures/errors/MethodNotAllowedError';
import ApiResponce from '@/api-structures/responce/api-responce';
import handleError from '@/api-util/handle-error';
import Contacts from '@/db-models/contact';
import contactFormSchema from '@/schemas/contactFromSchema';
import type { NextApiRequest, NextApiResponse } from 'next';
import '@/db/db';

type Responce = ApiResponce<{}>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Responce>
) {
  try {
    if (req.method !== 'POST') throw new MethodNotAllowedError();

    const data = req.body;

    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success)
      throw new BadRequestError(validationResult.error.message);
    await Contacts.create(data);
    res.status(200).json(new ApiResponce(true, {}));
  } catch (error) {
    handleError(error, res);
  }
}
