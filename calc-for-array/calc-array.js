
console.log(" Welcome to Smart Travel Planner!");

const destinations = [];
let totalDestinations = Number(prompt("How many destinations do you want to plan for? (3 to 5 recommended)"));

for (let i = 0; i < totalDestinations; i++) {
  let place = prompt(`Enter destination ${i + 1}:`);
  destinations.push(place);
}
console.log("Destinations Entered:", destinations);

const budget = Number(prompt(" Enter your total travel budget (₹):"));
let tripType = "";

if (budget < 10000) {
  tripType = "Plan a short domestic trip.";
} else if (budget >= 10000 && budget <= 50000) {
  tripType = "You can plan a long domestic trip.";
} else {
  tripType = "International trip possible!";
}
console.log("Budget Suggestion:", tripType);

const days = Number(prompt(" Enter number of travel days:"));
let dayType = "";

if (days < 3) {
  dayType = "Weekend Getaway";
} else if (days >= 3 && days <= 7) {
  dayType = "Perfect Holiday Trip";
} else {
  dayType = "Extended Vacation";
}
console.log("Trip Duration Type:", dayType);

const hotelSuggestion = (budgetPerDay) => {
  if (budgetPerDay < 2000) {
    return "Budget Hotels";
  } else if (budgetPerDay >= 2000 && budgetPerDay <= 5000) {
    return "Mid-range Hotels";
  } else {
    return "Luxury Hotels";
  }
};

const budgetPerDay = budget / days;
const hotelType = hotelSuggestion(budgetPerDay);

console.log("-------------------------------------------------");
console.log(` Destinations Entered: ${destinations.join(", ")}`);
console.log(` Total Budget: ₹${budget}`);
console.log(` Days Planned: ${days}`);
console.log(` Trip Type: ${dayType}`);
console.log(` Hotel Suggestion: ${hotelType}`);

let travelSummary = "";

if (budget < 10000) {
  travelSummary = "You can enjoy a short local weekend getaway.";
} else if (budget <= 50000) {
  travelSummary = "You can enjoy a comfortable domestic holiday.";
} else {
  travelSummary = "You can explore international destinations with luxury!";
}

console.log(` Travel Summary: ${travelSummary}`);
console.log("-------------------------------------------------");

alert(` Travel Plan Created!

Destinations: ${destinations.join(", ")}
Total Budget: ₹${budget}
Days: ${days}
Trip Type: ${dayType}
Hotel Type: ${hotelType}
Summary: ${travelSummary}
`);

console.log(" Thank you for using Smart Travel Planner!");