import { Route, Routes } from "react-router-dom";

import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
// import PrivateRoute from "../Auth/PrivateRoute";
import Error404 from "../Error404";
import AddTicket from "../tickets/AddTicket";
import FindEvent from "../tickets/FindEvent";
import MainTicket from "../tickets/MainTicket";

function Routers() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Tickets" element={<MainTicket />} />
      <Route path="/post" element={<AddTicket />} />
      {/* <Route path="/Ticket/:id" element={<FindEvent />} /> */}
    </Routes>
  );
}

export default Routers;
