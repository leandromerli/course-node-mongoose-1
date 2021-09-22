import bcrypt from "bcryptjs";
import config from "config";
import  { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import gravatar from "gravatar";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import Payload from "../../types/Payload";
import Request from "../../types/Request";
import UserModel, { IUser } from "../../models/UserModel";

//import { UserController } from "../../controllers/userController";

const router: Router = Router();


export default router;
