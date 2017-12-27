$(function(){ 
    // highlightjs-line-numbers.js
    // https://github.com/wcoder/highlightjs-line-numbers.js/
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();

    var startAngle=0;
    var cx = 100;
    var cy = 100;
    var r = 100;
    var deg1 = 30 + startAngle;
    var deg2 = 240 + deg1;
    var deg3 = 90 + deg2;

    var x0 = cx+r*Math.cos(startAngle*Math.PI/180);
    var y0 = cy-r*Math.sin(startAngle*Math.PI/180);

    var x1 = cx+r*Math.cos(deg1*Math.PI/180); 
    var y1 = cy-r*Math.sin(deg1*Math.PI/180); 

    var x2 = cx+r*Math.cos(deg2*Math.PI/180); 
    var y2 = cy-r*Math.sin(deg2*Math.PI/180); 

    var x3 = cx+r*Math.cos(deg3*Math.PI/180); 
    var y3 = cy-r*Math.sin(deg3*Math.PI/180); 

    $("#test1").attr("d","M "+cx+","+cy+" L "+x0+","+y0+" A "+r+","+r+" 0 0,0 "+x1+","+y1+" Z");
    $("#test2").attr("d","M "+cx+","+cy+" L "+x1+","+y1+" A "+r+","+r+" 0 1,0 "+x2+","+y2+" Z");
    $("#test3").attr("d","M "+cx+","+cy+" L "+x2+","+y2+" A "+r+","+r+" 0 0,0 "+x3+","+y3+" Z");
});

// framework callback
function javascript_control_svg_element(json_data) {
    console.info("javascript_control_svg_elemet: " + json_data["type"]);
}
