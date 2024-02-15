'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    floatchart();
  }, 500);
});

function floatchart() {

  (function () {
    // map
    var map = new jsVectorMap({
      selector: "#world-map-markers",
      map: "world",
      markersSelectable: true,
      markers: [{
        coords: [-14.2350, -51.9253]
      },
      {
        coords: [35.8617, 104.1954]
      },
      {
        coords: [61, 105]
      },
      {
        coords: [26.8206, 30.8025]
      }
      ],
      markerStyle: {
        initial: {
          fill: '#3f4d67',
        },
        hover: {
          fill: '#4099ff',
        },
      },
      markerLabelStyle: {
        initial: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 500,
          fill: '#3f4d67',
        },
      },
    });

    // chart
    var options = {
      chart: {
        type: 'line',
        height: 200,
        toolbar: {
          show: false
        }
      },
      colors: ['#0d6efd'],
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 7,
        colors: '#0d6efd',
        strokeColors: '#fff',
        strokeWidth: 3,
        hover: {
          size: 4,
        }
      },
      stroke: {
        width: 1,
        curve: 'smooth',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 4
        }
      },
      grid: {
        strokeDashArray: 4
      },
      series: [
        {
          data: [30, 60, 40, 70, 50, 90]
        }
      ],
      yaxis: {
        show: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          hideOverlappingLabels: true,
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#earnings-users-chart"), options);
    chart.render();
  })();

}
