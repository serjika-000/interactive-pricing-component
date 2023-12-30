const rangeInput = document.querySelector(".myrange");
const views = document.querySelector(".number");
const pageViews = document.getElementById('pageviews-count')
const cost = document.querySelector(".amount");
const discount = document.querySelector(".discountNumber");
const slider = document.getElementById('slider');
const monthlyPrice = document.getElementById('monthlyPrice');
const switcher = document.getElementById('switcher');
const month = document.getElementById('month');
let clickButton = false;
let rangeValue = 50 ;
switcher.addEventListener('click',(event)=>{
    clickButton = !clickButton;
    if(!clickButton){
        if(rangeValue>=0&&rangeValue<25){
            monthlyPrice.textContent = ""+10+".00";
            month.textContent ="/month";
        }else if (rangeValue>=25&&rangeValue<50) {
            monthlyPrice.textContent = ""+12+".00";
            month.textContent ="/month";
        } else if (rangeValue>=50&&rangeValue<=70){
            monthlyPrice.textContent = ""+16+".00";
            month.textContent ="/month";
        }else if (rangeValue>70&&rangeValue<90){
            monthlyPrice.textContent = ""+20+".00";
            month.textContent ="/month";
        }else{
            monthlyPrice.textContent = ""+25+".00";
            month.textContent ="/month";
        }
    }else{
        if(rangeValue>=0&&rangeValue<25){
            monthlyPrice.textContent = ""+90;
            month.textContent ="/year";
        }else if (rangeValue>=25&&rangeValue<50) {
            monthlyPrice.textContent = ""+108;
            month.textContent ="/year";
        } else if (rangeValue>=50&&rangeValue<=70){
            monthlyPrice.textContent = ""+144;
            month.textContent ="/year";
        }else if (rangeValue>70&&rangeValue<90){
            monthlyPrice.textContent = ""+180;
            month.textContent ="/year";
        }else{
            monthlyPrice.textContent = ""+225;
            month.textContent ="/year";
        }
    }
})
range.addEventListener("input", (event) => {
    range.style.backgroundSize = `${Number(event.target.value)}% 100%`;

    if (!clickButton) {
        if (event.target.value >= 0 && event.target.value < 25) {
            updatePricing("10.00", "50K Pageviews");
        } else if (event.target.value >= 25 && event.target.value < 50) {
            updatePricing("12.00", "75K Pageviews");
        } else if (event.target.value >= 50 && event.target.value <= 70) {
            updatePricing("16.00", "100K Pageviews");
        } else if (event.target.value > 70 && event.target.value < 90) {
            updatePricing("20.00", "150K Pageviews");
        } else {
            updatePricing("25.00", "200K Pageviews");
        }
    } else {
        if (event.target.value >= 0 && event.target.value < 25) {
            updatePricing("90", "50K Pageviews", "/year");
        } else if (event.target.value >= 25 && event.target.value < 50) {
            updatePricing("108", "75K Pageviews", "/year");
        } else if (event.target.value >= 50 && event.target.value <= 70) {
            updatePricing("144", "100K Pageviews", "/year");
        } else if (event.target.value > 70 && event.target.value < 90) {
            updatePricing("180", "150K Pageviews", "/year");
        } else {
            updatePricing("225", "200K Pageviews", "/year");
        }
    }

    rangeValue = event.target.value;
});

function updatePricing(price, views, duration = "/month") {
    monthlyPrice.textContent = price;
    pageViews.textContent = views;
    month.textContent = duration;
}

// slider.addEventListener('input', function (event) {
// 	console.log('range value :>> ', event.target.value);
// 	const value = range.value;
// 	handlePricingChanges(value);
// });

