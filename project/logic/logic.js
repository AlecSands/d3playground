window.onload = function() {
  console.log("js sourced");

  var data = [4, 8, 15, 16, 23, 42];

  var body = d3.select("body");

  var svgDiv = body.append("div").attr("class", "svg");

  // var svg = svgDiv.append("svg").attr("width", 1000).attr("height", 1000);

  var chart = svgDiv.append("div").attr("class", "chart");

  var bar = chart.selectAll("div");

  var barUpdate = bar.data(data);

  var barEnter = barUpdate.enter().append("div");

  barEnter.style("width", function(d) {return d * 10 + "px"});
  barEnter.style("background-color", "black");
  barEnter.style("padding", "5px");
  barEnter.style("margin", "3px");
  barEnter.text(function(d) { return d; });
  barEnter.style("color", "white");
  barEnter.style("font", "12px sans-serif");
  barEnter.style("text-align", "right");
  barEnter.attr("data-color", "black");

  barEnter.on("click", function() {
    console.log(this.dataset.color);
    if (this.dataset.color == "black") {
      d3.select(this).transition().duration(1000).style("background-color", "steelblue");
      d3.select(this).attr("data-color", "blue");
    } else {
      d3.select(this).transition().duration(1000).style("background-color", "black");
      d3.select(this).attr("data-color", "black");
    };
  });
}
