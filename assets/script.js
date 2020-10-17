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
        last: "Zenith",
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

// Sort through the array based on dynamic criteria
const sortFunction = (criteria, type = 'asc') => {
    return function innerSort(a, b) {
      const varA = a[criteria];
      const varB = b[criteria];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (type === 'desc') ? (comparison * -1) : comparison 
    )};
  }

//populate the table on page load
renderTable(employees);

// Sort table by criteria
$("#firstname").on("click", () => {
    renderTable(employees.sort(sortFunction('first', 'asc')));
});

$("#lastname").on("click", () => {
    renderTable(employees.sort(sortFunction('last', 'asc')));
});

$("#id").on("click", () => {
    renderTable(employees.sort(sortFunction('id', 'asc')));
});

$("#position").on("click", () => {
    renderTable(employees.sort(sortFunction('position', 'asc')));
});