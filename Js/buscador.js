var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

    if ($("inputBusqueda").val()==""){                
        $("#search").fadeOut();
    }else{
        $("#search").fadeIn();
    }
     if (inputBusqueda.value === ""){          //ocultar contenido cuando no hay nada en la busqueda
         search.style.display = "none";
            
    }
})

function ocultar_buscador(){
                               
    search.style.display = "none";              //ocultar contenido search al dar click
} 
