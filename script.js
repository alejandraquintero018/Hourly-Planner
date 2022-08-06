
var saveBtn = $('#saveBtn');
var descriptionEL = $('#description'); 

$(document).ready(function () {

    //This gives me the day at the top of my Calendar 
    var day = function () {
        $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    };
    //calling my function 
    day();

    //where I have my save button save things into local storage
    $('.saveBtn').on('click', function (event) {
        //console.log($(this).parent());
        let plan = ($(this).siblings('textarea').val());
        let toString = JSON.stringify(plan);
        localStorage.setItem('Planned', toString); 
        //let getPlan = localStorage.getItem('Planned'); 
        //$(this).siblings('textarea').append

    });

    //function to compare value of the time and the value of the current hour 

    var timecheck = function () {
        $('.time-block').each(function () {
            var blockHour = $(this).children('.hour').text();
            var converted = JSON.stringify(blockHour);
            let currentHour = dayjs().format('ha').toString();
            if (converted === '3pm') {   //this comparison is where the bug is
                $(this).children('description').addClass('present');
            } if (currentHour != '2pm') {
                $(this).children('.description').addClass('future');
            }
            else {

            }
            console.log(currentHour);
            console.log(blockHour);
        });
    }
    //calling my function
    timecheck();
});


//setInterval()

//local storage of the text area 


