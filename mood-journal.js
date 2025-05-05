document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('mood-form');
  const ctx = document.getElementById('moodChart').getContext('2d');

  const moodMap = {
    happy: 5,
    okay: 3,
    sad: 2,
    angry: 1,
    anxious: 1
  };

  let moodData = JSON.parse(localStorage.getItem('moodEntries')) || [];

  form.addEventListener('submit', e => {
    e.preventDefault();
    const mood = form.mood.value;
    const note = form.note.value;
    const today = new Date().toISOString().split('T')[0];

    moodData.push({ date: today, mood, note });
    localStorage.setItem('moodEntries', JSON.stringify(moodData));

    form.reset();
    alert('Mood saved!');
    updateChart();
  });

  function updateChart() {
    const last7 = getLast7Days();
    const labels = [];
    const scores = [];

    last7.forEach(day => {
      labels.push(day);
      const entry = moodData.find(m => m.date === day);
      scores.push(entry ? moodMap[entry.mood] : null);
    });

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Mood (1 = low, 5 = high)',
          data: scores,
          borderColor: 'teal',
          backgroundColor: 'rgba(0, 128, 128, 0.2)',
          tension: 0.4
        }]
      },
      options: {
        scales: {
          y: { min: 0, max: 5 }
        }
      }
    });
  }

  function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push(date.toISOString().split('T')[0]);
    }
    return days;
  }

  document.querySelectorAll('.emoji-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear previous selection
      document.querySelectorAll('.emoji-buttons button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('mood').value = btn.dataset.mood;
    });
  });

    updateChart(); // Initial call
  });