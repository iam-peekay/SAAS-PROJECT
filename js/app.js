var metricsDefinitions = {j_14: 'test 1', j_15: 'test 2', j_16: 'test3'};

function hoverBox(arg1){

  for (var i = 0; i < metricsDefinitions.length; i += 1) {
      $(document).ready(function() {
          $('#' + arg1[i]).tooltipster({
          content: $('<span>' + arg1[i][0] + '</span>'),
          maxWidth: 300,
          interactive: true,
          position: 'top',
          theme: 'tooltipster-default',
          animation: 'grow'
        }) });

}}

hoverBox(metricsDefinitions);
