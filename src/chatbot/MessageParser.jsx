import React from 'react';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    // Palabras clave comunes en preguntas sobre información nutricional
    const keywords = ["información", "nutrición", "calorías", "proteínas", "grasas", "carbohidratos"];
    
    // Eliminar las palabras clave de la consulta para encontrar el alimento
    const words = lowercase.split(" ").filter(word => !keywords.includes(word));
    const foodItem = words.join(" ").trim();

    if (foodItem) {
      console.log(`Food item parsed: ${foodItem}`);
      this.actionProvider.handleNutritionalInfo(foodItem);
    } else {
      this.actionProvider.handleUnknown('');
    }
  }
}

export default MessageParser;
