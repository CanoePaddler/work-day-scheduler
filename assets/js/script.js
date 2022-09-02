// today's date and time
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(currentDate);

$(document).ready(function () {
  // save button on click
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // local storage save
    localStorage.setItem(time, text);
  })

  function time() {
    var currentTime = moment().hour();

    $('.time-block').each(function () {
      var blockTime = parseInt($(this).attr('id').split('hour')[1]);

      if (blockTime < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      }
      else if (blockTime === currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
      else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');

      }
    })
  }

  time();
})