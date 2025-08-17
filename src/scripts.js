let fechaActual = null;

function buscar(){
    const date = document.getElementById('date').value;
    const url = `https://api.nasa.gov/planetary/apod?api_key=Yafb9b8HzZHbEwwChg2JKYMYgpgTt7gnspDT82YY&date=${date}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            fechaActual = {
                title: data.title,
                date: data.date,
                img: data.url,
                explanation: data.explanation
            }
            document.getElementById('title').textContent = data.title;
            document.getElementById('date1').textContent = data.date
            document.getElementById('media').src = data.url
            document.getElementById('explain').innerHTML = data.explanation;
        }
    )
    let button = document.getElementById('save');
    button.style.display = "block";
    
}


function save(){
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    let existe = favoritos.some(item => item.title === fechaActual.title);

    if(existe){
        alert("Ya esta pa")
    } else{
        favoritos.push(fechaActual);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }

}


function mostrarFav(){
    let like = document.getElementById('like');
    like.style.display = 'flex';
    let main = document.getElementById('main');
    main.style.display = 'none';
    const listafav = document.getElementById('listaFav');
    listafav.innerHTML = '';
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos.forEach(item => {
        let li = document.createElement('li')
        li.textContent = `${item.title} (${item.date})`;
        listafav.appendChild(li);
        
    });

}

function mostrarMain(){
    let main = document.getElementById('main');
    main.style.display = 'flex';
    let like = document.getElementById('like');
    like.style.display = 'none';
}


