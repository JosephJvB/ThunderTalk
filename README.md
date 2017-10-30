# Web Scraping with NodeJS

### Why did I choose web scraping?
learning about api's i took on board the idea that the more data you have , the cooler things you can create. Also all though my experience with web dev the structure of our apps is always responding to user events so the idea of automation is wicked cool.
influence from Harrison, Im very impressionable. Harrison was having a total blast scraping Callans bus data

intro - write last, to introduce the stuff you come up with

### What is web scraping?
Scraping is all about reading the mark-up language (content-formatting) of a website and accessing specific pieces of data by referencing the css tags of elements that you are interested in.

format of scraping is sending request to a website, Im using superagent to do that. Use a second tool to access the elements of the webpage, this is where the data collection happens. 

The process of entering a website and extracting data in an automated fashion is also often called "crawling".

### Puppeteer

![puppeteer pic](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

developed by google, by the chromes dev-tools team. God bless their inspect and god bless puppeteer.

talk about my little play around with puppeteer. crashed a computer trying to save 151 screenshots. Would have been much more efficient saving 151 img sources to an array then rendering on a webpage.

Generate screenshots and PDFs of pages.
Crawl a Single Page Application and generate pre-rendered content (i.e. "SSR").
Scrape content from websites.
Automate form submission, UI testing, keyboard input, etc.
Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
Capture a timeline trace of your site to help diagnose performance issues.
https://github.com/GoogleChrome/puppeteer

Puppeteer comes with a bundled version of the chromium browser, which it launches on every run-instance. This makes for pretty hefty dependencies but allows for mad consistency.

Puppeteer also creates its own user profile on chromium which is reset on every instance.

Puppeteer is able to perform a similar task to the Jest's snapshot testing.


### Cheerio

![cheerio pic](https://pbs.twimg.com/media/ChHRi65WYAEmUuZ.jpg)

Server side html loader thing tool
few ways to access specific elements. 
* ```('.picture')``` will refer to elements with class of picture
* ```('#bananas')``` will refer to elements with id='bananas' 
* ```('input[type='text']')``` will refer to input elements with a type of text

Harrison has been using cheerio for his scraping projects. It doesnt have all the functionality of puppeteer's screenshots and pdf docs, but it is a fine choice for other stuff. And often times the data that exists in the html of a page is enough, rather than save screenshots, if you can scrape the source of an image


### Other Scrape Tools:

![scraperIRL](https://blog.hartleybrody.com/wp-content/uploads/2012/12/scraper-tool.jpg)

* phantomJS

* osmosis 
super nice tool wowee, no large dependencies which is a bonus over cheerio and puppeteer.

* scrapy python

automation - testing - information gathering idk :)

malicious scraping:

undercut prices and steal web content.
captchas
robots.txt

search engines like google gather and agregate data from websites to use. 

### Conclusion: 
scraping has a vigilante feel. Independent hackerman

I need to break this down into bulletpoints and fast

![hackerman picutre](http://i0.kym-cdn.com/entries/icons/original/000/021/807/4d7.png)
