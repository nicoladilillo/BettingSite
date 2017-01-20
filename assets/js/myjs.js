(function() {
  'use strict';

  $(document).ready(function() {


    function Errore(string, e) {
      window.alert(string);
      e.preventDefault(e);
    }

    //Controllo numeri inseriti
    $("#NumeriForm").submit(function(e){
      var i = 0;
      var valori = [];
      $('#NumeriForm input[type=number]').each(function() {
        if ( !$(this).val() ) {
          Errore("Riempi tutti i campi!", e);
          return false;
        }

        if ( $(this).val()>90 || $(this).val()<1 ) {
          Errore("Inserire numeri compresi tra 1 e 90", e);
          return false;
        }

        valori[i] = $(this).val();
        i++;
      });

      for (i = 0; i < valori.length; i++) {
        var confronta = valori[i];
        for (var j = i+1; j < valori.length; j++) {
          if ( confronta == valori[j] ) {
            Errore("Inserire tutti numeri diversi!", e);
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
