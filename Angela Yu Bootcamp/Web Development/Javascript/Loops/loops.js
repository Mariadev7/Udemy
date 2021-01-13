let beer = 100;

function song() {
    while (beer >= 0) {
        console.log(`${beer} bottles of beer on the wall, ${beer} bottles of beer. Take 1 down, pass it around, ${beer-1} bootles of beer on the wall`);
        beer--
    }  
} 
song()