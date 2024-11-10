from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import sys
import os

def scrape_itchio_jam(url):
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')

    chromedriver_path = os.path.join(os.getcwd(), 'chromedriver.exe')
    service = Service(chromedriver_path)
    driver = webdriver.Chrome(service=service, options=options)

    try:
        driver.get(url)
        time.sleep(1)

        jam_title_elem = driver.find_element(By.CSS_SELECTOR, '.jam_title_header a')
        jam_title = jam_title_elem.text.strip() if jam_title_elem else 'Untitled Game Jam'

        games = []

        entries = driver.find_elements(By.CSS_SELECTOR, '.game_cell')

        for entry in entries:
            try:
                thumbnail_elem = entry.find_element(By.CSS_SELECTOR, '.lazy_loaded')
                thumbnail_url = thumbnail_elem.get_attribute('src') if thumbnail_elem else 'N/A'
            except:
                thumbnail_url = 'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg'

            title_elem = entry.find_element(By.CSS_SELECTOR, '.title')
            title = title_elem.text.strip() if title_elem else 'Untitled'

            creators_elems = entry.find_elements(By.CSS_SELECTOR, '.user_link')
            creators = ', '.join([author.text.strip() for author in creators_elems])

            game_link = entry.find_element(By.TAG_NAME, 'a')
            game_url = game_link.get_attribute('href') if game_link else 'N/A'

            games.append([thumbnail_url, title, creators, game_url])

        # Get the correct links
        for i, game in enumerate(games):
            driver.get(game[3])
            time.sleep(1)
            
            game_url_elem = driver.find_element(By.CSS_SELECTOR, 'a.forward_link')
            new_game_url = game_url_elem.get_attribute('href') if game_url_elem else game[3]
            
            games[i][3] = new_game_url
        
        output_file = 'scraper_output.txt'
        with open(output_file, 'w') as file:
            file.write("<Category\n")
            file.write(f"            title='{jam_title}'\n")
            file.write("            content=\n")
            file.write("            {[\n")

            for game in games:
                file.write(f"              [\n")
                file.write(f"                '{game[0]}',\n")
                file.write(f"                '{game[1]}',\n")
                file.write(f"                '{game[2]}',\n")
                file.write(f"                '{game[3]}'\n")
                file.write(f"              ],\n")

            file.write("            ]}\n")
            file.write("          />\n")

        print(f"Data successfully saved to {output_file}")

    except Exception as e:
        print(f"An error occurred: {e}")

    finally:
        driver.quit()


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python scrape_itchio_jam.py <url>")
    else:
        jam_url = sys.argv[1]
        scrape_itchio_jam(jam_url)
