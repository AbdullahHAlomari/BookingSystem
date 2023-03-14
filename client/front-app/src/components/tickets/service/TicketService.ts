import React from 'react'
import http from "../http-common";
import ITicketData from '../types/Tickets';


const getAll = () => {
  return http.get<Array<ITicketData>>("/Tickets");
};

const get = (id: any) => {
  return http.get<ITicketData>(`/Ticket/${id}`);
};
const create = (data: ITicketData) => {
  return http.post<ITicketData>("/Tickets", data);
};

const update = (id: any, data: ITicketData) => {
  return http.put<any>(`/Tickets/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/Tickets/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/Tickets`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITicketData>>(`/Tickets?evebt=${event}`);
};

const TicketDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TicketDataService;