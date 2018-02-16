function encodeURL (link, from) {
    var linkText = 'https://twitter.com/intent/tweet';
    return linkText + "/?text=" + encodeURIComponent('Hey, check out this quote by ' + from + '! ' + link);
}

function changeColors (){
  var backgroundColors = ['#564D80', '#083D77', '#21897E', '#470FF4', '#E4572E', '#49393B'];
  var quoteBoxColors = ['#98A6D4', '#DA4167', '#3BA99C', '#4056F4', '#29335C', '#341C1C'];
  var randomnumber = Math.floor(Math.random() * (backgroundColors.length));
  console.log(randomnumber);

  return {
    background: backgroundColors[randomnumber],
    container: quoteBoxColors[randomnumber]
  };
}
