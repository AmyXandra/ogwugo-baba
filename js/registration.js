//load location on page load
$(window).on('load', function (event) {
    console.log(event);
    getLocation();
    function getLocation() {

        if (window.navigator.geolocation) {
           let setGoLocation =  window.navigator.geolocation.getCurrentPosition((position) => {
                window.Platitude = position.coords.latitude.toString();
                window.Plongitude = position.coords.longitude.toString();
                return;
            });
        } else {
            let x = "Geolocation is not supported by this browser.";
            alert(x);
        };
    };
});

//hadle form
$('form').on('submit', function(e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    const phone = $('#phone').val();
    const address = $('#address').val();
    const username = $('#uname').val();
    const longi = window.Plongitude;
    const lati = window.Platitude;

    let userData = {
            username: username,
            password: password,
            email: email,
            phone: phone,
            address: address,
            longitude: longi,
            latitude: lati,
            first_name: 'Badguy',
            device_uuid: null,
            city_id: 042,
            cart_id: 0,
            domain: 'international',
            platform: 'web'
        };
    // console.log(longi, lati);

    $.ajax({
        url: 'http://i.ogwugo.net/api/v2/app/registration/user',
        method: 'POST',
        beforeSend: (request) => {
            console.log('Please wait,Loading...');
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        },
        data: userData,
        complete: (jqXHR, textStatus) => {
            var parsed = jqXHR.responseJSON;
            var data = Object.values(parsed);
            console.log(data[2]);
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

});