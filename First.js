describe('My First Test Scenario',function(){

    /* beforeEach(function (done) {
         window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
         setTimeout(function () {
         console.log('inside timeout');
         done();
         }, 50000);*/
         beforeAll(function()
         {
             browser.get('http://juliemr.github.io/protractor-demo/');
         }
         
         )
     function calc(a,b,c)
     {
         element(by.model('first')).sendKeys(a);
         element(by.model('second')).sendKeys(b);
         element(by.id('gobutton')).click();
         element(by.css("h2[class='ng-binding']")).getText().then(function(text)
         {
             //browser.sleep(5000);
             console.log('Value of sum is:' +text);
         }) 
     }
    
     it('Getting all the values from table', () => 
 
     {
         //browser.waitForAngularEnabled('false');
        // browser.sleep(2000);
         
        
        // browser.sleep(2000);       
         calc(4,3,"ADDITION");
         calc(5,3,"ADDITION");
         calc(6,4,"MULTIPLICATION");
         calc(7,5,"SUBTRACTION");
         element.all(by.repeater('result in memory')).each(function(Val)
 
         {
            Val.element(by.css("td:nth-child(3)")).getText().then(function(item)           
            {
             console.log('Sum of 2 numbers is:' +item);
            })        
           
         })
        
     });
   
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
         /*element(by.css("td[class*='binding']")).getText().then(function(value)
         {
             browser.sleep(5000);
             if (value == 7)
             {
                 console.log('Test Successful');
             }
         }) 
         
         
           it ('Getting all the values from List Box',()=>
     {
         element.all(by.tagName('option')).each(function(itm)
         {
             itm.getAttribute('value').then(function(values)
             {
                 console.log(values);
                 if (values == c)
                 {
                     values.click();
                 }
 
             }
             
             )
         })
 
     });
 
         */
     
 
 
 
 /*
 describe('Enter GURU99 Name', function() {
  it('should add a Name as GURU99', function() {
  browser.get('https://angularjs.org');
  element(by.model('yourName')).sendKeys('GURU99');
   var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
 expect(guru.getText()).toEqual('Hello GURU99!');
   });
 });*/
 
 
 
 
 
 