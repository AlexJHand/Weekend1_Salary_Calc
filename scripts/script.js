//console.log("js");
//$(document).ready(console.log('JQ'));

// Global variables
var employees = [];

$(document).ready(pageReady);

function pageReady() {
    $('#submitButton').on('click', addEmployee); // Need to add function
}

function addEmployee() { 
    // Retrieve employee info from form
    // Use info from form to create Employee object
    new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), $('#idIn').val(),$('#titleIn').val(),$('#salaryIn').val());
    // Reset form
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
 }

// Employee object constructor
function Employee(firstNameIn, lastNameIn, idIn, titleIn, salaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.id = idIn;
    this.title = titleIn;
    this.salary = salaryIn;

    // Once employee is created, add them to employees array
    employees.push(this);
    console.log(this);
}