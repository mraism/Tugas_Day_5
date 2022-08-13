function arrayRemover(buah){
    const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon']
    let newFruits = fruits.filter(keys => keys != buah)
    console.log('newFruits : ' + '[' + newFruits + ']')
}

arrayRemover('Jambu')
