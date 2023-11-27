const input = document.querySelector(".input");
const para = document.querySelector(".para");

function inputHandler(event){
    // console.log(event.target.value);
    para.innerText = event.target.value;


}

//this will return a function
function debounce(callback, delay){
    //timerId is Id return by setTimeOut Method, so that we could clear it on requirment
    //and timer for setTimeOut will be started again
    let timerId;
    //as the calback function will have arguments we have used rest parameter to spread the argumnets
    return function (...args){
        //we have cleared the timer as eventlistener is caught
        clearInterval(timerId);
        timerId = setTimeout(()=> {
            callback(...args)
        },delay);
    }
}

input.addEventListener("keyup", debounce(inputHandler, 500));