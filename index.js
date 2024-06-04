
var range = $('.input-range'),
  value = $('.range-value');
  var cont=$(".rangecounter")
value.html(range.attr('value'));
range.on('input', function() {
  value.html(this.value);
  cont.html(this.value*3739)
});

let count = document.querySelectorAll(".rangecounter")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 26165

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},30)

})


$(document).scroll(function () {
  var x = $(this).scrollTop();
  var y = $(".banner-content-home").position();
  if (x > y.top) {
      $(".navigation-airhome").addClass("navigation-home");
  } else {
      $(".navigation-airhome").removeClass("navigation-home");
  }
});