<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
{{--     <title>@yield('title')</title>
 --}}    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/toastr.min.css') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app">
        <Headertodolist></Headertodolist>
        <div class="container" style="min-height: 87vh;">
            <router-view></router-view>
        </div>
        <Footertodolist></Footertodolist>
    </div>
    <script  type="text/javascript" src="{{ asset('assets/js/jquery.min.js') }}"></script>
    <script  type="text/javascript" src="{{ asset('assets/js/popper.min.js') }}"></script>
    <script  type="text/javascript" src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script  type="text/javascript" src="{{ asset('assets/js/toastr.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>
