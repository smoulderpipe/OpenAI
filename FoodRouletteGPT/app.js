const readline = require('readline')
const {generateRecipe} = require("./controllers/openaiController")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What's left in the fridge? \n", generateRecipe)