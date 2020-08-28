// function that builds a grid in the "container"

function createGrid(x,items) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
        // $("#container").append("<div class='break'></div>");
    };
    console.log(screen.height)
            // var item=items[Math.floor(Math.random() * items.length)];
            // $(".s").css("background-color", item);
        // let query=window.matchMedia("screen and (min-width:320px) and (max-width:480px)");
        // if(query.matches){
        //     $(".grid").width(500/x);
        //     $(".grid").height(500/x);
        // }
        //     query=window.matchMedia("screen and (min-width:481px) and (max-width:600px)");
        //     if(query.matches){
        //         $(".grid").width(540/x);
        //         $(".grid").height(700/x);
        //     }
        //     query=window.matchMedia("screen and (min-width:601px) and (max-width:800)");
        //     $(".grid").width(700/x);
        //     $(".grid").height(700/x);
        // query=window.matchMedia("screen and (min-width:801px) and (max-width:1025)");
        // if(query.matches){
        //     $(".grid").width(913/x);
        //     $(".grid").height(913/x);
        // }
        //     query=window.matchMedia("screen and (min-width:1026px)");
        //     if(query.matches){
        //     $(".grid").width(1048/x);
        //     $(".grid").height(1048/x);
        //     }
    //     var ih=window.innerHeight;
    // var iw=window.innerWidth;
    // $(".grid").width(iw/x);
    // $(".grid").height(ih/x);

    $(".grid").width($("#container").width()/x);
    $(".grid").height($("#container").height()/x);
    
};
// function resizefunction(){
//     var ih=window.innerHeight;
//     var iw=window.innerWidth;
//     $(".grid").width(iw/x);
//     $(".grid").height(ih/x);
// }

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  
function fillcolours(items){
    var cells=document.getElementsByClassName('grid');
    for(let i=0;i<cells.length;i++){
        cells[i].style.backgroundColor=items[Math.floor(Math.random() * items.length)];
    }
}
// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many grids per side?");
    var n=new Array();
    var a=prompt("Colour 1");
    var b=prompt("Colour 2");
    var c=prompt("Colour 3");
    n.push(a);
    n.push(b);
    n.push(c);
    clearGrid();
    createGrid(z,n);
    fillcolours(n);
    // resizefunction();
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid();
    $(".newGrid").click(function() {
        refreshGrid();
    });
});