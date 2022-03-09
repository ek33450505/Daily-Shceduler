$(document).ready(function() {

    var currentDate = $("#currentDay")

    currentDate.text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().format('HH');



});