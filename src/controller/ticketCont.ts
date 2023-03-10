import {Prisma, PrismaClient} from '@prisma/client'
import { error } from 'console';
const prisma = new PrismaClient();
import express, {Request,Response} from 'express';
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import e from 'express';
import * as dotenv from 'dotenv'


// import { PrismaClient } from '@prisma/client';
// import express, { Request, Response } from 'express';
// import * as argon2 from 'argon2';
// import * as jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';

// const prisma = new PrismaClient();

// dotenv.config();

export const createTicket = async (req: Request, res: Response) => {
  try {
    const { event, availableQty } = req.body;
    const ticket = await prisma.ticket.create({
      data: {
        event,
        availableQty,
      },
    });

    setTimeout(async () => {
      // Get all reservations for this ticket
      const reservations = await prisma.reservation.findMany({
        where: {
          ticketId: ticket.id,
        },
        include: {
          user: true,
        },
      });
    
      // Randomly select users equal to availableQty
      const selectedUsers = [];
      const totalReservations = reservations.length;
      const usedIndices = new Set();
      for (let i = 0; i < availableQty && i < totalReservations; i++) {
        let randomIndex = Math.floor(Math.random() * totalReservations);
        while (usedIndices.has(randomIndex)) {
          randomIndex = Math.floor(Math.random() * totalReservations);
        }
        usedIndices.add(randomIndex);
        selectedUsers.push({
          id: `${ticket.id}_${reservations[randomIndex].userId}`, // Add ID based on ticket ID and user ID
          reservationId: reservations[randomIndex].id,
          userId: reservations[randomIndex].userId,
          ticketId: reservations[randomIndex].ticketId,
          expirationTime: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes in milliseconds
        });
      }
    
      // Add selected users to selecteduser database
      await prisma.selecteduser.createMany({
        data: selectedUsers,
      });
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

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
  