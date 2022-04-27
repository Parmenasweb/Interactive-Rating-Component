let kol;
let button = document.getElementsByClassName('button')[0];
let submit = document.querySelector(".submitted");
let ratingDisplay = document.getElementsByClassName("rating-display")[0];
let rating = document.getElementsByClassName('no');

//--------------------adding an eventlistener to all the rating numbers ----------------

for(let i of rating) {
    i.addEventListener("click", (event)=> {
        event.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
        kol = i.innerHTML;
        if(Number(kol)>0 && Number(kol)<=5) {
            button.addEventListener("click", ()=> {
                document.querySelector('.container').style.display = 'none';
                submit.classList.remove('hidden');
                ratingDisplay.textContent = `You selected ${kol} out of 5`;
            });
        }else {
            console.log(kol);
        }
    })
}
//-------------adding a click event 