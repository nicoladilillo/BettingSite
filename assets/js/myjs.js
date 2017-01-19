(function() {
  'use strict';

  $(document).ready(function() {

    $("#NumeriForm").submit(function(e){
      var i = 0;
      var valori = [];
      $('#NumeriForm input[type=number]').each(function() {
        if ( !$(this).val() ) {
          window.alert("Riempi tutti i campi!");
          e.preventDefault(e);
          return false;
        }

        valori[i] = $(this).val();
        i++;
      });

      //console.log(valori);
      for (i = 0; i < valori.length; i++) {
        var confronta = valori[i];
        for (var j = i+1; j < valori.length; j++) {
          if ( confronta == valori[j] ) {
            window.alert("Inserire tutti numeri diversi!");
            e.preventDefault(e);
            return false;
          }
        }
      }
    });

  });
})();
