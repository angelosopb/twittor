
//Guardar en la cache dinamica
function actualizarCacheDinamico(dynamicCache, request, response) {
    
    if( response.ok){
        return caches.open(dynamicCache).then( cache =>{
            cache.put(request,response.clone());
            return response.clone();
        });
    } else {
        return response;
    }

}