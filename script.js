const API_KEY = "DEMO_KEY"
const apodTitle = document.getElementById("apod-title");
const apodDateText = document.getElementById("apod-date-text");
const apodMedia = document.getElementById("apod-media");
const apodExplanation = document.getElementById("apod-explanation");
const dateInput = document.getElementById("apod-date");
const searchBtn = document.getElementById("favorite-btn");
const favoritesList = document.getElementById("favorites-list");
dateInput.max = new date().tolSOString().split("t")[0];

document.addEventListener ("DOMContendLoaded", ()