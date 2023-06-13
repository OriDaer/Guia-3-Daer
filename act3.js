//sumo todos lo elementos de la matriz solo si es pas,esta entre 0 y 100 y es multiplo de 6
function sumElems(matrix){
    let res=0;
    for(let col=0;col< matrix.length;col++){
        for(let fil=0;fil<matrix.length;fil++){
           if( matrix[col][fil]%2===0 && matrix[col][fil]<=100 && matrix[col][fil]>=0 && matrix[col][fil]%6===0){ //determino mi condicion
            res+=   matrix[col][fil]; //sumo los elementos que cumplieron con los parametros del if
           }
        }
    }
    return res;
}
//declaro matriz
let matrix=[
    [12,3,4],
    [5,2,7],
    [60,2,120]
];
console.log(sumElems(matrix));