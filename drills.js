function jediName(firstName, lastName){
    let jediFirst = firstName[0] + firstName[1];
    let jediLast = lastName[0] + lastName[1] + lastName[2];
    return jediLast + jediFirst;
}
let jediNickname =jediName('Beyonce', 'Knowles');

console.log(jediNickname);
