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

const renderTable = () => {
    for (let i = 0; i < employees.length; i++) {
        document.getElementById("employees").insertAdjacentHTML('beforebegin',
            `<tr>
            <td scope="col">${employees[i].id}</td>
            <td scope="col">${employees[i].first}</td>
            <td scope="col">${employees[i].last}</td>
            <td scope="col">${employees[i].position}</td>
            </tr>`)
    }
}

document.getElementById("firstname").addEventListener("click", () => {
    console.log("click");
});

renderTable();