import ApiError from './ApiError';

export default class MethodNotAllowedError extends ApiError {
  constructor() {
    super(405, 'Method not allowed');
  }
}
