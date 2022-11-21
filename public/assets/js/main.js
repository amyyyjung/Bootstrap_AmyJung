var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
    datasets: [{
      label: "work load",
      data: [14, 20, 26, 30, 28, 26, 32, 44, 51, 40, 26, 17, 19, 22, 38, 43, 47, 45, 42, 37, 37, 37, 37],
      backgroundColor: "rgba(55, 81, 255, 0.1)",
      borderColor: '#3751FF',
    }, ],
  },
  options: {
    legend: {
      display: false,
      position: 'top',
      align: 'end'
    },
    scales: {
      yAxes: [{
        display: true,
        position: 'right',
        ticks: {
          beginAtZero: true
        }
      }, ]
    },
  },
});
// document.getElementById('myChart').innerHTML = ctx;