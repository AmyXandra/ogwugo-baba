
fecthProduct();

function fecthProduct(){
    let id =  window.localStorage.getItem('id');
    let url = window.localStorage.getItem('url');

    let container = document.getElementById('product-container');
    container.innerHTML = '';

    $.ajax({
        url: `http://i.ogwugo.net/api/v2/app/product/one/${id}`,
        data:{
            url:url
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
            console.log(data);
            const name  = data.name;
            const price = data.price;
            const shortDescription = data.short_desc;
            const tags = data.tags;
            const image = data.image_icon_path;
            const currency = data.store_currency.sign;
            const unit_title = data.unit_title;
            const store = {
                name: data.store_detail.name,
                city:data.store_detail.city
            };
       let details =   `
            <div class="product-single margin-bottom-40">
                            <div class="product-single-media thumb-vertical">
                                <a href="#" class="e-zoom"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                                <div class="slider slider-for">
                                    <img src="${image}" alt="${name}"/>
                                    <img src="${image}" alt="${name}"/>
                                    <img src="${image}" alt="${name}"/>
                                </div>
                                <div class="slider slider-nav">
                                    <div><img src="${image}" alt="${name}"/></div>
                                    <div><img src="${image}" alt="${name}"/></div>
                                    <div><img src="${image}" alt="${name}"/></div>

                                </div>
                            </div>
                            <div class="product-single-info" style="border: 1px solid #eaeaea;padding:0;">
                                <h1 class="product-title">${name}</h1>
                                
                                <div class="product-single-button" style="padding:0;">
                                    <h4>FOB Reference Price:Get Latest Price</h4>
                                    <span class="price">
                                    <ins>${currency} ${price} / ${unit_title}</ins>
                                    <div class="supply-dtl">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h5>Supply Ability:</h5>
                                            </div>
                                            <div class="col-md-9">
                                                <h5> ${price} / ${unit_title} per ${shortDescription}</h5>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                            <h5>Ships From:</h5>
                                            </div>
                                            <div class="col-md-9">
                                            <h5>${store.name}</h5>
                                            </div>
                                        </div>
                                        <a href="#" class="add_to_cart">Contact Seller</a>
                                        <a href="#" class="add_to_compare">Start Order</a>
                                    </div>

                                    <div class="quantity">
                                        <span class="label-quantity">Quatity:</span>
                                        <div class="buttons_added">
                                            <a href="#" class="sign minus"><i class="fa fa-caret-up"></i></a>
                                            <input type="text" value="1" title="Qty" class="input-text qty text" size="1">
                                            <a href="#" class="sign plus"><i class="fa fa-caret-down"></i></a>
                                        </div>
                                    </div> 
                                    
                                    <div class="method-shiping">
                                        <p class="items"><i class="fa fa-check" aria-hidden="true"></i>Satisfaction 100% Guaranteed</p>
                                        <p class="items"><i class="fa fa-check" aria-hidden="true"></i>Free shipping on orders over $99</p>
                                        <p class="items"><i class="fa fa-check" aria-hidden="true"></i>14 day easy Return</p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        
            `;
            container.innerHTML = details;

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