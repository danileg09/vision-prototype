import { Request, Response } from "express"

const users = [
    { name: 'Diego', email: 'diego@email.com'},
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    }
}