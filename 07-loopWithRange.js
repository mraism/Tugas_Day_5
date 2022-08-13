function looping(min, max){
    var range = max - min + 1;
    var loopRange = new Array(range);
    
    for(let i = 0; i < range; i++) loopRange[i] = min + i;
    return loopRange;
}

console.log(looping(4,8));
