from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# https://www.scrapingbee.com/blog/selenium-python/
options = Options()
options.headless = True
options.add_argument("--window-size=1920,1200")

#driver needed in Downloads (https://chromedriver.chromium.org/downloads)
DRIVER_PATH = '~/Downloads'
driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
driver.get('https://apps.ualberta.ca/catalogue/course/ece')
allCourses = driver.find_elements(By.XPATH, "//div[@class='card']//h2")  # course title
allCoursesDetails = driver.find_elements(By.XPATH,"//div[@class='card']//p")  # course details

courses = {}  # saves all course info

for i in range(len(allCoursesDetails)):
    addPre = False
    addCor = False
    prereq = ""
    coreq = ""
    courseDetails = allCoursesDetails[i].text.split()

    # find prereq and coreqs
    for j in courseDetails:
        # for prereqs
        if j.lower() == "prerequisites:" or j.lower()=="prerequisite:":
            addPre = True
            continue
        elif addPre and j[(len(j))-1] == ".":
            prereq += j.strip(".")
            addPre = False
        
        # for coreqs
        if j.lower() == "corequisites:" or j.lower() == "corequisite:":
            addCor = True
            continue
        elif addCor and j[(len(j))-1] == ".":
            coreq += j.strip(".")
            addCor = False
        
        #add prereqs/coreqs present
        if addPre:
            prereq += j + " "
        if addCor:
            coreq += j + " "

    if prereq == "": prereq = None
    if coreq == "": coreq = None
    courses[allCourses[i].text] = [prereq, coreq]


# create csv file to write data to
fileName = "web-scraping/webscrapingdata.csv"
f = open(fileName,"w")
f.write("Name,Title,Prereqs,Coreqs\n")

for key, value in courses.items():
    key = key.split(" - ")
    f.write(key[0] + ",\"" + key[1] + "\",\"" + str(value[0]) + "\",\"" + str(value[1]) + "\"\n")

f.close()
driver.quit()