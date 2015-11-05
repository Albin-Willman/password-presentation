$(document).ready(function() {
  $('.password').keyup(function(e) {
    var result = zxcvbn($(this).val());
    console.log(result);
    var $display = $('<div></div>');
    $display.addClass('result');
    if(result.score <= 1){
      $display.addClass('weak');
      $display.append('<h2>Weak</h2>');
    } else if(result.score <= 2) {
      $display.addClass('medium');
      $display.append('<h2>Medium</h2>');
    } else if(result.score <= 3){
      $display.addClass('strong');
      $display.append('<h2>Strong</h2>');
    } else {
      $display.addClass('strong');
      $display.append('<h2>Really strong</h2>');
    }
    $display.append('<h3>It would be cracked in:</h3><h2>' + result.crack_times_display.online_no_throttling_10_per_second + '</h2>');
    var target_id = $(this).attr('target');
    $('#' + target_id).html($display);
  });
});