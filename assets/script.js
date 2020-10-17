//array of exercises
const exercises = [
    {
        name: "Bench Press",
        primary: "Chest",
        secondary: "Tricep",
        auxillary: "Front Delt",
        requires: "Barbell"
    },
    {
        name: "Squat",
        primary: "Quadricep",
        secondary: "Hamstring",
        auxillary: "Core",
        requires: "Barbell"
    },
    {
        name: "Deadlift",
        primary: "Hamstring",
        secondary: "Trap",
        auxillary: "Core",
        requires: "Barbell"
    },
    {
        name: "Lat Pulldown",
        primary: "Back",
        secondary: "Bicep",
        auxillary: "Rear Delt",
        requires: "Machine"
    },
    {
        name: "Arnold Press",
        primary: "Front Delt",
        secondary: "Tricep",
        auxillary: "Rear Delt",
        requires: "Dumbbells"
    },
    {
        name: "Hammer Curl",
        primary: "Bicep",
        secondary: "Tricep",
        auxillary: "Medialus",
        requires: "Dumbbells"
    },
]

// function to render the table on page load
const renderTable = (array) => {
    $("#results").empty();
    for (let i = 0; i < array.length; i++) {
        $("#results").append(
            `<tr>
            <td scope="col">${array[i].name}</td>
            <td scope="col">${array[i].primary}</td>
            <td scope="col">${array[i].secondary}</td>
            <td scope="col">${array[i].auxillary}</td>
            <td scope="col">${array[i].requires}</td>
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
renderTable(exercises);

var val = 0;
// sort table columns in ascending or descending order, like a "switch"
const sortBy = (type) => {
    if (val < 1) {
        val++;
        renderTable(exercises.sort(sortFunction(type, 'asc')));
    } else if (val = 1) {
        val = 0;
        renderTable(exercises.sort(sortFunction(type, 'desc')));
    }
}

// Sort table column by criteria
$("#exercise").on("click", () => {
   sortBy("name");
});

$("#primary").on("click", () => {
    sortBy("primary");
});

$("#secondary").on("click", () => {
    sortBy("secondary");
});

$("#auxillary").on("click", () => {
    sortBy("auxillary");
});

$("#requires").on("click", () => {
    sortBy("requires");
});

// Filter exercise data by criteria

let searchForm = $("form.search")
// Append Exercise Results
const appendResults = (exercise) => {
    $("#results").empty();
    for (let i = 0; i < exercise.length; i++) {
        $("#results").append(`<tr>
                    <td scope="col">${exercise[i].name}</td>
                    <td scope="col">${exercise[i].primary}</td>
                    <td scope="col">${exercise[i].secondary}</td>
                    <td scope="col">${exercise[i].auxillary}</td>
                    <td scope="col">${exercise[i].requires}</td>
                    </tr>`);
    }
}
searchForm.on("submit", function (event) {
    event.preventDefault();

    let muscle = $("#muscle").val();
    let secondaryMuscle = $("#secondaryMuscle").val();
    let equipReq = $("#equipReq").val();

    if (muscle === "Any" && secondaryMuscle === "Any" && equipReq === "Any") {
        location.reload();
    };
    if (secondaryMuscle === "Any" && equipReq === "Any") {
        const filterArr = exercises.filter(x => x.primary === muscle)
        appendResults(filterArr)
    };
    if (secondaryMuscle != "Any" && equipReq === "Any") {
        const filterArr = exercises.filter(x => x.primary === muscle && x.secondary === secondaryMuscle)
        appendResults(filterArr)
    }
    if (secondaryMuscle === "Any" && equipReq != "Any") {
        const filterArr = exercises.filter(x => x.primary === muscle && x.requires === equipReq)
        appendResults(filterArr)
    }
    if (secondaryMuscle != "Any" && equipReq != "Any") {
        const filterArr = exercises.filter(x => x.primary === muscle && x.secondary === secondaryMuscle && x.requires === equipReq)
        appendResults(filterArr)
    }
});
