// 1. Prompt the user for a number to begin counting down bottles.

// 2. In the song, everytime a bottle drops,
// the subtracted number should go up by 1.



// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.




let value = prompt("Entrez un nombre");

if (!isNaN(value)) {

    let cmpt = 0;
    let nbrebouteille = 0;
    for (let index = 0; index < value; index++) {
                
        cmpt++;
        if (index == 0) {
            nbrebouteille = value;
            console.log(`${nbrebouteille} ${nbrebouteille>1 ? 'bottles' : 'bottle'} of beer on the wall`);
            console.log(`Take ${(cmpt)} down, pass them around`);
        } else {
            nbrebouteille = nbrebouteille - index;
            console.log(`${nbrebouteille} ${nbrebouteille>1 ? 'bottles' : 'bottle' } of beer on the wall`);
            ((index+1)<nbrebouteille) ? console.log(`Take ${(index+1)} down, pass them around`) : console.log("no bottle of beer on the wall");
        }

        // stop song
        if ((index+1)>nbrebouteille) {
            break;
        }
    }
}