var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {

    //All the web scraping magic will happen here

    url = 'http://github.com/stahlmanDesign/';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html) {

        // First we'll check to make sure no errors occurred when making the request

        if (!error) {
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var title, release, rating;
            var json = {
                title: "",
                release: "",
                rating: ""
            };

            // We'll use the unique header class as a starting point.

            $('.js-calendar-graph').filter(function() {

                // Let's store the data we filter into a variable so we can easily see what's going on.

                var data = $(this);

                // In examining the DOM we notice that the title rests within the first child element of the header tag. 
                // Utilizing jQuery we can easily navigate and get the text by writing the following code:
                json = data.children().first().html();
                //title = data.children().first().text();

                // Once we have our title, we'll store it to the our json object.
                //json.title = title;

                // Once again, once we have the data extract it we'll save it to our json object
                //json.release = release;
            })
        }

        // To write to the system we will use the built in 'fs' library.
        // In this example we will pass 3 parameters to the writeFile function
        // Parameter 1 :  output.json - this is what the created filename will be called
        // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
        // Parameter 3 :  callback function - a callback function to let us know the status of our function
        var prettyJSON = JSON.stringify(json, null, 4);
        fs.writeFile('output.json', prettyJSON, function(err) {

            console.log('File successfully written! - Check your project directory for the output.json file');

        })

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        //res.send('Check your console!')
        res.send('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 720 120"> ' + json + ' </svg>')


    })

    //

})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;