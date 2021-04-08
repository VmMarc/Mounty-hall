const secretDoors = ['goat', 'goat', 'goat']
const fs = require('fs')
const { randomInt } = require('crypto')
const readlineSync = require('readline-sync')


const n = randomInt(0, 3)

//placé une voiture dans le tableau (au hazar)
const carIndex = secretDoors[n] = 'car'
//console.log(gates)

//
//choix du joueur 
/*
let nb1 = secretDoors[0]
let nb2 = secretDoors[1]
let nb3 = secretDoors[2]
*/
const doors = Array(secretDoors.length).fill('?').join(' ')

console.log(`--> ${doors} <--`)
guessDoor = readlineSync.question('Choose the number of the door: ')

//Mounty choisi et dévoile un choix qui n'ai pas celui du joueur
const other_doors = secretDoors.filter(door => door !== guessDoor)
const showable = other_doors.filter(door => door !== carIndex)

//affiché le nouveau tableau au joueur

//demander au joueur si il veux changer ou garder la meme porte

// condition victoire/défaite
if (carIndex === finalGuess){
  console.log('YOU WIN!')
} else {
  console.log('Sorry you LOST this time...')
}