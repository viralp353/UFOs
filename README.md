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
          
          
          
 ## Challenge_website_scrrenshot:
 
 
 
![Screenshot (82)](https://user-images.githubusercontent.com/65969608/90325433-37304500-df41-11ea-98b4-1b30d5526024.png)






![Screenshot (83)](https://user-images.githubusercontent.com/65969608/90325384-9e99c500-df40-11ea-82aa-af3ee2ee93a3.png)






![Screenshot (84)](https://user-images.githubusercontent.com/65969608/90325392-aa858700-df40-11ea-9178-5f0e26bc0226.png)







![Screenshot (85)](https://user-images.githubusercontent.com/65969608/90325417-fb957b00-df40-11ea-87fe-f97bfa1fa5e6.png)


