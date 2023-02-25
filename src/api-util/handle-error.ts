import ApiResponce from '@/api-structures/responce/api-responce';
import { NextApiResponse } from 'next';
import ApiError from '@/api-structures/errors/ApiError';

const handleError = function (
  error: unknown,
  res: NextApiResponse<ApiResponce<{ message: string }>>
) {
  if (error instanceof ApiError)
    return res
      .status(error.statusCode)
      .json(new ApiResponce(false, { message: error.message }));
  res
    .status(500)
    .json(new ApiResponce(false, { message: 'Internal server error' }));
};

export default handleError;
