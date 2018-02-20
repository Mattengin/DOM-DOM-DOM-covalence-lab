var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

var bt = document.createElement("button");
var words = document.createTextNode("Add Square");
bt.appendChild(words);
document.body.appendChild(bt);
var square = document.createElement("div");
square.setAttribute("class", "box");
var squareClass = document.getElementsByClassName("box");

// function randomize() {
//     document.getElementById('p1').style.color = randomColors();
//   }
  
  
//   // random colors - taken from here:
//   // http://www.paulirish.com/2009/random-hex-color-code-snippets/
  
//   function randomColors() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
//   }
  

bt.onclick = function createDiv(){
    
    var square = document.createElement("div");
    square.setAttribute("class", "box");
    $(document).ready(function() {
        $(".box").each(function(i) {
            $(this).attr('id', (i + 1));
        });
        $(".box").each(function(k){
            $(this).html(k + 1)
        })
    })


square.ondblclick = function takeaway(){
    if(square.id % 2 == 0){

        square.previousElementSibling.remove();
    }else if(square.id % 3 == 0){
        square.nextSibling.remove();
    }
    
}

    
    console.log(square);

    var rgb = [];

for(var i = 0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 255));

    square.addEventListener("click", function(){
        console.log("Firing");
        square.style.backgroundColor = 'rgb('+ rgb.join(',') +')';  
    });
    document.body.appendChild(square);
    // square.ondblclick = function takeaway(){
    //     square.previousElementSibling.remove();
    // }


}