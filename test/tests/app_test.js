const locators = require("../locators/locators.js");


Feature("HeyJobs testing task");

Scenario("Expect to see a list of 5 jobs, with images, names and locations", I => {
  I.amOnPage("/");
  I.seeElement(locators.JOB);

  
  
  
});
