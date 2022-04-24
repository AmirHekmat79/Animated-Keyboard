let $ = document;
let keyContainer = $.querySelector('#keyContainer');
let keyNumber2 = $.querySelector('.number2');
let pinkKeys = $.querySelectorAll('.Pink');
let redKeys =  $.querySelectorAll('.red');
let orangeKeys = $.querySelectorAll('.orange');
let yellowKeys = $.querySelectorAll('.yellow');
let wheatKeys = $.querySelectorAll('.wheat');
let keyboardKeys = $.querySelectorAll('.keyboardKeys');

// keyStyles
pinkKeys.forEach(function(item){
    item.style.cssText = 'background-color:#fab1a0;'
})
redKeys.forEach(function(item){
    item.style.cssText = 'background-color:#ED4C67;'
})
orangeKeys.forEach(function(item){
    item.style.cssText = 'background-color:#F79F1F;'
})
yellowKeys.forEach(function(item){
    item.style.cssText = 'background-color:#FFC312;'
})
wheatKeys.forEach(function(item){
    item.style.cssText = 'background-color:#eccc68;'
})
// End Of keyStyles

// set keyup event on body And Append A key that pressed in to the body
$.body.addEventListener('keyup' ,function(event){
    event.preventDefault();
    console.log(event)
    let keyContainerValue = keyContainer.innerHTML;
    let Key = event.key;
    keyboardKeys.forEach(function(item){
        if(item.id == Key){
            item.style.animation = 'moveKeys 1 0.5s';
        }
        item.addEventListener('animationend' , function(){
            item.style.animation = '';
        })
     })
    if(Key === 'Backspace' && keyContainerValue !=''){
        keyContainerValue = keyContainerValue.slice(0,-1);
        keyContainer.innerHTML = keyContainerValue;
    }else{
        keyContainer.append(Key);
    }
})