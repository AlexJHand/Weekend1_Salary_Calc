//console.log("js");
//$(document).ready(console.log('JQ'));

// Global variables
var employees = [];

$(document).ready(pageReady);

function pageReady() {
    $('#submitButton').on('click', addEmployee);
    $('#showEmployeeSection').on('click', '.removeButton', removeEmployee);
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
    // Post employee info to DOM
    postEmployee(this);
    monthlyCost();
}

// Post Employee Info to DOM
function postEmployee(thisEmployee) {
    // Create div to hold employee info
    var $employeeDiv = $('<div>', { class: 'employeeDiv' });
    // Append employee info to div
    $employeeDiv.append($('<p>', {text: thisEmployee.firstName 
        + " " + thisEmployee.lastName 
        + " " + thisEmployee.id 
        + " " + thisEmployee.title 
        + " " + thisEmployee.salary}));
    $employeeDiv.append($('<button>', {class:'removeButton', text:'Remove Employee'}));

    $('#showEmployeeSection').append($employeeDiv);
}

// Update and display monthly costs
function monthlyCost() {
    var totalEmployeeCost = 0;
    // Loop through employees array to calculate total annual employee cost
    for (var i = 0; i < employees.length; i++) {
        // Update total cost
        totalEmployeeCost += Number(employees[i].salary);
    }
    console.log("Total Employee Cost --> ", totalEmployeeCost);    
    // Calculate monthly cost
    var monthlyCost = totalEmployeeCost / 12;
    console.log("Montly Cost --> ", monthlyCost);
    // Post monthly cost to DOM
    postMonthlyCost(monthlyCost);
}

// Post monthly cost to DOM
function postMonthlyCost(monthlyCost) {
    // Remove current div
    $('#showMonthlyCost').empty();
    // Create a div to hold info
    var $monthlyCostDiv = $('<div>');
    // Append info to div
    $monthlyCostDiv.append($('<p>', {text: "Monthly Costs:" + monthlyCost}));
    // Append div to DOM
    $('#showMonthlyCost').append($monthlyCostDiv);
    
    /*
    $('#showMonthlyCost').text("Monthly costs: " + monthlyCost);
    */
}

// Remove employee from DOM
function removeEmployee() {
    $(this).parent().remove();
}