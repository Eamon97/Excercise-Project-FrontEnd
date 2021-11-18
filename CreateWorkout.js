`use strict`;


let excerciseName = document.querySelector("#exName");
let noOfReps = document.querySelector("#noReps");
let targetMuscle = document.querySelector("#targetMuscle")

let noOfSets = document.querySelectorAll("#noSets");
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
        method: "POST", // We are specifying we are POSTing data
        headers: {
            "Content-type": "application/JSON", // Telling the server we are sending JSON
        },
        body: JSON.stringify(object), // We will be creating an object and passing it in here
    }).then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }

        console.log(response);
    });
};

inputBtn.addEventListener('click', createExcercise);