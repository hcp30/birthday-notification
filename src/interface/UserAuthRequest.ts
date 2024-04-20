import { Request } from "express"

export default interface UserAuthRequest extends Request {
    userId: string
}