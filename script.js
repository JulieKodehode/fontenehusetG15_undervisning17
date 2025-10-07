// JavaScript Conditions / JavaScript Betingelser
    // If/Else statement

// JavaScript Operators
// < Mindre 
// <= Mindre eller samme som
// > Større
// >= Større eller samme som
// && Og

const userAge = 23;

// Sant først
if (userAge >= 18) {
    console.log("Du er over 18. Kom inn!")
} else {
    console.log("Du er ikke over 18. Gå vekk!")
}

// Usant først
if (userAge < 18) {
    console.log("Du er ikke over 18. Gå vekk!")
} else {
    console.log("Du er over 18. Kom inn!")
}

if (userAge > 18) {
    console.log("Kom inn!")
} else if (userAge == 18) {
    console.log("Akkurat 18. Bursdagsbarn!")
} else if (userAge > 20 && userAge <= 25) {
    console.log("Du er mellom 20 og 25")
} else {
    // userAge < 18
    console.log("Gå vekk!")
}

//
//

const clock = 11;

if (clock >= 1 && clock <= 6) {
    console.log("Det er natt!")
}
else if (clock >= 7 && clock <= 10) {
    console.log("Det er morning")
} 
else if (clock >= 11 && clock <= 15) {
    console.log("Det er dag.")
}
else {
    // clock >= 16 && clock <= 24
    console.log("Det er kveld.")
};

// Eksempel
/*if () {
    // Noe sant
} else if () {
    // Noe usant
} else {
    // Feil i koden
}*/

//
//

const unitButton = document.querySelector("#unitButton");

unitButton.addEventListener("click", function () {
    event.preventDefault();

    const unitValue = document.querySelector("#unitValue").value;
    const unitFrom = document.querySelector("#unitFrom").value;
    const unitTo = document.querySelector("#unitTo").value;
    const unitDisplay = document.querySelector("#unitDisplay");

    if (unitFrom === "MM" && unitTo === "CM") {
        console.log(unitValue / 10);
        unitDisplay.textContent = unitValue / 10;
        unitDisplay.textContent = `${unitValue} ${unitFrom} er det samme som ${unitValue / 10} ${unitTo}`
    } else if (unitFrom === "MM" && unitTo === "M") {
        console.log(unitValue / 1000);
        unitDisplay.textContent = `${unitValue} ${unitFrom} er det samme som ${unitValue / 1000} ${unitTo}`
    } else if (unitFrom === "CM" && unitTo === "MM") {
        console.log(unitValue * 10);
        unitDisplay.textContent = `${unitValue} ${unitFrom} er det samme som ${unitValue * 10} ${unitTo}`;
    } else if (unitFrom === "CM" && unitTo === "M") {
        console.log(unitValue / 100);
        unitDisplay.textContent = `${unitValue} ${unitFrom} er det samme som ${unitValue / 100} ${unitTo}`;
    } else if (unitFrom === "M" && unitTo === "MM") {
        console.log(unitValue * 1000);
        unitDisplay.textContent = `${unitValue} ${unitFrom} er det samme som ${unitValue * 1000} ${unitTo}`;
    } else if (unitFrom === "M" && unitTo === "CM") {
        console.log(unitValue * 100);
        unitDisplay.textContent = `${unitValue} ${unitFrom} er det samme som ${unitValue * 100} ${unitTo}`;
    } else if ( (unitFrom === "MM" && unitTo === "MM") || (unitFrom === "CM" && unitTo === "CM") || (unitFrom === "M" && unitTo === "M") ) {
        console.log("Velg to målenheter som ikke er like")
    } else {
        console.log("Noe galt skjedde :(");
    }
})