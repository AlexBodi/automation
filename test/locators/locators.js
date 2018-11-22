module.exports = {
 
  JOB:  {
    xpath: '//a[contains(@href,"/job")]'
  },
  IMG: {
    cssSelector: "img",
    wantedTextType: ".",
    wantedTextValue: "//placeimg.com"
  
  },
  COMPANY_NAME: {
    xpath:'//strong[@class="sc-gZMcBi gABsdI"]'
  },

  LOCATION :{
    xpath: '//a[contains(@href,"/job")]//span/strong[@class="sc-gZMcBi gABsdI"]/..'
  },
  
  FIRST_JOB: { xpath: '//a[contains(@href,"/job")][1]'},

  JOB_BRIEF: {xpath: '//h2[contains(.,"Job brief")]'},
  APPLY_BTN: {xpath: '//span[contains(.,"Apply")]'},
  RESP: { xpath: '//h2[contains(.,"Responsibilities")]' },
  REQ: {xpath: '//h2[contains(.,"Requirements")]'},

  BACK_BTN: {
    cssSelector: "span",
    wantedTextType: ".",
    wantedTextValue: "Back"
  },
  ERROR: {xpath: '//p[contains(.,"Sorry, this url is not pointing anywhere")]'},
  GO_BACK_BTN: {xpath: '//span[contains(.,"Go back to homepage")]'},
};
