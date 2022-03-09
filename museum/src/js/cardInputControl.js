const priceCvv = document.querySelector('.price__cvv');
const priceInputText = document.querySelector('.price-input__text');
const priceCardHolder = document.querySelector('.price__card-holder');
const inputСardHolder = document.getElementById('input-card-holder');
 

priceCvv.addEventListener('keydown', function(event) {  //CVV
    if  ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        (event.keyCode == 65 && event.ctrlKey === true) ||
        (event.keyCode >= 35 && event.keyCode <= 39)) {
        return;
    } else {
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault();
      }
    }
  });

  
priceInputText.addEventListener('keydown', function (event) { // CARD output
    let value = this.value.replace(/\s+/g, '');
    let isBackspace = event.key === 'Backspace'; 

    if ((event.key.length === 1 && /^[^\d\s]+$/.test(event.key)) || (!isBackspace && value.length === 16)) {
        event.preventDefault();
        return false;
    }
    this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
});


inputСardHolder.onkeypress = (event) => !/[a-z\d]/i.test(event.key) ? false : true; // CARD is not number and not CYRILLIC
priceCardHolder.addEventListener('keydown', function(e){
    if( e.key.match(/[0-9]/) ) return e.preventDefault();
}); 

priceCardHolder.addEventListener('input', function(e){
    priceCardHolder.value = priceCardHolder.value.replace(/[0-9]/g, "");
});

      
