import { getUser } from '../models/userModel/User.model.js'

export const useAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            // check in db
            const user = await getUser(authorization)
            console.log(user)
            return user?._id ? next() : res.status(403).json({
                status: "error",
                message: "You are not authorized to access this resource"
            })
        }
        res.status(403).json({
            status: "error",
            message: "You are not authorized to access this resource"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "You are not authorized to access this resource"
        })
    }


}