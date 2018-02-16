$(document).ready(function() {
  /* Variable and function declarations */
  var quoteAuthor = $('#quote__author');
  var quoteText = $('#quote__text');
  var quoteButton = $('#quote__button');
  var quote = $('#main-container');
  var tweetLink = $('#tweetbutton');

  getQuote = function () {
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
    dataType: "jsonp"
  });
  };
  mycallback = function (json){
    $(quote).fadeTo(600, 0, function(){
      var from = json[0].title;
      var quoteLink = json[0].link;
      var shareableURL = encodeURL(quoteLink, from);
      var colors = changeColors();

      quoteAuthor.text(from);
      quoteText.html(json[0].content);

      $(tweetLink).attr('href', shareableURL);
      $(quote).fadeTo(400, 1);
      $("body").animate({backgroundColor: colors.background});
      $('#main-container').animate({backgroundColor: colors.container});
    });
  }
  /*Code to execute when document is ready */
  $(quote).css('display', 'none');
  getQuote();
  /* Event listeners */
  $(quoteButton).on("click", function (){
    getQuote();
  });
});
