import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
const config = {
  botName: "NutriSmart",
  initialMessages: [createChatBotMessage("¡Hola! Soy NutriSmart. Puedo darte la información nutricional del alimento que quieras. Así que dime, ¿de qué alimento deseas adquirir la información nutricional?")],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} avatarUrl="https://w7.pngwing.com/pngs/980/386/png-transparent-round-red-gray-and-black-robot-logo-sphere-smile-bioman-avatar-1-red-game-sphere-emoticon-thumbnail.png" />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "red",
    },
  },
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;