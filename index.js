var canPlaceFlowers = function(flowerbed, n) {
    for ( let i = 0; i< flowerbed.length; i++){
        const l = i ===0 || flowerbed[i-1] ===0;
        const r = i === flowerbed.length-1 || flowerbed[i+1] ===0;
        if (l && r && flowerbed[i]===0){
            flowerbed[i]=1;
            n--;
        }
    }
    return n<=0;
};