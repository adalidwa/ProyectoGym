import React from 'react';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleNutritionalInfo = async (food) => {
    const appId = '9e9c023d';
    const appKey = 'fff28e2dc86b5eadba0d0f372a351e9a';
    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${food}`;

    try {
      console.log(`Fetching data for: ${food}`);
      const response = await fetch(url);
      console.log(`Response status: ${response.status}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data received from API:', data);

      if (data.hints && data.hints.length > 0) {
        const nutrients = data.hints[0].food.nutrients;
        console.log('Nutrients:', nutrients);

        const message = this.createChatBotMessage(`Información nutricional para ${food}: 
          - Calorías: ${nutrients.ENERC_KCAL || 'N/A'} kcal
          - Proteínas: ${nutrients.PROCNT || 'N/A'} g
          - Grasas: ${nutrients.FAT || 'N/A'} g
          - Carbohidratos: ${nutrients.CHOCDF || 'N/A'} g`);

        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));

        // Añadir mensaje adicional
        const followUpMessage = this.createChatBotMessage("¿De qué otro alimento te gustaría saber la información nutricional?");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, followUpMessage],
        }));

      } else {
        this.handleUnknown(food);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.handleUnknown(food);
    }
  };

  handleUnknown = (food) => {
    const message = this.createChatBotMessage(`Lo siento, no pude encontrar la información nutricional para ${food}. Por favor, intenta preguntar de otra manera.`);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
