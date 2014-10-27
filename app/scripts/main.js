var emory = {};
var sampleArray = [1,2,3,4,5,6,7];
var emptyArray = [];

//Size

emory.size = function() {

  $('.answer')

  $('.container').click(function(x){

    $('.answer').append("<span>" + emptyArray + "</span>");

  });

};

// console.log(x.length);


emory.size(sampleArray);

//isNull

emory.isEmpty = function(x) {

  if (x == null) return true;
  else {return false;}

};


//isEqual

emory.isEqual = function(a,b) {

  if (a===b) return true;
  else {return false;}

};


//contains
emory.contains = function(x, y) {
  x.forEach(function(z){
    if (y==z) console.log(y);
  });
};

var hey = {"hey hey hey hey"};

emory.greeting = function() {

  $('.container').html(hey);

};
