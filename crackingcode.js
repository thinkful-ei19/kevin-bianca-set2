function decode(string){
    let answer = '';
    let split = string.split(' ');
    for(var i = 0; i < split.length; i++){
        if(split[i][0]=== 'a'){
            answer += split[i][1];
        }
        else if(split[i][0]=== 'b'){
            answer += split[i][2];
        }
        else if(split[i][0]=== 'c'){
            answer += split[i][3];
        }
        else if(split[i][0]=== 'd'){
            answer += split[i][4];
        }
        else {
            answer += ' ';
        }
    }
    return answer;
}
let log = decode('craft block argon meter bells brown croon droop');
console.log(log);