let Submit = document.getElementById('submitbtn');
let resultVal = document.getElementById('result');
resultVal.className = "d-none";



Submit.addEventListener('click', (e) => {
    let randomVal = Math.round(Math.random(1) * 10);
    let tmp = 0;
    //console.log(store);
    for (let i = 1; i < 4; i++) {
        let Prompt = prompt("Enter a number 1 t0 10");
        if (Prompt == randomVal) {
            //console.log("Win");
            tmp = 1;
            break;

        } else if (Prompt < randomVal) {
            alert("Correct answer is greater!");
            tmp = 0;
        } else if (Prompt > randomVal) {
            alert("Correct answer is smaller!");
            tmp = 0;
        }
        else if(Prompt.length<0){
            alert("Input field is empty!");
            tmp=0;
        }
    }
    if (tmp) {
        resultVal.innerText = "You Win!";
        resultVal.className = "d-block text-success font-weight-bold";
    }
    else{
         resultVal.innerText = "You Loss!";
         resultVal.className = "d-block text-danger font-weight-bold";
    }
});