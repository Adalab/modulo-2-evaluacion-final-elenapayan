'use strict';

const btn = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
const ulElement = document.querySelector(".js-list");
let list = [];

function getMovies() {
    fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            paintMovies(data);
        })
}

function paintMovies(data) {
    for (let i = 0; i < data.length; i++) {
        list += '<li>'
        list += `<img src="${data[i].show.image.medium}" alt="Foto ${data[i].show.name}"/>`
        list += `<h4>${data[i].show.name}</h4>`
        list += '</li>'
    }

    ulElement.innerHTML = list;
}

function getResults(event) {
    event.preventDefault();
    getMovies();
}
btn.addEventListener("click", getResults);