var Body = {
  setBackgroundColor: function(color) {
    $('body').css('backgroundColor', color);
    // document.querySelector('body').style.backgroundColor = color;
  },
  setColor: function(color) {
    $('body').css('color', color);
    // document.querySelector('body').style.color = color;
  }
}

var Link = {
  setColor: function(color) {
    $('a').css('color', color);
    // var aList = document.querySelectorAll('a');
    // for (var i = 0; i < aList.length; ++i) {
    //   aList[i].style.color = color;
    // }
  }
}

function nightDayHandler(self) {
if (self.value === 'night') {
  Body.setBackgroundColor('black');
  Body.setColor('white');
  Link.setColor('powderblue');
  self.value = 'day';
} else {
  Body.setBackgroundColor('white');
  Body.setColor('black');
  Link.setColor('black');
  self.value = 'night';
}
}