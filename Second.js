describe("Getting all the options from List Box",function(){  
    function calc(a,b,c)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element.all(by.tagName('option')).each(function(item)
        {
            item.getAttribute('value').then(function(values)
            {
                console.log(item);
                if (values==c)
                {
                    
                    item.click();
                }
            })
        })
        element(by.id("gobutton")).click();
    }
    it ("Performing different OPerations",function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        calc(2,3,"ADDITION");
        calc(8,6,"SUBTRACTION");
        calc(15,3,"DIVISION");
        element.all(by.repeater("result in memory")).each(function(val)
        {
          val.element(by.css("td:nth-child(3)")).getText().then(function(text)
             {
                 console.log(text);
             })
        })
    })
})