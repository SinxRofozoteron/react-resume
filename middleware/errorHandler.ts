import { NextFunction, Request, Response } from "express";
import axios from "axios";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let status: number = 500;
  if (axios.isAxiosError(err) && err.response?.status) {
    status = err.response.status;
    console.log(`Got following HTTP error code ${status}`);
  }
  console.log(err.stack);
  res.status(status).json(err.message);
}

export default errorHandler;
