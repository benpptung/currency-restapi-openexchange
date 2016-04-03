# Example #1

```
const latest = require('currency-restapi-openexchange').Lateset('YOUR_APP_ID');
const inspect = require('util').inspect;

latest((err, rates) {
  
  if (err) return console.error(inspect(err, {colors: true}));
  console.log(inspect(rates, {colors: true}));
});
```


# Example #2

```
const oxr = require('currency-restapi-openexchange')('YOUR_APP_ID');
const inspect = require('util').inspect;


// check 1 month ago rates
var d = new Date(Date.now() - 1000*60*60*24*30);  
oxr.history(d, (err, rates)=>{

  if (err) return console.error(inspect(err, {colors: true}));
  console.log(inspect(rates, {colors: true}));
})