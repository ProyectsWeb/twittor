
function actualizaCacheDinamico ( dynamicCache, req, res){

if(res.ok){

caches.open( dynamicCache ).then( cache =>{

    return cache.put(req, res.clone());

    return res.clone();

});

}else{

    return res;

}


}