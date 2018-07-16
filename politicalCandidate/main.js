const elizabethSingler = {
    district: "Tennessee-5th-District",
    platform: {
        taxes: "tax the upper classes",
        jobs: "programs for people to change careers",
        infrastructure: "new paved roads and bus system",
        HealthCare: "affordable healthcare for lower class",
        Crime: "give convicts chance to reform"
    },
    biography: "",
    missionStatement: "Make Stuff Better"

}

const urls = {
    donationForm: "www.nashvillesoftwareschool.com",
    registerVote: "www.newyorktimes.com"
}

const eventsCalendar = {
    april: "rally",
    june: "roundtable with people in district",
    july: {
        firstSunday: "debate with bad guy",
        thirdSunday: "kiss a baby"
    }
}

const volunteerInfo = {
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    availability: "",
    activities: []
}

// changing the new bio

let newBio = "I love baking!!"

function changeBiography (bio) {
    elizabethSingler.biography = bio;
    console.log(bio)
}

changeBiography(newBio)

console.log(elizabethSingler.biography)

// adding volunteer info

const myVolunteerInfo = {
    name: "alejandro",
    address: "nashville",
    email: "politician@aol.com",
    availability: "Wednesdays",
    activities: ["calling", "canvasing", "picketing"],
    phoneNumber: "2105555555"
}

function addVolunteerInfo (object) {
    volunteerInfo.name = object.name;
    volunteerInfo.address += object.address;
    volunteerInfo.email += object.email;
    volunteerInfo.availability += object.availability;
    volunteerInfo.phoneNumber += object.phoneNumber;
    // volunteerInfo.activities.push(object.activities);
    for (let i = 0; i < object.activities.length; i++) {
    volunteerInfo.activities.push(object.activities[i]);
    }
    // console.log(object);
}

addVolunteerInfo(myVolunteerInfo);

console.log(volunteerInfo);


// Changing the calendar 

const newThirdSunday = "Spending time with Family"

function changingThirdSunday (string) {
    eventsCalendar.july.thirdSunday = string;
}

changingThirdSunday(newThirdSunday)

console.log(eventsCalendar.july.thirdSunday)


//// advanced Challenge 

const createArticle = document.createElement("article");
createArticle.id = elizabethSingler.district;

console.log(createArticle)

// const targetId = document.querySelector('article');

// console.log(targetId)

// function platformData () {
//     `<p>${elizabethSingler.platform.jobs}</p><p>$${elizabethSingler.platform.Crime}</p>`
// }

createArticle.innerHTML = `<p>${elizabethSingler.platform.Crime}</p><p>${elizabethSingler.platform.jobs}</p>`;

const bodyElement = document.querySelector(".add-content");

bodyElement.appendChild(createArticle);


