#!/usr/local/bin/python3

from concurrent.futures import process
from datetime import date
from bs4 import BeautifulSoup
from selenium import webdriver
from datetime import datetime
from selenium.webdriver.chrome.options import Options


def procura_dolar():

    url = "https://www.bcb.gov.br/?bc="

    option = Options()
    option.headless = True

    driver = webdriver.Chrome(
        '/Users/lucasferracin/chromedriver', options=option)

    driver.get(url)

    elemento = driver.find_element_by_xpath(
        "//*[@id='home']/div/div[1]/div[1]/div/cotacao/table[1]/tbody/tr[2]/td[3]/span")
    html = elemento.get_attribute("outerHTML")

    soup = BeautifulSoup(html, "html.parser")

    driver.quit()

    print(f"dólar-{soup.get_text()}")


procura_dolar()
