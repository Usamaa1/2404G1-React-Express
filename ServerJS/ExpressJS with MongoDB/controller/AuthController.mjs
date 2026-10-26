import bcrypt, { hash } from "bcryptjs";
import { db } from "../DB/connection.mjs";
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        db.collection('users').insertOne({
            username,
            email,
            password: passwordHash
        });

        res.send({message: 'User Registered successfully!'});



    } catch (error) {
        console.log(error)
        res.send({errorMessage: error})
    }
}


export const login = async (req,res)=>{
    try {
        const {email, password} = req.body;


        const isUserEmailValid = await db.collection('users').findOne({email});
        console.log("fsdfsdfd",isUserEmailValid)

        if(isUserEmailValid){

           const isPasswordMatched = bcrypt.compareSync(password, isUserEmailValid.password);
        
           if(isPasswordMatched){


           const token = jwt.sign({email: isUserEmailValid.email, password : isUserEmailValid.password}, process.env.SECRET_KEY, {expiresIn: 60 * 60 * 24});


           res.cookie('token',token,{maxAge: 60*60*24,httpOnly:true});



            res.send({token})







           }
           else{
            res.send({errorMessage: "Incorrect Password"})
           }



        }else{

            res.send({errorMessage: "User not found!"})
        }




    } catch (error) {
        console.log(error)
        res.send({errorMessage: error})
    }
}


export const me =(req,res)=>{
    const {email} =req.user;
    res.send({email});
}