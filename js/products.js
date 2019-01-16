window.addEventListener('load',function(){
    fecthProducts(1);
});

function fecthProducts(page){
    let container = document.getElementById('products-container');
    let paginationDiv =  document.getElementById('pagination');
paginationDiv.innerHTML = '';
    container.innerHTML = '';
    $.ajax({
        url: 'http://i.ogwugo.net/api/v2/app/products/list/all',
        data:{
            limit:10,
            page_id:page
        },
        method: 'GET',
        beforeSend: (request) => {
            console.log('Loading...');
            request.setRequestHeader("Access-Control-Allow-Origin","*");
            request.setRequestHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
            request.setRequestHeader("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
            request.setRequestHeader("Authorization", "Basic b2d3dWdvX3NlcnZpY2U6ZzU3ODI3NmRzZmZkYmE=");
        },
        success: (data,jqXHR, textStatus) => {

            let newdata = Object.values(data);

            newdata[0].forEach(products => {
              let product =   `
                <div class="product-item" id="product-item">
                                
                                    <div class="product-media">
                                        <figure>
                                            <a href=${products.url}>
                                                <img alt="img" src="${products.image_icon_path}">
                                            </a>
                                        </figure>
                                        <a href="#" class="quick-view">quick view</a>
                                    </div>
                                    <div class="product-top equal-elem">
                                        <span class="cat-list">Camera</span>
                                        <h3 class="product-name"><a href="#">${products.name}</a></h3>
                                    </div>
                                    <div class="product-info">
                                        <div class="product-content">
                                            <span class="price">${products.price}</span>
                                            <div class="star-rating">
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <a href="#"><i class="fa fa-star-o"></i></a>
                                                <span>(0)</span>
                                            </div>
                                        </div>
                                        <div class="group-btn-control">
                                            <div class="inner">
                                                <a href="#" class="compare button"><span class="arrow_left-right_alt"></span></a>
                                                <a href="#" class="add_to_cart">Add to Cart</a>
                                                <a href="#" class="button add_to_wishlist"><span class="icon_heart_alt"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                `;
               container.innerHTML += product;
            });
            
            let pagination = newdata[1];
        
            const paginationArray =  Object.entries(pagination.links_id);
         //    console.log(paginationArray);
         
        paginationArray.forEach(page => {
            // console.log(page[0]);
    let newHt = `<li onclick="fecthProducts(${page[1]})" class="page-item"><a href="#products-container" class="page-link">${page[0]}</a></li>`
          paginationDiv.innerHTML += newHt;
        });
           
        },
        error: (e) => {
            console.log(e);
        },
        statusCode: {
            404: () => {
                console.log('Resource Not found');
            }
        }

    });
    
 };