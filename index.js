let parent = document.querySelector('#parent');
let ul = document.querySelector('ul');
let elem = document.querySelector('#elem');

let date = new Date();

let months = ['январь', 'февраль', 'март','апрель', 'май', 'июнь','июль', 'август', 'сентябрь','октябрь', 'ноябрь', 'декабрь'];
let span = document.createElement('span');
let mon = date.getUTCMonth();
span.innerHTML = months[mon] + ':&nbsp&nbsp&nbsp' +  date.getUTCFullYear();
elem.appendChild(span);
let daysMonth = (new Date(date.getFullYear(),++mon,0)).getDate();
days123();
addOpasityLis(date.getUTCFullYear(),mon);
for( let i = 1; i <= daysMonth; i++ ){
    let li = document.createElement('li');
    li.innerHTML = i;
    if( i == date.getDate() ){
        li.style.color = '#e60000';
    }
    ul.appendChild(li);
}


let buttonL = document.createElement('button');
buttonL.innerHTML = '←';
buttonL.dataset.value = 'L';
elem.insertAdjacentElement('beforebegin',buttonL);


let buttonR = document.createElement('button');
buttonR.innerHTML = '→';
buttonR.dataset.value = 'R';
elem.insertAdjacentElement('beforebegin',buttonR);


buttonR.addEventListener('click', function(){
    mon++;
    date = new Date(2022,mon);
    let monthR = date.getUTCMonth();
    span.innerHTML = months[monthR] + ':&nbsp&nbsp&nbsp' +  date.getUTCFullYear();
    parent.removeChild(ul);
    ul = document.createElement('ul');
    daysMonth = (new Date(date.getUTCFullYear(),++monthR,0)).getDate();
    days123();
    addOpasityLis(date.getUTCFullYear(),--monthR);
    for( let i = 1; i <= daysMonth; i++ ){
        let li = document.createElement('li');
        li.innerHTML = i;
        if( monthR == (new Date()).getMonth() && date.getFullYear() == (new Date()).getFullYear() && i == (new Date()).getDate() ){
            li.style.color = '#e60000';
        }
        ul.appendChild(li);
    }
    parent.appendChild(ul);
});

buttonL.addEventListener('click', function(){
    mon--;
    date = new Date(2022,mon);
    let monthR = date.getUTCMonth();
    span.innerHTML = months[monthR] + ':&nbsp&nbsp&nbsp' +  date.getUTCFullYear();
    parent.removeChild(ul);
    ul = document.createElement('ul');
    daysMonth = (new Date(date.getUTCFullYear(),++monthR,0)).getDate();
    days123();
    addOpasityLis(date.getUTCFullYear(),--monthR);
    for( let i = 1; i <= daysMonth; i++ ){
        let li = document.createElement('li');
        li.innerHTML = i;
        if( monthR == (new Date()).getMonth() && date.getFullYear() == (new Date()).getFullYear() && i == (new Date()).getDate() ){
            li.style.color = '#e60000';
        }
        ul.appendChild(li);
    }
    parent.appendChild(ul);
})


function addOpasityLis(year,numM){
    let firstDay = (new Date(year,numM,1)).getUTCDay();
    if( firstDay > 0 ){
        for( let i = 1; i <= firstDay; i++ ){
            let li = document.createElement('li');
            li.classList.add('opacity');
            li.innerHTML = '!';
            ul.appendChild(li);
        }
    }
}


function days123(){
    for( let i = 0; i < 7; i++ ){
        let li = document.createElement('li');
        if( i == 0 ){
            li.innerHTML = 'Пн';
        } else if ( i == 1 ){
            li.innerHTML = 'Вт';
        } else if ( i == 2 ){
            li.innerHTML = 'Ср';
        } else if ( i == 3 ){
            li.innerHTML = 'Чт';
        } else if ( i == 4 ){
            li.innerHTML = 'Пт';
        } else if ( i == 5 ){
            li.innerHTML = 'Сб';
        } else if ( i == 6 ){
            li.innerHTML = 'Вс';
        }
        li.classList.add('days');
        ul.appendChild(li);
    }
}