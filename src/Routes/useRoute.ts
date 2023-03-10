import validate  from '../middleware/validate'
import express, { Router } from 'express'
import {auth} from './../middleware/auth'
let router = express.Router()
import {z} from 'zod'
import { createReservation, createTicket, deleteReservationByUserId } from '../controller/ticketCont'
import { deleteUserByEmail, login, signup } from '../controller/userCont'

// Ticket section
router.post("/ticket", createTicket)
router.post('/reserve', createReservation)
router.delete('/deletereserve', deleteReservationByUserId)

// User Section
router.post('/signup', signup)
router.post('/login', login)
router.delete('/deleteuser', deleteUserByEmail)




export default router