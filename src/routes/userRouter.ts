import express from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserData } from '../data/UserData'

export const userRouter = express.Router()

const userData = new UserData()
const userBusiness = new UserBusiness(userData)
const userController = new UserController(userBusiness)

userRouter.post("/signup", (req, res) => userController.signUp(req, res))
userRouter.post("/login", (req, res) => userController.login(req, res))