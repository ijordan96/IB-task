// I declare the hours like a const since they are not going to change 
const button = document.getElementById("button");
button.addEventListener('click',() => {
    const openAt = 800;
    const closeAt = 1600;
    
    let date = new Date();
    
    let today = date.getDay();
    currentHours = date.getHours();
    currentMinutes = ("0" + date.getMinutes()).slice(-2);
    let now = currentHours + currentMinutes;
    
    if ((today > 0 && today <6) && (openAt <= Number(now) &&  Number(now)< closeAt)) {
        alert('Welcome to my store 😊, how can I help you?');
    } else {
        alert(currentHours);
        var nextAvailability = (currentHours > (openAt)/100) ? (24-currentHours+8) : (8-currentHours);//24 referes to 24 hrs, so if we get the number of 
        //hours left to 24, we just need to sum 8 to get to the open close the next day (if it's not a weekend)
        if (today == 6){
            nextAvailability =  (currentHours > (openAt)/100) ? nextAvailability + 24 : nextAvailability + 48;
        }
        if (today == 0 ){
            nextAvailability =  (currentHours > (openAt)/100) ? nextAvailability  : nextAvailability + 24;
        }
        alert(`An agent will be available in the next ${nextAvailability} hours`);
    };

})


