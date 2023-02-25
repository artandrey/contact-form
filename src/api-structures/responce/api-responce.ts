export default class ApiResponce<T extends object> {
  constructor(public success: boolean, public body: T) {}
}
