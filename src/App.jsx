import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import Config from './chatbot/Config';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';
import TimelineNovedades from './componentes/TimelineNovedades/TimelineNovedades';
import RecomendacionDieta from './componentes/RecomendacionDieta/RecomendacionDieta';

function App() {
  return (
    <RecomendacionDieta/>

    //   <div className="Chatbot">
    //     <h1>Chatbot Nutricional</h1>
    //     <Chatbot
    //       config={Config}
    //       messageParser={MessageParser}
    //       actionProvider={ActionProvider}
    //     />
    // </div>
  );
}

export default App;
