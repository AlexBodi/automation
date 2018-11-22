const locators = require("../locators/locators.js");


Feature("HeyJobs testing task");

Scenario("Expect to see a list of 5 jobs, with images, names and locations", I => {
  I.amOnPage("/");
  I.wait(1);
  I.seeNumberOfElements(locators.JOB, 5);
  I.seeNumberOfElements(locators.IMG, 5);
  I.seeNumberOfElements(locators.COMPANY_NAME, 5);
  I.seeNumberOfElements(locators.LOCATION, 5)
;});
Scenario("After users click on a job from the list, they can see job details and can navigate back from a job details page to the job list", I => {
  I.amOnPage("/");
  I.wait(1);
  I.click(locators.FIRST_JOB);
  I.seeInCurrentUrl("http://localhost:3333/job/");
  I.seeElement(locators.JOB_BRIEF);
  I.seeElement(locators.APPLY_BTN);
  I.seeElement(locators.RESP);
  I.seeElement(locators.REQ);
  I.saveScreenshot("job.png");
  I.seeElement(locators.BACK_BTN);
  I.take
  I.click(locators.BACK_BTN);
  I.seeElement(locators.FIRST_JOB);

});

Scenario("Users see error message when they visit an unknown URL ", I => {
  I.amOnPage("/foo");
  I.seeElement(locators.ERROR);
  I.click(locators.GO_BACK_BTN);
  I.seeInCurrentUrl("http://localhost:3333");

});
  
  

