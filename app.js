"use strict";
// Question 13:- 
let vehicles = ["Moter cycle", "Car", "maruti suzuki"];
vehicles.forEach(vehicle => {
    console.log(`I world like ${vehicle}!`);
});
// Question 14:
let invitFriends = ["Areej", "Aqib", "Shahzaib", "Sharaz"];
invitFriends.forEach(invitFriend => {
    console.log(`Hello ${invitFriend},Wold you like to join me for the dinner?`);
});
// Question 15:
let guest = ["Areej", "Hina", "Samia", "Hiba"];
let new_guestList = guest.splice(3, 1, "aliza");
console.log(`${new_guestList} ,can not attend the dinner`);
//New_guest
let new_guest = guest;
new_guest.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
