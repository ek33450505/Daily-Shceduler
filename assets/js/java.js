$(document).ready(function() {

    /* Set current time and date to display in the jumbotron */
    var currentDate = $("#currentDay")

    currentDate.text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().format('HH');

    // set Local Storage
    //Create the content layout for the page
});