let beer = 100;

function song() {
    while (beer > 0) {
        let bootleWord = "bottles";
        if (beer === 1) {
            bootleWord = "bottle";
        }
        console.log(`${beer} ${bootleWord} of beer on the wall, ${beer}  ${bootleWord} of beer. Take 1 down, pass it around, ${beer - 1}  ${bootleWord} of beer on the wall`);
        beer--
    }
}
song()