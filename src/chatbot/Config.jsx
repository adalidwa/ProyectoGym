import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './BotAvatar';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const config = {
  botName: "NutriBot",
  initialMessages: [createChatBotMessage("Hola, ¿en qué puedo ayudarte hoy?")],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
