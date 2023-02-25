export default abstract class ApiError {
  constructor(public statusCode: number, public message: string) {}
}
