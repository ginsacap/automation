
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: ['spec2.js'],
        framework: 'jasmine2' ,
   onPrepare: function() {
    browser.driver.manage().window().maximize();
    
},
jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
    },
 };