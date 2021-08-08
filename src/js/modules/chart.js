let elements = document.querySelectorAll('.chart');
for(let element of elements){
  let chater = new EasyPieChart(element, {
    barColor: '#2c3e50',
    trackColor: '#fff',
    scaleColor: false,
    lineWidth: 10,
    size: 130,
    animate: { duration: 1000, enabled: true }
  });
}