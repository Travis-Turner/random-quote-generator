$(document).ready(function() {
  getQuote = function () {
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
    dataType: "jsonp"
  });
  };
  mycallback = function (json){

  }

  var quoteAuthor = $('#quote__author');
  var quoteText = $('#quote__text');
  var quoteButton = $('#quote__button');

  $(quoteButton).on('click', function(){
    getQuote();
  });
});
