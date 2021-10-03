function update(){
    n = 0;
    lista1 = document.selector.rol
    lista2 = document.selector.estado

    for(i=0; 1<lista1.options.lenght;i++){
        if(lista.options[i].selected){
            document.write("<br>"+lista.options[i].innerHTML)
            n++
        }
    }

    for(j=0; 1<lista2.options.lenght;j++){
        if(lista.options[j].selected){
            document.write("<br>"+lista.options[j].innerHTML)
            n++
        }
    }

    document.write("<br> <h1>Usuario actualizado exitosamente</h1>")
    document.write("<br>")
    document.write("<br> <a href=gestion-usuarios.html >Click aquí para regresar</a>")
    
}


 