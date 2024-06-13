import React from 'react';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    const keywords = ["información", "nutrición", "calorías", "proteínas", "grasas", "carbohidratos"];

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



