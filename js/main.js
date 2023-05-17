let valorA = 3900;
let valorB = 5900;
let valorC = 7100;
let camiseta = "";


let genero = prompt("COMPRA TUS CAMISETAS! \nElije el genero: \n Hombre \n Mujer \n Niños") .toUpperCase();

while ((!isNaN(genero)) || (genero.trim()==="")){
    genero = prompt("COMPRA TUS CAMISETAS! \nElije el genero: \n Hombre \n Mujer \n Niños") .toUpperCase();
} 
if(genero === "HOMBRE"){
    camiseta = prompt("Tenes estas opciones para hombre:\n 1. Camiseta sola: " +"$"+ valorA + "\n 2. Camiseta y short: " +"$"+ valorB +  "\n 3. Camiseta,short y medias: " +"$"+ valorC );
    while ((isNaN(camiseta)) || (camiseta.trim()==="") || (camiseta>3)){
        camiseta = prompt("Tenes estas opciones para hombre:\n 1. Camiseta sola: " +"$"+ valorA + "\n 2. Camiseta y short: " +"$"+ valorB +  "\n 3. Camiseta,short y medias: " +"$"+ valorC );
    } 
    if(camiseta == 1){
        console.log("if 1")
        cantidad =parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
        precio = calculaPrecio(cantidad,valorA);
    }else if(camiseta == 2){
            console.log("if 2")
            cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
            precio = calculaPrecio(cantidad,valorB);
        }else if(camiseta == 3){
                console.log("if 3")
                cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
                precio = calculaPrecio(cantidad,valorC);
            }
} 
else if(genero === "MUJER"){
    camiseta = prompt("Elige una de estas opciones:\n 1. Camiseta sola: " +"$"+ valorA + "\n 2. Camiseta y short: " +"$"+ valorB +  "\n 3. Camiseta,short y medias: " +"$"+ valorC );
    
    while ((isNaN(camiseta)) || (camiseta.trim()==="") || (camiseta>3)){
        camiseta = prompt("Elige una de estas opciones:\n 1. Camiseta sola: " +"$"+ valorA + "\n 2. Camiseta y short: " +"$"+ valorB +  "\n 3. Camiseta,short y medias: " +"$"+ valorC );
    } 
    if(camiseta == 1){
        console.log("if 1")
        cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
        precio = calculaPrecio(cantidad,valorA);
    }else if(camiseta == 2){
            console.log("if 2")
            cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
            precio = calculaPrecio(cantidad,valorB);
        }else if(camiseta == 3){
                console.log("if 3")
                cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
                precio = calculaPrecio(cantidad,valorC);
        }
}

else if (genero === "NIÑOS"){
    camiseta = parseInt(prompt("Elige una de estas opciones:\n 1. Camiseta sola: " +"$"+ (valorA*0.8) + "\n 2. Camiseta y short: " +"$"+ (valorB*0.8) +  "\n 3. Camiseta,short y medias: " +"$"+ (valorC*0.8) ));
    while ((isNaN(camiseta)) || (camiseta>3)){
        camiseta = parseInt(prompt("Elige una de estas opciones:\n 1. Camiseta sola: " +"$"+ (valorA*0.8) + "\n 2. Camiseta y short: " +"$"+ (valorB*0.8) +  "\n 3. Camiseta,short y medias: " +"$"+ (valorC*0.8)));
    } 
    if(camiseta === 1){
        cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
        precio = calculaPrecio(cantidad,valorA);
    }else if(camiseta === 2){
            cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
            precio = calculaPrecio(cantidad,valorB);
        }else if(camiseta === 3){
                cantidad = parseInt(prompt("¿Que cantidad necesitas? \n(A partir de 50 unidades tenes un 15%OFF!)"));
                precio = calculaPrecio(cantidad,valorC);
            }
        
}

