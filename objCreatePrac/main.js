const ChickFilA = Object.create({}, {
    business: {
        value: "Chick-Fil-A",
        writable: true
    },
    employmentStart: {
        value: "01-01-2009",
        writable: true
    },
    employmentEnd: {
        value: "01-01-2010"
    }
})



const burgerKing = Object.create(ChickFilA);
burgerKing.business = "Burger King";
burgerKing.employmentStart = "03-03-2011";
burgerKing.notes = "It was very busy";

console.log(burgerKing);


/////Part 2 


function createJobObject (business, start, end) {
    const newObject = {};
    newObject.business = business;
    newObject.start = start;
    newObject.end = end;
    return newObject

}

const mcDonalds = createJobObject("McDonalds", "Jan 22, 2014", "March 10, 2015");

console.log(mcDonalds);

const starbucks = createJobObject("Starbucks", "June 2016", "December 2016");

console.log(starbucks);

////Part 3 


