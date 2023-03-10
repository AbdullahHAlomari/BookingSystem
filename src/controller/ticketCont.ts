import {PrismaClient} from '@prisma/client'
import { error } from 'console';
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import e from 'express';
import * as dotenv from 'dotenv'

export const createTicket = async(req:Request, res:Response) => {
  try {
    const { event, availableQty } = req.body;
    const ticket = await prisma.ticket.create({
      data: {
        event,
        availableQty,
      },
    });

    res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
export const createReservation = async (req: Request, res: Response) => {
    try {
      const { ticketId, email, firstName, lastName } = req.body;
  
      // check if the user exists
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // check if the user has already reserved the ticket for any event using this ticket
      const reservations = await prisma.reservation.findMany({
        where: {
          userId: user.id,
          ticket: {
            id: ticketId
          }
        },
      });
      if (reservations.length > 0) {
        return res.status(409).json({ message: 'User has already reserved this ticket' });
      }
  
      // create the reservation
      const reservation = await prisma.reservation.create({
        data: {
          user: { connect: { email } },
          ticket: { connect: { id: ticketId } },
        },
      });
  
      res.status(201).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
  
  export const deleteReservationByUserId = async (req: Request, res: Response) => {
    try {
      const { userId } = req.body;
  
      const deletedReservations = await prisma.reservation.deleteMany({
        where: {
          userId: userId,
        },
      });
  
      res.status(200).json({ message: `Deleted ${deletedReservations.count} reservations for user ${userId}` });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  };
  