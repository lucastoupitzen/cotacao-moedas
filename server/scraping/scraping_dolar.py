#!/usr/local/bin/python3

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def procura_dolar():

    url = "https://br.investing.com/currencies/usd-brl"

    option = Options()
    option.headless = True

    driver = webdriver.Chrome(
        '/Users/lucasferracin/chromedriver', options=option)

    driver.get(url)

    elemento = driver.find_element_by_xpath(
        "//*[@id='__next']/div[2]/div/div/div[2]/main/div/div[1]/div[2]/div[1]/span")
    html = elemento.get_attribute("outerHTML")

    soup = BeautifulSoup(html, "html.parser")

    driver.quit()

    print(f"dólar-{soup.get_text()}")


procura_dolar()
