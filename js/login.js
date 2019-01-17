
$('form').on('submit', function (e) {
    e.preventDefault();
    // alert('submited');
    const email = $('#email').val();
    const password = $('#password').val();

    $.ajax({
        url: 'https://i.ogwugo.net/api/v2/app/auth',
        async: true,
        beforeSend: () => {
            console.log('Loading...',email,password);
        },
        data: {
            password: password,
            email: email,
            cart_id:'0',
            domain:'international',
            platform:'web'
           },
        complete: (jqXHR, textStatus) => {
            var parsed = jqXHR.responseJSON;
            console.log(parsed, textStatus);
            var data = Object.values(parsed);
            console.log(data[2]);
        },
        error: (e) => {
            console.log(e);
        },
        method: 'POST',
        statusCode: {
            404: () => {
                console.log('Resource Not found');
            }
        }
    }).done(function () {
        //diione
    }).fail(function (e) {
        console.log(e);
    })

});