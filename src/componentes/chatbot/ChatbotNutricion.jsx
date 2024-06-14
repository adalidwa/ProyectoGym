import React from 'react'
import "./ChatbotNutricion.css"
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import VolverAtras from '../Productos/VolverAtras';
import "./ChatbotStyles.css"

function ChatbotNutricion() {
  return (
    <div className="contenedor_usuario">
      <VolverAtras/>
        <div className="contenedor_chat">      
          <div className="Chatbot">
              {/* <h1>Chatbot Nutricional</h1> */}
              <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              />
          </div>

        </div>
    </div>
  )
}

export default ChatbotNutricion