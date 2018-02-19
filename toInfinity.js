function beyond(num){
    if(isFinite(num)=== false){
        console.log('And beyond');
    }
    else if(isFinite(num)=== true && num > 0){
        console.log('To infinity');
    }
    else if(isFinite(num)===true && num < 0){
        console.log('To negative infinity');
    }
    else if(num === 0){
        console.log('Staying home');
    }
}
beyond(0);