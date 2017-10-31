# Web Scraping with NodeJS

### Why did I choose web scraping?
* Data is cool.
* Automation.
* Harrison.

### What is web scraping?
* Writing code to retrieve information from websites.
* Two main parts:
  * GET request to a website to retrieve the HTML
  * Parse the mark-up language and retrieve specific data.
* The process of entering a website and extracting data in an automated fashion is often called "crawling".


### Puppeteer

![puppeteer pic](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

* My first scraping experience.
 > show pokedex.js

* Puppeteer's toolkit:
    * Generate screenshots and PDFs of pages.
    * Crawl a Single Page Application and generate pre-rendered content (i.e. "SSR").
    * Scrape content from websites.
    * Automate form submission, UI testing, keyboard input, etc.
    * Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
    * Capture a timeline trace of your site to help diagnose performance issues.


### Cheerio

![cheerio pic](https://pbs.twimg.com/media/ChHRi65WYAEmUuZ.jpg)

* Server side tool
* Specifically for parsing, manipulating and rendering the DOM.

* CSS Hooks: 
  * ```('.picture')``` will refer to elements with class of picture
  * ```('#bananas')``` will refer to elements with id='bananas' 
  * ```('input[type='text']')``` will refer to input elements with a type of text

> Show cheerio.js


### Other Scrape Tools:

![scraperIRL](https://blog.hartleybrody.com/wp-content/uploads/2012/12/scraper-tool.jpg)

* phantomJS

* osmosis

* scrapy -> python

* ZombieJS

automation - testing - information

* malicious scraping:

undercut prices and steal web content.
captchas
robots.txt

Search engines like google gather and agregate data from websites to use. 

### Conclusion: 
scraping has a vigilante feel. Independent hackerman

![hackerman picutre](http://i0.kym-cdn.com/entries/icons/original/000/021/807/4d7.png)
