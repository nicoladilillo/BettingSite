(function() {
  'use strict';

  $(document).ready(function() {

    //Controllo numeri inseriti
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

    //Inserimento valori nei campi da scegliere
    //per l'inserimento dello data di nascita
    function popola(selector, i) {
      $(selector).append('<option value=' + i + '>' + i + '</option>');
    }

    for (var i = 1; i <= 31; i++)
      popola('#RegistrazioneForm #giorno', i);

    for (var i = 1; i <= 12; i++)
      popola('#RegistrazioneForm #mese', i);

    var d = new Date();
    var n = d.getFullYear();
    for (var i = n; i >= 1950; i--)
      popola('#RegistrazioneForm #anno', i);

  });
})();
