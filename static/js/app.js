// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

 //Challenge
 // This function for updatefunction 
 //Save the element, value, and id:
  function updateFilters(){
    const filters = {
        datetime:d3.select("#datetime").property("value"),
        city:d3.select("#city").property("value"),
        state:d3.select("#state").property("value"),
        country:d3.select("#country").property("value"),
        shape:d3.select("#shape").property("value")
    };
    
    // Call function to apply all filters and rebuild the table:
    filterTable(filters)
}
 
// Set the filteredData to the tableData:

function filterTable(filters) {
  let filterData = tableData;
  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries (filters).forEach(([key,val])=> {
      if (val) {
          filterData = filterData.filter(row => row[key] === val);
      } 
  })
  //  Finally, rebuild the table using the filtered Data:
  buildTable(filterData); 
}
// Attach an event to listen for changes to each filter
// need to select the event and what it is listening for within each set of parenthesis
  d3.selectAll("#filter-btn").on("click", updateFilters);
  // Build the table when the page loads
  buildTable(tableData);