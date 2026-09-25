import { db } from "../DB/connection.mjs";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export const register = async (req,res)=>{
    try {
       
        const {username, email, password} = req.body;


        const userFound = await db.collection('users').findOne({email});

        if(userFound){
            res.send('User already exists.')
        }else{

        const hashPassword = bcrypt.hashSync(password, 10);

        await db.collection('users').insertOne({
            username, email, password: hashPassword
        });
        
        res.send('User Registered successfully!')
      }

    } catch (error) {
        console.log(error);
        res.send("User Registration Failed!")
    }


}




export const login = async (req,res)=>{
    try {
        
         const { email, password} = req.body;


        const userFound = await db.collection('users').findOne({email});

        if(userFound){
          
          const isUserValid = bcrypt.compareSync(password,userFound.password)

            if(isUserValid){

              const token =  jwt.sign({username: userFound.username, email: userFound.email},process.env.SECRET_KEY,{ expiresIn: 60*60*24*3});

              res.send({
                token
              })

            }
            else{
                res.send({errorMessage: "Password is invalid"})
            }


        }
        else{
            res.send({errorMessage:"User not Found with that email."})
        }




    } catch (error) {
        console.log(error);
        res.send({errorMessage: error})
    }
}













