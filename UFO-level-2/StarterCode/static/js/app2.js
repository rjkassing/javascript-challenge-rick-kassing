// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable
var sighting = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tbody.append("tr");

sighting.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.selectAll(".filter");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("change", runEnter);
form.on("submit", runEnter);
inputobject = {}
// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(this).select("input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputID = inputElement.attr("id")
    console.log(inputValue);
    inputobject[inputID] = inputValue
    console.log(inputobject);
    var filteredData = sighting

    Object.entries(inputobject).forEach(([key, value]) => {

    filteredData = filteredData.filter(ufo_x => ufo_x[key] === value);

    console.log(filteredData);
    })

    // remove any events from the tbody to
    tbody.html("");

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}