// tentar executar com servidor JSON SERVER

// npm i json-server -g
// json-server --watch api-artists/artists.json --port 3000 // Executar o json na porta 3000


const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
    
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    if (result.artists) {
        result.artists.forEach(artist => {
            artistName.innerText = artist.name;
            artistImage.src = artist.urlImg;   
        });
    } else {
        console.error('Erro: Nenhum artista encontrado na resposta da API');
    }

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);

});

// const searchInput = document.getElementById('search-input');
// const resultArtist = document.getElementById("result-artist");
// const resultPlaylist = document.getElementById('result-playlists');

// function requestApi(searchTerm) {
//     const url = `http://localhost:6600/artists?name_like=${searchTerm}`
//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => displayResults(result))
// }

// function displayResults(result) {
//     resultPlaylist.classList.add("hidden")
//     const artistName = document.getElementById('artist-name');
//     const artistImage = document.getElementById('artist-img');

//     result.forEach(element => {
//         artistName.innerText = element.name;
//         artistImage.src = element.urlImg;
//     });

//     resultArtist.classList.remove('hidden');
// }

// document.addEventListener('input', function () {
//     const searchTerm = searchInput.value.toLowerCase();
//     if (searchTerm === '') {
//         resultPlaylist.classList.add('hidden');
//         resultArtist.classList.remove('hidden');
//         return
//     }
    
//     requestApi(searchTerm);
// })