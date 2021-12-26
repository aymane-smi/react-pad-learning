function Helper(arr){
    let RandIndex = Math.floor(Math.random() * arr.length);
    return arr[RandIndex];
}
function State_helper(st, coin){
    return {
        Coin: coin,
        nFlips: st.nFlips+1,
        nHeads : st.nHeads +(coin.alt === 'head'? 1 : 0),
        nTails : st.nTails +(coin.alt === 'tail'? 1 : 0)
    };
}

export {Helper, State_helper};