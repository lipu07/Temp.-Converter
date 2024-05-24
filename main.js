const celsiusField= document.querySelector("#celsius")
const degree= document.querySelector("#degree")
const convertBtn= document.querySelector("#convert-btn")
const tempType= document.querySelector("#temp-type")


window.addEventListener("load", ()=>{
    degree.value= __;
    celsiusField.innerHTML= __;
})



function converToCalculus(){
    let inputValue =degree.value;

    setTimeout(() => {
        if(tempType.value==="fahrenheit"){
            const fahrenheitToCelsius= (inputValue - 32) * (5/9);
            celsiusField.innerHTML= `${fahrenheitToCelsius.toFixed(3)} &deg; c`
        }
        else if(tempType.value==="kelvin"){
            const kelvinToCelsius= inputValue - 273.15;
            celsiusField.innerHTML= `${kelvinToCelsius.toFixed(3)} &deg c`
        }
    }, 1100);
}

convertBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    converToCalculus();

    convertBtn.innerHTML= "<span><i class='ri-loader-2-line'></i>CONVERTING</span>"
    setTimeout(() => {
        convertBtn.innerHTML="<span>CONVERT</span>"
    }, 1000);
})

