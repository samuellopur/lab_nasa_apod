function buscar(){
    const date = document.getElementById('date').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=Yafb9b8HzZHbEwwChg2JKYMYgpgTt7gnspDT82YY&date=${date}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('title').textContent = data.title;
            document.getElementById('date1').textContent = data.date
            document.getElementById('media').src = data.url
            document.getElementById('explain').innerHTML = data.explanation;
        }
    )
    let button = document.getElementById('save');
    button.style.display = "block";
}