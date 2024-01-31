const resultArtist = document.getElementById("result_artist");
const resultPlaylist = document.getElementById("result_playlists");
const searchInput = document.getElementById("search_input");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  resultPlaylist.classList.add('hidden');
  const artistImage = document.getElementById("artist_image");
  const artistName = document.getElementById("artist_name");

  results.forEach(element => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    resultPlaylist.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});