
const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');

    const result = await page.evaluate(() => {
        let data = [];
        let elements = document.querySelectorAll('.product_pod');

        products.forEach(product => {
        const title = product.querySelector('h3').innerText;
        const price = product.querySelector('.price_color').innerText;


            data.push({title, price});
        }

        return data;
    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value);
});
