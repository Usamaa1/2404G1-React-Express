
import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res,next) => {

    try {

        const { token } = req.cookies;
        console.log(req.cookies)

        console.log(token);

        const user = jwt.verify(token, process.env.SECRET_KEY)

        if (user) {
            req.user = user;
        
            next();

        } else {
            res.send({ message: "token expired" });
        }




    } catch (error) {
        console.log(error);
        res.send({
            errorMessage: error
        })
    }



}




