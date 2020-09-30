export default class UnprocessableEntity {

  private _message!: string;

  private _errors!: Array<Error>;


  get message(): string {
    return this._message;
  }

  get errors(): Array<Error> {
    return this._errors;
  }
}

