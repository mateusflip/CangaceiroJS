let campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos)

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    
    let tr = document.createElement('tr');

    campos.forEach(function(campo){
        //criar uma td sem informações
        let td = document.createElement('td')

        //atribuir um valor de campo a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    })

    //nova td que armazenará o volume de negociação
    let tdVolume = document.createElement('td')

    //faz o calculo do volume
    tdVolume.textContent = campos[1].value * campos[2].value;

    //Adicionando a td que faltava a tr
    tr.appendChild(tdVolume)

    tbody.appendChild(tr);

    //limpando os campos
    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0
    campos[0].focus();
});