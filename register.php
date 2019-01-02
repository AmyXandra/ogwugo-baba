<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Homepage Multi Market - Register</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<link rel='stylesheet' type='text/css' href='css/bootstrap.min.css'>
<link rel='stylesheet' type='text/css' href='css/font-awesome.css'/>
<link rel='stylesheet' type='text/css' href='css/owl.carousel.min.css'/>
<link rel='stylesheet' type='text/css' href='css/slick.css'/>
<link rel='stylesheet' type='text/css' href='css/chosen.min.css'/>
<link rel='stylesheet' type='text/css' href='css/animate.min.css'/>
<link rel='stylesheet' type='text/css' href='css/themify-icons.css'/>
<link rel='stylesheet' type='text/css' href='css/elegant-icons.css'/>
<link rel='stylesheet' type='text/css' href='css/style.min.css'/>
<link rel='stylesheet' type='text/css' href='css/main3.css'/>
<link rel='stylesheet' type='text/css' href='css/form.css'/>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i|Rubik:300,400,400i,500,500i,700,700i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!--[if lt IE 9]>
		<script src="assets/js/html5shiv.min.js"></script>
		<script src="assets/js/respond.min.js"></script>
	<![endif]-->
</head>

<body>
    
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="register-form validate-form" method="POST" action="<?php $_SERVER['PHP_SELF'] ?>">
					<span class="login100-form-title p-b-43">
						Register
					</span>
					
					<div class="form-row">
						<div class="col-md-6">
							<div class="wrap-input100 validate-input" data-validate = "Usrname is required">
								<input class="input100" id="uname" type="text" name="Username">
								<span class="focus-input100"></span>
								<span class="label-input100">Username</span>
							</div>
						</div>

						<div class="col-md-6">
							<div class="wrap-input100 validate-input" data-validate="Email is required">
								<input class="input100" id="email" type="email" name="Email">
								<span class="focus-input100"></span>
								<span class="label-input100">Email</span>
							</div>
						</div>
					</div>
					
					
					<div class="form-row">
						<div class="col-md-6">
							<div class="wrap-input100 validate-input" data-validate="Phonenmber is required">
								<input class="input100" id="phone" type="phoneNumber" name="Phonenumber">
								<span class="focus-input100"></span>
								<span class="label-input100">Phone Number</span>
							</div>
						</div>
						<div class="col-md-6">
							<div class="wrap-input100 validate-input" data-validate="Password is required">
								<input class="input100" id="password" type="password" name="Password">
								<span class="focus-input100"></span>
								<span class="label-input100">Password</span>
							</div>
						</div>
					</div>
					
					
					
					<div class="form-row">
						<div class="col-md-12">
							<textarea rows="4" cols="55" id="address" placeholder="Enter your address here"></textarea>
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="form-row">
						<div class="col-md-12">
							<div class="container-login100-form-btn">
								<button class="login100-form-btn" type="submit" name="register">
									Register
								</button>
							</div>
						</div>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or register using
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</form>

				<div class="register-more" style="background-image: url('images/login-bg.jpg');">
				</div>
			</div>
		</div>
	</div>
	

    <script type="text/javascript" src="{{app.assets}}/assets/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="{{app.assets}}/assets/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@1.5.4/src/loadingoverlay.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@1.5.4/extras/loadingoverlay_progress/loadingoverlay_progress.min.js" type="text/javascript"></script>
    <script src="{{app.assets}}/assets/js/iziToast.js?{{app.time}}"></script>
    <script src="{{app.assets}}/assets/js/ogwugofood/iziwrapper.js?{{app.time}}"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="{{app.assets}}/assets/js/ogwugofood/login.js?{{app.time}}"></script>
    <script type="text/javascript" src="{{app.assets}}/assets/js/app.js"></script>
	<script src="./js/registration.js"></script>
</body>

</html>