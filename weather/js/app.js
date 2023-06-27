    let $= document

    let inputElem = $.querySelector('input')
    let cityElem =$.querySelector('.city')
    let dateElem =$.querySelector('.date')
    let tempElem =$.querySelector('.temp')
    let weatherElem =$.querySelector('.weather')
    let hiLowElem =$.querySelector('.hi-low') 

    let apiData = {
        url: 'https://api.openweathermap.org/data/2.5/weather?q=',
        key: 'e97d05d481c13d54a4f54d571ad198ec'
    }

    function fetchData (){
        let countryValue = inputElem.value

        fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);

            showData(data)

        })
    }

    function showData(data){

        cityElem.innerHTML = `${data.name},${data.sys.country}`

        tempElem.innerHTML= `${Math.floor(data.main.temp -273.15)}°c`

        weatherElem.innerHTML = `${data.weather[0].main}`

        hiLowElem.innerHTML = `${Math.floor(data.main.temp_min -273.15)}°c / ${Math.floor(data.main.temp_max -273.15)}°c`

        dateElem.innerHTML = showDate()
    }

    function showDate(){
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let nowData = new Date()

        let day = days[nowData.getDay()]
        let month = months[nowData.getMonth()]
        let year = nowData.getFullYear()
        let data = nowData.getDate()

        return `${day} ${data} ${month} ${year}`

        console.log(data);
    }


    inputElem.addEventListener('keypress' , (event)=>{
        if(event.keyCode ===13){
  
            fetchData() 
        }
    })



