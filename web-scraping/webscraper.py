from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


options = Options()
options.headless = True
options.add_argument("--window-size=1920,1200")
text = []

DRIVER_PATH = '~/Downloads'
driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
driver.get('https://apps.ualberta.ca/catalogue/course/ece')
allCourses = driver.find_elements(By.TAG_NAME, 'h2')
for i in range(len(allCourses)):
    text.append(allCourses[i].text)
    print(text)
driver.quit()