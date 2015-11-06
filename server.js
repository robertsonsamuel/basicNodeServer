var http = require('http');
var port = 8000;
var md5 = require('md5');

var server = http.createServer(function(request, response) {

  var endOfurl = request.url.split('/')

  var router = endOfurl[1];
  var mathRouter = endOfurl[2];

  switch (router) {
    case 'math':

      switch (mathRouter) {
        case 'sum':
        var numbers = endOfurl.slice(3);
        var ans = numbers.reduce(function(sum, number){
          return parseInt(sum) + parseInt(number);
        });
        response.write(ans.toString()+ '\n');
        console.log(ans);
        response.end();
        break;

        case 'cube':

          var num = endOfurl[3];
          var ans = Math.pow(num,3).toString();
          response.write(ans + '\n');
          response.end();

        break;

        default:
          response.write("Unknown Math Try again");
          res.end();
      }


      break;


    case 'gravatar':
    var inputEmail = endOfurl[2];
    var hash = md5(inputEmail);
    var gravurl = 'https://s.gravatar.com/avatar/' + hash
    response.write(gravurl + '\n');
    response.end();

    break;

    case 'sentance':
    //{"letters":13,"spaces":2,"words":3}'
    var sentenceInfo = {letters:0, spaces:0,words:0};

    inputSentence = endOfurl[2];
  //console.log(inputSentence);
    convertedSentence = decodeURI(inputSentence).split(' ');
    sentenceInfo.words = convertedSentence.length;
    sentenceInfo.spaces = convertedSentence.length - 1;
    sentenceInfo.letters = convertedSentence.join('').length;
    outputString = JSON.stringify(sentenceInfo);
    console.log(outputString);
    response.write(outputString + '\n');
    response.end();
    //sentenceInfo.letters = inputSentence


    break;



    default:

      response.write("Unknown Try again");
      response.end();

  }



});


server.listen(port);
