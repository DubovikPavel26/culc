let screen = document.querySelector('.calculator__screen');

let buttons = document.querySelectorAll('.calculator__button');

let ac = document.getElementById('ac');

let changeButton = document.getElementById('change');

const settings = {
    a: '',
    b: '',
    sign: '',
    finish : false
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

const actions = [ '%', '/', '*', '-', '+'];

function cleanScreen(){
    settings.a = '';
    settings.b = '';
    settings.sign = '';

    screen.textContent = 0;

}

ac.addEventListener('click', () => {
    cleanScreen();

});


changeButton.addEventListener('click', () => {

     if(settings.b === ''){
        settings.a = (+settings.a) * -1;  
        screen.textContent = settings.a; 
     } 
     else if(settings.a !=='' && settings.b !== '' && settings.finish){
        settings.a = (+settings.a) * -1;  
        screen.textContent = settings.a;
     }
     
     else {
        settings.b = (+settings.b) * -1;
        screen.textContent = settings.b;
     } 
    }
   )







buttons.forEach((el) => el.addEventListener('click', (e) => {

   let key =  e.target.textContent;



   if(numbers.includes(key)){
    if(settings.b === '' && settings.sign === ''){
        if (key === '.' && settings.a.includes('.') || (settings.a === '0' && key === '0') ) {
            settings.a += '';
            screen.textContent = settings.a;
        } else {
            settings.a += key;
            screen.textContent = settings.a.replace(/^0+/, '')
        }
        
    } else if(settings.a !== '' && settings.b !== '' && settings.finish){

        settings.b = key;
        settings.finish = false
        screen.textContent = settings.b.replace(/^0+/, '')


    } else{
        if (key === '.' && settings.b.includes('.') || (settings.b === '0' && key === '0')) {
            settings.b += '';
            screen.textContent =settings.b
        } else {
            settings.b += key;
            screen.textContent = settings.b.replace(/^0+/, '')
        }
    }
    


   

   }


   if(actions.includes(key)){
    settings.sign = key;
   }




   if(key === '='){
    switch(settings.sign){
        case '+': settings.a =  (+settings.a) + (+settings.b);
        break; 

        case '-': settings.a =  (+settings.a) - (+settings.b);
        break; 

        case '*': settings.a =  (+settings.a) * (+settings.b);
        break; 

        case '/':
            if(settings.b === '0'){
                screen.textContent = 'ошибка';
                settings.a = '';
                settings.b = '';
                settings.sign = '';
                return;

            }
            settings.a =  (+settings.a) / (+settings.b);
        break; 

        case '%': settings.a = (+settings.a) * 100 / (+settings.b);
    



        
    }

    settings.finish = true;

    screen.textContent = settings.a;
   }

}) )