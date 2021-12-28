import { NextFunction, Request, Response } from "express";

export class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    if (status) {
      this.status = status;
    } else {
      this.status = 500;
    }
    this.message = message;
  }
}

function errorHandler(
  err: HttpException | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if ("status" in err) {
    console.log(`Got following HTTP error code ${err.status}`);
    console.log(err.stack);
    res.status(err.status).json(err.message);
  } else {
    console.log(err.stack);
    res.status(500).json(err.message);
  }
}

export default errorHandler;
