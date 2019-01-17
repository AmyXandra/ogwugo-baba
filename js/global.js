
    function loadSingleProducts(id,url){
        // alert(id,url);
        window.localStorage.clear('id','url');
        window.localStorage.setItem('id',id);
        window.localStorage.setItem('url',url);
        // location.assign("http:localhost:2000/single-product.php");
        var initialPage = location.pathname;
  location.replace('http://localhost:2000' + initialPage + 'single-product.php') ;
        // location.reload(true);
    };
