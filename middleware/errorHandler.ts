import { NextFunction, Request, Response } from "express";

export class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
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
    res.status(err.status).send(err.message);
  } else {
    console.log(err.stack);
    res.send(500).send(err.message);
  }
}

export default errorHandler;
