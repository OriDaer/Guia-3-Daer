//¿PORQUE NO TOMA LA POSICION 00 Y DE UNA PASA A VALER 11?
//sumo todos lo elementos de la matriz
function PrimeSum(matrix){
    let res=0;
    for(let col=0;col< matrix.length;col++){
        for(let fil=0;fil<matrix.length;fil++){
          //nota:la idea es q no tome al 1 cm valor de num primos  
            if( matrix[col] [fil]>1 && matrix[col][fil]% 2 ===1){//determino si son primos o no
                //usamos template literal para ver q valores esta teniendo
                console.log(`Estoy acumulando valor col:${col} fil:${fil}`);
                console.log(`valgo en col:${matrix[col].length} y en fil:${matrix[fil].length}`);
            res+=matrix[col][fil];
            }
        }
    }
    return res;
}
//declaro matriz
let matrix=[
    [2,4,6],
    [2,3,3],
    [1,7,5]
];
console.log(PrimeSum(matrix));
