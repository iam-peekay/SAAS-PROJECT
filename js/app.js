// Problem: User when click on derived metric does nothing
// Solution: When user clicks on derived metric, it should highlight the appropriate boxes that are related to the metric

var $showARR = $('#ARR').click( function() {
  $('#j_1').attr({ 'rect': { 'fill': '#00B88A'}})

});
