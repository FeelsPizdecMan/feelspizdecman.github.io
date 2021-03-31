document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
    perPage: 2,
    rewind : true,
    loop: true,
    pagination: false,

    classes: {
      arrows: 'splide__arrows your-class-arrows',
    },
  } ).mount();
} );


document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-gal', {
    perPage: 1,
    perMove: 1,
    gap: 0,
    rewind : true,
    loop: true,
    pagination: true,


    classes: {
      arrows: 'splide__arrows my-class',
    },


  } ).mount();
} );



document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = '+7' + ( x[2] ? '(' + x[2]: '') + (x[3] ? ')' + x[3]: '') + (x[4] ? '-' + x[4] : '');
});

document.getElementById('phone1').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = '+7' + ( x[2] ? '(' + x[2]: '') + (x[3] ? ')' + x[3]: '') + (x[4] ? '-' + x[4] : '');
});