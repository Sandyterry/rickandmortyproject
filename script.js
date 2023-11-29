// function fetchData(category) {
//     // Réinitialisez les sections
//     document.getElementById('charactersSection').innerHTML = '';
//     document.getElementById('locationsSection').innerHTML = '';
//     document.getElementById('episodesSection').innerHTML = '';

//     // Effectuez le fetch principal
//     fetch(`https://rickandmortyapi.com/api/${category}/`)
//         .then(response => response.json())
//         .then(data => {
//             // Affichez la bonne section et masquez les autres
//             if (category === 'character') {
//                 displayCharacters(data.results);
//                 document.getElementById('charactersSection').classList.remove('hidden');
//                 document.getElementById('locationsSection').classList.add('hidden');
//                 document.getElementById('episodesSection').classList.add('hidden');
//             } else if (category === 'location') {
//                 displayLocations(data.results);
//                 document.getElementById('charactersSection').classList.add('hidden');
//                 document.getElementById('locationsSection').classList.remove('hidden');
//                 document.getElementById('episodesSection').classList.add('hidden');
//             } else if (category === 'episode') {
//                 displayEpisodes(data.results);
//                 document.getElementById('charactersSection').classList.add('hidden');
//                 document.getElementById('locationsSection').classList.add('hidden');
//                 document.getElementById('episodesSection').classList.remove('hidden');
//             }
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }

// function displayCharacters(characters) {
//     characters.forEach(character => {
//         const characterDiv = document.createElement('div');
//         characterDiv.innerHTML = `<p>${character.name}</p><img src="${character.image}" alt="${character.name}">`;
//         document.getElementById('charactersSection').appendChild(characterDiv);
//     });
// }

// function displayLocations(locations) {
//     locations.forEach(location => {
//         const locationDiv = document.createElement('div');
//         locationDiv.innerHTML = `<p>${location.name}</p><p>Dimension: ${location.dimension}</p><p>Résidents: ${location.residents.length}</p>`;
//         document.getElementById('locationsSection').appendChild(locationDiv);
//     });
// }

// function displayEpisodes(episodes) {
//     episodes.forEach(episode => {
//         const episodeDiv = document.createElement('div');
//         episodeDiv.innerHTML = `<p>Épisode ${episode.episode} - ${episode.name}</p><p>Date de sortie: ${episode.air_date}</p>`;
//         document.getElementById('episodesSection').appendChild(episodeDiv);
//     });
// }


function fetchData(category) {
    // Réinitialisez les sections
    document.getElementById('charactersSection').innerHTML = '';
    document.getElementById('locationsSection').innerHTML = '';
    document.getElementById('episodesSection').innerHTML = '';

    // Effectuez le fetch pour obtenir le nombre total de pages
    fetch(`https://rickandmortyapi.com/api/${category}/`)
        .then(response => response.json())
        .then(data => {
            const totalPages = data.info.pages;

            // Utilisez une boucle for pour parcourir les pages
            for (let page = 1; page <= totalPages; page++) {
                // Effectuez le fetch pour chaque page
                fetch(`https://rickandmortyapi.com/api/${category}/?page=${page}`)
                    .then(response => response.json())
                    .then(data => {
                        // Affichez la bonne section et masquez les autres
                        if (category === 'character') {
                            displayCharacters(data.results);
                            document.getElementById('charactersSection').classList.remove('hidden');
                            document.getElementById('locationsSection').classList.add('hidden');
                            document.getElementById('episodesSection').classList.add('hidden');
                        } else if (category === 'location') {
                            displayLocations(data.results);
                            document.getElementById('charactersSection').classList.add('hidden');
                            document.getElementById('locationsSection').classList.remove('hidden');
                            document.getElementById('episodesSection').classList.add('hidden');
                        } else if (category === 'episode') {
                            displayEpisodes(data.results);
                            document.getElementById('charactersSection').classList.add('hidden');
                            document.getElementById('locationsSection').classList.add('hidden');
                            document.getElementById('episodesSection').classList.remove('hidden');
                        }
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayCharacters(characters) {
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.innerHTML = `<p>${character.name}</p><img src="${character.image}" alt="${character.name}">`;
        document.getElementById('charactersSection').appendChild(characterDiv);
    });
}

function displayLocations(locations) {
    locations.forEach(location => {
        const locationDiv = document.createElement('div');
        locationDiv.innerHTML = `<p>${location.name}</p><p>Dimension: ${location.dimension}</p><p>Résidents: ${location.residents.length}</p>`;
        document.getElementById('locationsSection').appendChild(locationDiv);
    });
}

function displayEpisodes(episodes) {
    episodes.forEach(episode => {
        const episodeDiv = document.createElement('div');
        episodeDiv.innerHTML = `<p>Épisode ${episode.episode} - ${episode.name}</p><p>Date de sortie: ${episode.air_date}</p>`;
        document.getElementById('episodesSection').appendChild(episodeDiv);
    });
}