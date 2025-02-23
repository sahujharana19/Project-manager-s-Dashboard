const ctx1 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['19 June', '20 June', '21 June', '22 June', '23 June', '24 June', '25 June'],
        datasets: [{
            label: 'Revenue (€)',
            data: [1000, 3000, 2500, 4000, 5000, 6500, 7000],
            borderColor: 'teal',
            fill: false
        }]
    }
});

const ctx2 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Over Budget', 'On Budget', 'Under Budget'],
        datasets: [{
            data: [10, 33, 44],
            backgroundColor: ['red', 'blue', 'green']
        }]
    }
});



document.addEventListener("DOMContentLoaded", function () {
  let emojis = document.querySelectorAll(".emoji");

  emojis.forEach((emoji) => {
      emoji.addEventListener("dragstart", (event) => {
          event.dataTransfer.setData("text", event.target.id);
      });

      emoji.addEventListener("dragend", (event) => {
          event.target.style.position = "absolute";
          event.target.style.left = event.clientX + "px";
          event.target.style.top = event.clientY + "px";
      });
  });
});





document.querySelector('.add-project').addEventListener('click', function() {
    alert('Add New Project Clicked! (You can add a form here)');
});

document.querySelector('.download-report').addEventListener('click', function() {
    alert('Downloading Report... (You can add PDF/CSV export here)');
});

document.querySelector('.filter').addEventListener('click', function() {
    alert('Filter Applied! (You can implement date filtering here)');
});
