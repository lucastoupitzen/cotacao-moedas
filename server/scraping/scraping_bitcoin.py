#!/usr/local/bin/python3

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def procura_bitcoin():

    url = "https://br.investing.com/crypto/bitcoin"

    option = Options()
    option.headless = True

    driver = webdriver.Chrome(
        '/Users/lucasferracin/chromedriver', options=option)

    driver.get(url)

    elemento = driver.find_element_by_xpath(
        "//*[@id='last_last']")
    html = elemento.get_attribute("outerHTML")

    soup = BeautifulSoup(html, "html.parser")

    driver.quit()

    print(f"bitcoin-{soup.get_text()}")


procura_bitcoin()
