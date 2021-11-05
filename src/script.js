"use strict";

// TODO - write your code here.


const randomDamage = () => {

    let min = 1;
    let max = 10;

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber;
}

// console.log(randomDamage());



const chooseOption = (opt1, opt2) => {
    
    let randNum = Math.floor(Math.random() * 2);

    return randNum === 0 ? opt1 : opt2;
}

// console.log(chooseOption("Genius", "Sucker"));



function attackPlayer(health) {

    let damage = randomDamage();

    return health - damage;
}

// console.log(attackPlayer(7));

const logHealth = (player, health) => {

    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {

    console.log(`${winner} defeated ${loser}`);

}

const isDead = (health) => {

    return health <= 0 ? true : false;
}

function fight(player1, player2, player1Health, player2Health) {

    while(true) {

        let attacker = chooseOption(player1, player2);

        if(attacker === player1) {

            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);

            if(isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1,player2Health);
            if(isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

// console.log(fight("Ramiro", "Carmen", 100, 100));

// extended challenges

// let getGrade = (num) => {

//     if (num <= 100) 
//     {
//         if(num >= 90) {
//             return "A";
//         }
//         else if (num >=80) {
//             return "B";
//         }
//         else if (num >=70) {
//             return "C";
//         }
//         else if (num >=60) {
//             return "D";
//         }
//         else {
//             return "F";
//         }

//     }
// }

// console.log(getGrade(59));

// let urgent = true;
// let important = false;

// let prioritize = (urgent, important) => {

//     if(urgent === true && important === true) {
//         return 1;
//     }
//     else if (important === true && urgent === false) {
//         return 2;
//     }
//     else if (important === false && urgent === true) {
//         return 3;
//     }
//     else {
//         return 4;
//     }

//  }

//  console.log(prioritize(urgent,important));

// let calculatePay = function(hours, wage) {
    
//     if (hours > 40) {
        
//         return wage * 1.5 * (hours - 40) + (wage * 40);
//     }

//     else {
//         return wage * hours;
//     }

// }

// console.log(calculatePay(40,10));