# UFOs

## Background:


The website has been finished in module.For challenge, Instead of filtering by a single item,  provide filter by multiple factors. The ability to search a city or country or even combine a date with a location would make websites that much more robust.

## Challenge_Object:

####  The goals of this challenge :

*  Create, update, and deploy JavaScript functions to provide additional table filters.


*  Update and deploy forEach (for loop) to loop through the filters and update them with user input.


*  Update and populate the dynamic filters and table using JavaScript and HTML.


## Challenge_Resources:

*  data.js

* vs.code

*  D3

*  CSS

* HTML



## Challenge_summary:



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
