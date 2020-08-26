// Sample URL: https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo

const apiURL = "https://www.alphavantage.co/query";
const apiFunction = "TIME_SERIES_DAILY";
const apiKey = "J7DFKK7POQR15XV8";

$(function(){
    axios.get(apiURL, {
        params: {
            function: apiFunction,
            symbol: 'IBM',
            apikey: apiKey
        }
    }).then(function (response) {
      console.log(response.data);
    });

})
