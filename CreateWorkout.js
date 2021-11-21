`use strict`;


let excerciseName = document.querySelector("#exName");
let noOfReps = document.querySelector("#noReps");
let targetMuscle = document.querySelector("#targetMuscle")

let noOfSets = document.querySelector("#noSets");
let inputBtn = document.querySelector("#inputBtn");

let createExcercise = () => {
    let excerciseNameValue = excerciseName.value;
    let targetMuscleValue = targetMuscle.value;
    let noOfRepsValue = noOfReps.value;
    let noOfSetsValue = noOfSets.value;
    let newObject = {
        excerciseName: excerciseNameValue,
        muscleTargeted: targetMuscleValue,
        noOfReps: noOfRepsValue,
        noOfSets: noOfSetsValue
    };
    postFetch(newObject);
};

let postFetch = (object) => {
    fetch("http://localhost:9000/Excercise/create", {
        method: "POST",
        headers: {
            "Content-type": "application/JSON",
        },
        body: JSON.stringify(object),
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }

        console.log(response);
    });
};

inputBtn.addEventListener('click', createExcercise);

let wpNumber = document.querySelector("#wpNumber");
let dayWeek = document.querySelector("#dayWeek");
let wpBtn = document.querySelector("#wpBtn");

let addToWP = () => {
    let wpNumberValue = wpNumber.value;
    let dayValue = dayWeek.value;


    let newWP = {

        sessionID: wpNumberValue,
        dayOfWeek: dayValue,
        noOfSets: noOfSetsValue
        excercises: postFetch(newObject)
    };
    postFetch(newWP);
};

wpBtn.addEventListener('click', addToWP);

