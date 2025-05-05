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
