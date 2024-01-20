import { usersModel } from "../models/users.model.js"
import { logger } from "../utils/logger.js"

class UsersManager {
    async createUser(user){
        const result = await usersModel.create(user)
        logger.http("User created correctly")
        return result
    }
    async findById(id){
        const result = await usersModel.findById(id)
        logger.http("User by id received correctly")
        return result
    }
    async findByEmail(email){
        const result = await usersModel.findOne({email})
        logger.http("User by email received correctly")
        return result
    }
}

export const usersManager = new UsersManager()