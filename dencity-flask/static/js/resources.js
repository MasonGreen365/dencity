// document.addEventListener('DOMContentLoaded', function() {
//     const housingCards = document.querySelectorAll('.housing-card');
//     housingCards.forEach(function(card) {
//         card.addEventListener('click', function() {
//             this.classList.toggle('flipped');
//         });
//     });
// });

fetch('/static/housing_info.csv') // Adjust the path to your CSV file
  .then(response => response.text())
  .then(csvData => {
    let rows = csvData.split('\n');
    let headers = rows[0].split(',');
    let housingData = [];

    // Parse CSV data
    for (let i = 1; i < rows.length; i++) {
      let values = rows[i].split(',');
      let entry = {};
      for (let j = 0; j < headers.length; j++) {
        entry[headers[j]] = values[j];
      }
      housingData.push(entry);
    }

    // Create housing cards dynamically
    let housingGrid = document.querySelector('.housing-grid');
    housingData.forEach(entry => {
      let card = document.createElement('div');
      card.classList.add('housing-card', 'flip-container');

      let flipper = document.createElement('div');
      flipper.classList.add('flipper');

      let front = document.createElement('div');
      front.classList.add('front');

      let title = document.createElement('h3');
      title.textContent = entry['housing plan'];

      let image = document.createElement('img');
      image.src = `/static/img/plan.jpg`; 
      image.alt = 'Plan Type';

      let price = document.createElement('p');
      price.textContent = `Price: $${entry['price per unit']}`;

      let units = document.createElement('p');
      units.textContent = `Units: ${entry['number of units']}`;

      // Append elements
      front.appendChild(title);
      front.appendChild(image);
      front.appendChild(price);
      front.appendChild(units);

      let back = document.createElement('div');
      back.classList.add('back');

      let description = document.createElement('p');
      description.textContent = entry['description'];

      back.appendChild(description);

      flipper.appendChild(front);
      flipper.appendChild(back);
      card.appendChild(flipper);
      housingGrid.appendChild(card);

      card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
    });
  })
  .catch(error => console.error('Error fetching CSV:', error));