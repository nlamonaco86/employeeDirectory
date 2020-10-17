//array of employees
const employees = [
    {
        id: 1,
        first: "Mark",
        last: "Otto",
        position: "@mdo"
    },
    {
        id: 2,
        first: "Jacob",
        last: "Thornton",
        position: "@fat"
    },
    {
        id: 3,
        first: "Larry",
        last: "the Bird",
        position: "@twitter"
    }]

// function to render the table on page load
const renderTable = (array) => {
    $("#employees").empty();
    for (let i = 0; i < array.length; i++) {
        $("#employees").append(
            `<tr>
            <td scope="col">${array[i].id}</td>
            <td scope="col">${array[i].first}</td>
            <td scope="col">${array[i].last}</td>
            <td scope="col">${array[i].position}</td>
            </tr>`)
    }
}

// Sort table by first name 
$("#firstname").on("click", () => {
    sortFunction(employees);
});

const sortFunction = (input) => {

let result = input.sort(function(a, b) {
  let itemA = a.first.toUpperCase(); 
  let itemB = b.first.toUpperCase();
  if (itemA < itemB) {
    return -1;
  }
  if (itemA > itemB) {
    return 1;
  }
  return 0;
});

renderTable(result);

};

//populate the table on page load
renderTable(employees);