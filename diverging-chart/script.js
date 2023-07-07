anychart.onDocumentReady(function() {

    var chart = anychart.bar();

    var winlossData = [
        [65, 17, "2015-16"],
        [61, 21, "2014-15"],
        [55, 27, "2013-14"],
        [37, 45, "2012-13"],
        [25, 41, "2011-12"],
        [25, 57, "2010-11"],
        [25, 57, "2009-10"],
        [17, 65, "2008-09"],
        [25, 57, "2007-08"],
        [40, 42, "2006-07"],
        [37, 45, "2005-06"],
        [48, 34, "2004-05"],
        [26, 56, "2003-04"],
        [32, 50, "2002-03"],
        [24, 58, "2001-02"],
        [26, 56, "2000-01"],
        [15, 67, "1999-00"],
        [19, 31, "1998-99"],
        [21, 61, "1997-98"],
        [26, 56, "1996-97"]
  ];

//configure function to create series
var createSeries = function(columnNumber, name) {
    var data = [];
    for (var i = 0; i < winlossData.length; i++) {


    //calculate % for tooltip

    var val = winLossData[i][columnNumber] * 100;
    if (columnNumber == 0) {
        var percentValue = val / (winlossData[i][columnNumber] + winlossData[i][columnNumber + 1])
    } else {
        var percentValue = val / (winlossData[i][columnNumber] + winlossData[i][columnNumber - 1])
    }
    percentValue = percentValue.toFixed(2);

    var value = winlossData[i][columnNumber];
    var center = 0;
    if (name === "Wins") {
        data.push({
                x: winlossData[i][2],
                low: center,
                high: center + value,
                value: value
            });
        } else {
            data.push({
                x: winlossData[i][2],
                low: -center,
                high: -center - value,
                value: value    
            });
        }
    }
    var series = chart.rangeBar(data);
    series.name(name).stroke("3 #fff 1");
};


    createSeries(0, "Losses");
    createSeries(1, "Wins");

    chart
        .title()
        .enabled(true)
        .text("20 Yeras of LA LAkers Win-Loss Receord With Kobe Bryant");
    chart
        .legend()
        .enabled(true);

    chart.yScale().stackMode("value");
    chart.container("container");
    chart.draw();

    //chart styling
    chart
        .xAxis()
        .ticks(false);
    chart 
        .xAxis()
        .title()
        .enabled(true)
        .text("Years")
        .padding([0, 0, 10, 0]);
    chart
        .yAxis(0)
        .labels()
        .format(function() {
            return Math.abs(this.value);
        });
    chart
        .lineMarker()
        .value(0)
        .stroke("#CECECE");
    

});
