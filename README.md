# Protractor Typescript End to End Testing Framework

Framework supports Typescript and javascript. all the tools which are need to integrate with CI/CD are incorporated

# Features

 1. Supports Typescript
 2. Supports cross browser testing Chrome, IE, Firefox, Safari,Edge.
 3. In build Junit and Jasmin Reports
 4. TS Lint Integrated to ensure clean code
 5. Integrated Parallel Testing/multiCapabilities
 6. Supports Angular and Non Angular Application
 7. Page Object Model (POM) Ready
 8. Easy Integration to Jenkins and TFS/ VSTS (Azure DevOps)
 9. Supports Debugging Mode in Visual Studio
 10. Supports multiple environments such as QA, Staging, Production 
 11. Easy to Run Tests, Test Suites 

## Executing Tests
 1. Clone the Project
 2. Enter the command in command prompt`npm install` in project directory where *package.json* is located.
 3. Enter the command in command prompt `npm run webdriver` in project directory where *package.json* is located.
 4. Enter the command in command prompt `npm test`in project directory where *package.json* is located.
 
 ## Test Results
 Test results will be located in *EndToEndTests\EndToEndTests\testResults* folder. test results are available in both .html and .xml Junit format.

### Executing Tests in IE
1. Navigate to directory where *package.json* is located, Run Command *npm iedriver*
2. Navigate to *\EndToEndTests\EndToEndTests\e2e* directory look for *protractor.conf.js* edit the file replace capabilities with below lines 

    capabilities: {
            'browserName': 'internet explorer',
            'platform': 'ANY',
            'version': '11'
            'ignoreProtectedModeSettings': true,
       },
3. Navigate to \EndToEndTests\EndToEndTests\ directory and enter command `npm run startiedriver`
4. Open another instance of windows command prompt and Navigate to ..\EndToEndTests\EndToEndTests\  directory run command `npm test`

### Common Issues with IE
1. Refer https://stackoverflow.com/questions/37456099/protractor-test-in-ie?rq=1 for settings
2. Ensure your display settings is set to 100%. Right click on desktop > display settings > Change size of text, apps and other items to 100%
3. Ensure that your IE browser zoom level is 100%


## TFS/ Azure DevOps integration with Protractor end to end test Help

### https://medium.com/@ganeshsirsi/protractor-end-to-end-tests-configure-on-ci-cd-tfs-vsts-azure-devops-publish-html-results-9143846f579f

1. Create a task for npm install
![
](https://c1.staticflickr.com/2/1861/43978746924_8f61810295_b.jpg)
2. Create Update Webdriver Task
![
](https://c1.staticflickr.com/2/1849/43978747764_9cfe76b9a8_b.jpg)


3. Create  Task to run npm install command
![
](https://c1.staticflickr.com/2/1861/43978746924_8f61810295_b.jpg)

4. Create task to run your tests ![
](https://c1.staticflickr.com/2/1880/43978747604_baf81309ef_b.jpg)
5. Create task to save date in variable (needed for locating the result folder)
![
](https://c1.staticflickr.com/2/1889/43978747424_9a1337f47c_b.jpg)

6. Create task to publish results ![
](https://c1.staticflickr.com/2/1861/42886910980_eb7f0309c6_b.jpg)


### https://medium.com/@ganeshsirsi/protractor-end-to-end-tests-configure-on-ci-cd-tfs-vsts-azure-devops-publish-html-results-9143846f579f

### https://www.linkedin.com/in/ganeshsirsi/



--Saptami
