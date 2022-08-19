export class CustomError extends Error {
  private code: number;
  constructor(message: string, statusCode = 400) {
    super(message);

    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
    this.code = statusCode;
  }

  getErrorMessage() {
    return "Erro: " + this.message;
  }

  getStatusCode() {
    return "code: " + this.code;
  }
}

export const catchError = (err: unknown) => {
  if (err instanceof Error) {
    console.log(err.message); // 👈️ err is now Error

    return {
      message: err.message,
      stack: err.stack,
      cause: err.cause,
    };
  }
};
