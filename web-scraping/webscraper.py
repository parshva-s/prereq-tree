from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


options = Options()
options.headless = True
options.add_argument("--window-size=1920,1200")
text = {}

DRIVER_PATH = '~/Downloads'
driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
driver.get('https://apps.ualberta.ca/catalogue/course/ece')
allCourses = driver.find_elements(By.XPATH, "//div[@class='card']//h2")
# allCourses.remove(allCourses[0])
# allCoursesDetails = driver.find_elements(By.TAG_NAME, "p")
allCoursesDetails = driver.find_elements(By.XPATH,"//div[@class='card']//p")
# print(len(allCoursesDetails))
# print(len(allCourses))
for i in range(len(allCoursesDetails)):
    addPre = False
    addCor = False
    prereq = ""
    coreq = ""
    # print(allCoursesDetails[i].text)
    courseDetails = allCoursesDetails[i].text.split()
    for j in courseDetails:
        # for prereqs
        if j.lower() == "prerequisites:" or j.lower()=="prerequisite:":
            addPre = True
        elif addPre and j[(len(j))-1] == ".":
            prereq += j.strip(".")
            addPre = False
        # for coreqs
        if j.lower() == "corequisites:" or j.lower() == "corequisite:":
            addCor = True
        elif addCor and j[(len(j))-1] == ".":
            coreq += j.strip(".")
            addCor = False
        if addPre:
            prereq += j + " "
        if addCor:
            coreq += j + " "
    if prereq == "": prereq = None
    if coreq == "": coreq = None
    text[allCourses[i].text] = [prereq, coreq]
for key, value in text.items():
    key = key.split(" - ")
    print("Course Name: " + key[0] +  " Course Title: " + key[1] + " -- Prereq: " + str(value[0]) + " and Coreq: " + str(value[1]))
# print(text)
driver.quit()