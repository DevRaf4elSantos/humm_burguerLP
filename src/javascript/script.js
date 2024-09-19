$(document).ready(() => {
    $('#btn_mobile').on('click', () => {
        $('#menu_mobile').toggleClass('active');
        $('#btn_mobile').find('i').toggleClass('fa-x');
    })
})

// Disher refatoração futura 
const divDish = document.getElementById('dish')
const itensDish = require('./cardapio.json')

itensDish.map(item => {
    console.log(item.id)
})