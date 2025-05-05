//TO-DO: This is just dummy mood data  and we'll replace with live data later
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const data = [3, 4, 2, 5, 4, 3, 4];

const ctx = document.getElementById('moodChart').getContext('2d');
const moodChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Mood Level (1-5)',
      data: data,
      borderColor: '#0072ce',
      backgroundColor: 'rgba(0, 114, 206, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: '#0072ce'
    }]
  },
  options: {
    scales: {
      y: {
        min: 1,
        max: 5,
        title: {
          display: true,
          text: 'Mood Score'
        }
      }
    }
  }
});

// Popup Logic
const popup = document.getElementById('popup');
const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');

openBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

const timeRange = document.getElementById('timeRange');

timeRange.addEventListener('change', () => {
  let range = timeRange.value;

  //TO-DO: This is just dummy mood data  and we'll replace with live data later
  let newLabels, newData;

  if (range === 'week') {
    newLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    newData = [3, 4, 2, 5, 4, 3, 4];
  } else if (range === 'month') {
    newLabels = Array.from({length: 4}, (_, i) => `Week ${i + 1}`);
    newData = [3.2, 4.1, 3.5, 4.0];
  } else {
    newLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
    newData = [3.3, 3.7, 4.0, 3.8, 4.2];
  }

  moodChart.data.labels = newLabels;
  moodChart.data.datasets[0].data = newData;
  moodChart.update();
});
