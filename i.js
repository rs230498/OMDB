function ser()
   {
        resu11.style.display = "none"
        var name = document.querySelector("#name").value
        var key = "adb7c2b1"
        var url = "https://www.omdbapi.com/?apikey="+key+"&t="+name
        function getvals(){
        return fetch(url,
        {
            method: "GET",
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        })
        .then((response) => response.json())
        .then((responseData) => {
        console.log(responseData);
        return responseData;
        })
        .catch(error => console.log(error));
    }


    
    
    getvals().then(function(response)
    {
        if(response.Response=="True")
        {
            document.querySelector("#mov").style.display = "flex"
            document.querySelector("#er").style.display = "none"
        }
        if(response.Response=="False")
        {
            document.querySelector("#er").style.display = "flex"
            document.querySelector("#mov").style.display = "none"
        }
        document.querySelector("#mi").innerHTML=""
        document.querySelector("#t").innerHTML=""
        document.querySelector("#act").innerHTML=""
        document.querySelector("#rd").innerHTML=""
        document.querySelector("#rat").innerHTML=""
        document.querySelector("#dir").innerHTML=""
        document.querySelector("#gen").innerHTML=""
        document.querySelector("#lan").innerHTML=""
        var img = document.createElement("img")
        img.src = response.Poster
        document.querySelector("#mi").append(img)
        document.querySelector("#t").append(response.Title)
        document.querySelector("#act").append(response.Actors)
        document.querySelector("#rd").append(response.Released)
        document.querySelector("#rat").append(response.Ratings[0].Value)
        var num = eval(response.Ratings[0].Value)
        if(num>=0.85)
        {
            document.querySelector("#rec>img").style.display = "block"
        }
        else{
            document.querySelector("#rec>img").style.display = "none"
        }
        document.querySelector("#dir").append(response.Director)
        document.querySelector("#gen").append(response.Genre)
        document.querySelector("#lan").append(response.Language)

        
    });
   }
  
   

    function m1()
   {
        var name1 = document.querySelector("#name").value
        var key1 = "adb7c2b1"
        var url1 = "https://www.omdbapi.com/?s="+name1+"&apikey="+key1
        var xx1 = getval(url1)
        // // var data11 = await xx1
        // console.log(xx1);
    }

    function getval(url1)
        {
            console.log("y")
            return fetch(url1,
            {
                method: "GET",
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            // },
            })
            .then((response) => response.json())
            .then((responseData) => {
            console.log(responseData);
            if(responseData.Response == "True")
            {
                append(responseData.Search)
            }
            })
            .catch(error => console.log(error));
        }

    var resu11 = document.querySelector("#resu1")
    function append(data)
    {
        console.log("z")
        resu11.style.display = "block"
        var namez = document.querySelector("#name")
        //resu11.style.display = "block"
        //document.querySelector("#resu1").innerHTML=""
        // console.log(data.Poster,data.Title)
        data.forEach(element => {
            
            var box = document.createElement("div")
            box.addEventListener('click', async () => {
                // console.log(movie.dataset.id);
                resu11.style.display = "none"
                namez.value = "";
                const result = await fetch(`https://www.omdbapi.com/?i=${element.imdbID}&apikey=fc1fef96`);
                const movieDetails = await result.json();
                console.log(movieDetails);
                displayMovieDetails(movieDetails);
            });
            var img  = document.createElement("img")
            if(element.Poster == "N/A")
            {
                img.src = "https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"
            }
            else{
                img.src = element.Poster
            }
            var h3 = document.createElement("h3")
            h3.innerText = element.Title
            box.append(img,h3)
            document.querySelector("#resu1").append(box)
        });
    }

    function displayMovieDetails(movieDetails)
   {
        document.querySelector("#mov").style.display = "flex"
        document.querySelector("#mi").innerHTML=""
        document.querySelector("#t").innerHTML=""
        document.querySelector("#act").innerHTML=""
        document.querySelector("#rd").innerHTML=""
        document.querySelector("#rat").innerHTML=""
        document.querySelector("#dir").innerHTML=""
        document.querySelector("#gen").innerHTML=""
        document.querySelector("#lan").innerHTML=""
        var img = document.createElement("img")
        img.src = movieDetails.Poster
        document.querySelector("#mi").append(img)
        document.querySelector("#t").append(movieDetails.Title)
        document.querySelector("#act").append(movieDetails.Actors)
        document.querySelector("#rd").append(movieDetails.Released)
        document.querySelector("#rat").append(movieDetails.Ratings[0].Value)
        var num = eval(movieDetails.Ratings[0].Value)
        if(num>=0.85)
        {
            document.querySelector("#rec>img").style.display = "block"
        }
        else{
            document.querySelector("#rec>img").style.display = "none"
        }
        document.querySelector("#dir").append(movieDetails.Director)
        document.querySelector("#gen").append(movieDetails.Genre)
        document.querySelector("#lan").append(movieDetails.Language)

        
    
   }
  



    var id
    function m2()
    {
        if(id)
        {
            clearTimeout(id)
        }
        id = setTimeout(function(){
            document.querySelector("#resu1").innerHTML=""
            m1()
            console.log("x")
        },1000)
    }