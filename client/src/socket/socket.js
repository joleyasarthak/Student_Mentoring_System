import io from "socket.io-client";
import React from "react";

const ENDPOINT = process.env.BACKEND_URI;

// var socket;

// function connectSocket(token) {
//     socket = io(ENDPOINT, {
//         query: { auth: token },
//     });
//     return socket;
// }

// const SocketContext = React.createContext(socket);

// export default connectSocket;

export const socket = io(ENDPOINT);

export const SocketContext = React.createContext();
