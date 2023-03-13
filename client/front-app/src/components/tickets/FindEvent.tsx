// import React, { useState, useEffect, ChangeEvent } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import TicketDataService from "./service/TicketService";
// import ITicketData from "./types/Tickets";

// function FindEvent() {
//   const { id } = useParams();
//   let navigate = useNavigate();

//   const initialTicketState = {
//     id: "",
//     event: "",
//     qty: 0,
//     img:""
//   };

//     const [currentTutorial, setCurrentTutorial] =
//       useState<ITicketData>(initialTicketState);
//     const [message, setMessage] = useState<string>("");

//     const getTicket = (id: string) => {
//       initialTicketState.get(id)
//         .then((response: any) => {
//           setCurrentTutorial(response.data);
//           console.log(response.data);
//         })
//         .catch((e: Error) => {
//           console.log(e);
//         });
//     };

//     useEffect(() => {
//       if (id) getTicket(id);
//     }, [id]);

//     const handleInputChange = (event: ChangeEvent) => {
//       const { target } = event;
//       setCurrentTutorial({ ...currentTutorial, [name]: value });
//     };



//       initialTicketState.update(currentTutorial.id, data)
//         .then((response: any) => {
//           console.log(response.data);
//           setCurrentTutorial({ ...currentTutorial, published: status });
//           setMessage("The status was updated successfully!");
//         })
//         .catch((e: Error) => {
//           console.log(e);
//         });
//     };

//     const updateTutorial = () => {
//       initialTicketState.update(currentTutorial.id, currentTutorial)
//         .then((response: any) => {
//           console.log(response.data);
//           setMessage("The tutorial was updated successfully!");
//         })
//         .catch((e: Error) => {
//           console.log(e);
//         });
//     };

//     const deleteTutorial = () => {
//       initialTicketState.remove(currentTutorial.id)
//         .then((response: any) => {
//           console.log(response.data);
//           navigate("/tutorials");
//         })
//         .catch((e: Error) => {
//           console.log(e);
//         });
//     };

//   return <div></div>;
// }

// export default FindEvent;
import React from 'react'

function FindEvent() {
  return (
    <div>
      
    </div>
  )
}

export default FindEvent
