#Node scrape html elements and save to server

- This code fetches the gitHub activity at github.com/stahlmanDesign and saves the markup in `output.json`
- Using this tutorial: https://scotch.io/tutorials/scraping-the-web-with-node-js

## Quick start
- `npm install`
- `node server.js`
- `open http://localhost:8081/scrape`

## Scrapes SVG file by class name and saves as string

- parses it into html string and saves into a JSON file
- this allows it to be loaded and parsed into an SVG
	- parsing and adding to DOM this way allow elements to be styled
	- if just scrape and save the SVG as an .svg file (`<img src="scrapedSVG.svg"/>`), you can't style the elements
	
## Note: currently installed on justinstahlman.com/cv/svg/node-scrape-webpage
- tried forever server.js but not staying
- must `node server.js` for now and go to `justinstahlman.com:8081/scrape`
- then reload justinstahlman.com/cv to see updated svg

- update Jan 5 2017: installed nodemon globally on server
- now type `nodemon server.js` in `justinstahlman.com/cv/svg/node-scrape-webpage`

<img src="scrapedSVG.png"/>