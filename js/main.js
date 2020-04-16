$(document).ready(function () {
   var coseDaFare = [
       'Completare esercizio',
       'Pushare su GitHub',
       'Rivedere Slide e video lezione'
   ];
   var list = $('ul');
   var newInput = $('input');

   for (var i = 0; i < coseDaFare.length; i++) {
       //clono il template
       var elemLists = $('.template li').clone();
        //aggiungo trsto dinamaico al template
        elemLists.prepend(coseDaFare[i]);
        //aggiungo cllone alla lista in APP
        list.append(elemLists);
   }
   //Rimuovo un todo dalla lista
   $('body').on('click' , 'li i' ,function () { 
       $(this).parent().remove();
       
       
   });
   //Aggiungo attività attraverso INPUT
   newInput.keyup(function(event){
    //    console.log(event.keyCode);
       
    if (event.keyCode == 13) {
        var textInput = newInput.val().trim();
       
        if (textInput !== '') {
            var newElem = $('.template li').clone();
            newElem.prepend(textInput);
            list.append(newElem);
             //pulisco input
            newInput.val('');
        }

        
      


    }
   });
   //Line through su list item
   $('body').on('click', 'li', function () {
       $(this).toggleClass('completed')
   })

}); //<----End Ready