$(document).ready(()=>{
$("#data").click(()=>{
var city=$("#city").val();
var country=$("#country").val();
const api="a4ae2d499f933379fe72d5eea48b3441";
const units="metric";
// country="IN";
// city="gaya"
const fetchData=async ()=>{
const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api}&units=${units}`);
const data=await api_call.json();
return {
    data:data,
}
}
const showdata=()=>{
    fetchData().then(res=>{
        if(res.data.message!="city not found"){
            console.log(res.data);
            console.log(typeof(res.data.weather[0].icon))
            $("#name").text(`${res.data.name}`);
            $("#image").attr("src","http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png");
            $("#temp").text(`Temp: ${res.data.main.temp}°C`)
            $("#max_temp").text(`Max_Temp: ${res.data.main.temp_min}°C`)
            $("#min_temp").text(`Min_Temp: ${res.data.main.temp_max}°C`)
            $("#feel_like").text(`Feels_Like: ${res.data.main.feels_like}°C`)
            $("#dis").text(`${res.data.weather[0].description}`)
            date = new Date(res.data.dt * 1000); 
            var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
$("#time").text(`Time: ${formattedTime}`);
  
        }else{
            alert(res.data.message);
        }
    })
}
showdata();
})
});