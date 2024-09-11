const openai = require('../config/openaiConfig');

const generateRecipe = async (ingredients) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Come up with a tasty, easy and fast recipe that only includes these ingredients: ${ingredients}`,
          },
        ],
        max_tokens: 100,
      });
  
      console.log(response.choices[0].message.content);
    } catch (error) {
      console.error("Error generating recipe:", error);
    }
  };
  
  module.exports = { generateRecipe };