const qrInput = document.querySelector("#qrInput");
const qrButton = document.querySelector("#qrButton");
const qrImg = document.querySelector("#qrImg");

qrButton.addEventListener("click", ()=>{

    const inputValue = qrInput.value;

    if(!inputValue){
        alert("Kya Majak kar raha bhai tu (input Empty)");
        return;
    }
    else{
      qrImg.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
      qrImg.alt = `qr code for ${inputValue}`;
    }
    
});