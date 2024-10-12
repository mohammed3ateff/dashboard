// Get the canvas element
var canvas = document.getElementById("donut-chart");

// Set the chart data
var data = {
  labels: ["MangnumShop", "Over9K", "Doctor+", "AfterMidnight"],
  datasets: [
    {
      labels: ["MangnumShop", "Over9K", "Doctor+", "AfterMidnight"],
      data: [24, 44, 18, 14],
      backgroundColor: ["#30d751", "#fea700", "#fc4f4f", "#3479f9"],
      hoverOffset: 4,
    },
  ],
};

// Set the chart options
var options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  aspectRatio: 1,
  cutout: "50%",
  animation: {
    animateRotate: false,
  },
};

// Create the chart
var chart = new Chart(canvas, {
  type: "doughnut",
  data: data,
  options: options,
});
