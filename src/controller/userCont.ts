import {PrismaClient} from '@prisma/client'
import { error } from 'console';
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import e from 'express';
import * as dotenv from 'dotenv'

export const signup = async (req: Request, res: Response) => {
    try {
      const { email, firstname, lastname, password } = req.body;
      const hashedPassword = await argon2.hash(password);
  
      const user = await prisma.user.create({
        data: {
          email,
          firstname,
          lastname,
          password: hashedPassword,
        },
      });
  
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  

  export const login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordValid = await argon2.verify(user.password, password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.API_SECRET as string);
  
      res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  


  export const deleteUserByEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
  
      // check if the user exists
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // delete the user
      await prisma.user.delete({ where: { email } });
  
      res.status(200).json({ message: `User ${email} deleted successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
  