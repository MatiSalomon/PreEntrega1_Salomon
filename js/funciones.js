const calculaPrecio = (cantidad, valorProducto) => {
    if((cantidad >= 1)&&(cantidad <=49)){
        return alert("El precio total es de: $"+(valorProducto*cantidad))
     }else{
         return alert("El precio total es de: "+((valorProducto*cantidad))+"- 15% = "+"$"+((valorProducto*cantidad)*0.85))
     }
}
