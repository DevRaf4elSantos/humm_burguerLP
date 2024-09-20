// Disher refatoração futura 
const divDish = document.getElementById('dish')
const itensDish = require('./cardapio.json')

itensDish.map(item => {
    console.log(item.id)
})

console.log('Funcionou')
module.exports(divDish)