
let x = 1
let y = 0

function chnagecolor(color){


    if(+y>=+x){
        let cols = 'blue'
        document.getElementById('TB').style.background = cols;
        document.getElementById('TB1').style.background = cols;
        document.getElementById('TB2').style.background = cols;
        document.getElementById('TB3').style.background = cols;
        document.getElementById('TB4').style.background = cols;
        document.getElementById('TB5').style.background = cols;
        x = +x + 1
    }
    if(+x>=+y){
        let cols = 'BLACK'
        document.getElementById('TB').style.background = cols;
        document.getElementById('TB1').style.background = cols;
        document.getElementById('TB2').style.background = cols;
        document.getElementById('TB3').style.background = cols;
        document.getElementById('TB4').style.background = cols;
        document.getElementById('TB5').style.background = cols;
        x = +x + 1
        y = +y + 2
    }
}

