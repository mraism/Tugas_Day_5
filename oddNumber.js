function oddNumber(){
    let odd_number = []   
    for(let i = 1; i <= 100; i++) {
        if (i % 2 != 0){
            odd_number.push(i)
        }
    }
    return odd_number.join(',');
}

console.log('['+oddNumber()+']');
