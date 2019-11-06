# Chrome Snippets Lightning Talk
#### A few simple snippets for Chrome devtools

I first taught a lesson on Chrome Snippets as an instructor at [a popular dev bootcamp](http://ga.edu). My goal there was to teach aspiring developers to stop thinking of their web browser as a place to consume content, and begin to think of it instead as a live [Javascript runtime](https://stackoverflow.com/questions/51624548/is-web-browser-javascript-runtime/51624636#answer-54120872). _ <--Features a nice linked video._

## Who Cares?
This is pretty simple stuff. The challenge is not so much in writing the code, as it is in thinking about the possibilities.

## Random Value Generators
I first started using snippets to solve practical problems. I was managing a large serverless project in AWS using DynamoDB. AWS generates unique ids like this: "db7004b8-1bad-e185-ff32-0359043bdd2a". Sometimes if I chose to duplicate a record, I would need a new Id. Rather than simply incrementing one of the digits, I needed a function to generate the whole string.

Meanwhile my nephew had grown interested in Dungeons and Dragons and coding with JavaScript. So I started off with some random value generators to simulate rolling dice and grew them up to generate random HEX color and AWS Id values.

## Time Utilities
Another practical problem I wanted to solve involved converting Javasript time values to calculate durations. My app allowed users to reserve conference rooms in various locations, but there was no simple way to audit a user's monthly reservations without some tedious spreadsheet work. I wrote the time utilities snippets for use in Google Sheets, but use them in the browser all the time.

## RevUnit and Beyond!
If you track your time in Harvest, as we do at [RevUnit](http://revunit.com), you'll realize that Harvest tracks time in hundredths of an hour, rather than in minutes. It's easy to type in a minute value to extract the decimal value, but what if you accidentally leave your timer running and need to go the other way? If you've done this more than once, you'll see why it's useful just to slap a utility function in Chrome Snippets.

It's also fun just to mess with stuff.

### Bonus
[Here is a cool resource with many thoughtful snippets](https://github.com/bgrins/devtools-snippets)
