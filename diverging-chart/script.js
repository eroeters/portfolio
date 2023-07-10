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

    var val = winlossData[i][columnNumber] * 100;
    if (columnNumber == 0) {
        var percentValue = 
            val / (winlossData[i][columnNumber] + winlossData[i][columnNumber + 1]);
    } else {
        var percentValue = 
            val / (winlossData[i][columnNumber] + winlossData[i][columnNumber - 1])
    }
    percentValue = percentValue.toFixed(2);

    var value = winlossData[i][columnNumber];
    var center = 0;
    if (name === "Wins") {
        data.push({
                x: winlossData[i][2],
                low: center,
                high: center + value,
                value: value,
                percentValue: percentValue
            });
        } else {
            data.push({
                x: winlossData[i][2],
                low: -center,
                high: -center - value,
                value: value,    
                percentValue: percentValue
            });
        }
    }
    var series = chart.rangeBar(data);
    series.name(name).stroke("3 #fff 1").selectionMode("none");
};


    createSeries(0, "Losses");
    createSeries(1, "Wins");

    //chart title
    chart
        .title()
        .enabled(true)
        .text("20 Yeras of LA LAkers Win-Loss Receord With Kobe Bryant");

    //chart legend
    chart
        .legend()
        .enabled(true);

    chart.yScale().stackMode("value");

    //chart styling x axis
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
        .xAxis()
        .labels()
        .fontSize(11)
        .fontColor("#474747")
        .padding([0, 10, 0, 0]);

    //chart styling y Axis
    chart
        .yAxis(0)
        .labels()
        .format(function() {
            return Math.abs(this.value);
        });

    // create line marker at 0
    chart
        .lineMarker()
        .value(0)
        .stroke("#CECECE");

    //customize tooltip
    chart
        .tooltip()
        .useHtml(true)
        .fontSize(12)
        .titleFormat(function() {
            return this.getData("x") + " " + this.seriesName;
        })
        .format(function () {
            return (
              "<h6 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'>Total games: " +
              "<b>" +
              this.getData("value") +
              "</b></h6>" +
              "<h6 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'>Percentage games: " +
              "<b>" +
              this.getData("percentValue") +
              " %</b></h6>"
            );
            });
        //custom color palette
        chart.palette(
            anychart.palettes.distinctColors().items(["#FDB827", "#542583"])
        );

        //set a container id for the chart
        chart.container("container");

        //draw chart
        chart.draw();
});
