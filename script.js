
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');


function handclick(events) {
    events.target.textContent = "purchased";
    events.target.style.color = "cadetblue"
}
button1.addEventListener('click', handclick)

function clickhan(events){
    events.target.textContent = 'Added';
    events.target.style.color = 'red';
}
button2.addEventListener('click', clickhan)

function clickhan2(events){
    events.target.textContent = 'Added';
    events.target.style.color = 'red';
}
button3.addEventListener('click', clickhan2)

function clickhan4(events){
    events.target.textContent = 'Added';
    events.target.style.color = 'red';
}
button4.addEventListener('click', clickhan4)

/*
const paymethod1 = document.getElementById('paymethod1');
const paymethod2 = document.getElementById('paymethod2')
const paymethod3 = document.getElementById('paymethod3')
const paymethod4 = document.getElementById('paymethod4')
const paymethod5 = document.getElementById('paymethod5')

document.getElementById('btsubmit').onclick = function (){
    if (paymethod1.checked) {
        console.log('Master Card')
    }
    else if(paymethod2.checked){
        console.log('Osbibi Card')
    }
     else if(paymethod3.checked){
        console.log('Verve Card')
    }
    else if(paymethod4.checked){
        console.log('Apple Card')
    }
    else if(paymethod5.checked){
        console.log('Visa Card')
    }
    else{
        console.log("Enter Valid Card")
    }

            
}
*/