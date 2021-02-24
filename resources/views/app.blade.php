<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
        .wrapper {
            display: flex;
            height: 100%;
            width: 100%;
            position: fixed;


        }
        .nav {
            width: 65px;
            background-color: #202631;
            height: 100%;
            align-items: stretch;
        }

        .nav-link img{
            width: 30px;
            height: 30px;
        }

        .nav-link{
            display: flex;
            width: 40px;
            height: 40px;
            margin: 15%;
        }
        .nav-link:active{
            color: white;
        }
        .wrapper.button{
            color: blue;
        }
        .navbar{
            border-right:solid 2px;
            border-color:#878A8F;
            background-color: #F7FAFF;
            width: 150px;
            height: 100%;
            margin-left: -16px;

        }
        .nav-item{
         margin-top: 10px;
         color:grey;

        }

        .row.BoxHeader{
            height: 150px;
            border-bottom: solid 2px;
            border-color: #878A8F;
        }
        .row.box-description{
            width: 90%;

        }

        .col{
            /* height: 143px;
            border-bottom: solid 2px;
            width: 500px; */
        }
        .pill .active{
            background-color: white;
        }
        .col-2{


    }
        /* .container-img{
            width: 50em;
            border:solid 1px;
        } */
        .container-img img{
            height: 105px;
            width: 100px;
            margin-left: 54px;
            margin-right: 54px;
        }
        .para{

            font-size: 60px;
            border-radius: solid 2px;
            margin-left: -120px;
            margin-bottom: 10px;
            font-family: sans-serif;
        }
        .cont{

        }

        .wrapper2{
            height: 84%;
            width: 96%;
        }
        .header{
            margin-top: 20px;
            margin-left: 54px;
            margin-right: 50%;
        }
        .header2{
            margin-top: 20px;
            margin-left: 54px;
            font-size: 30px;
        }

        .panel{
            border-top:1px solid;
            border-color: #878A8F;
            margin-left: 54px;
            margin-right: 5%;
        }
        .scrollable{
            overflow-y: scroll;
        }
        .title{

            color:blue;
            text-decoration: none;
            font-size: 18px;
        }

        .question{
            margin-top: 7px;
        }
        .questionContainer{

        }
        .col-6.questionBox{
            height: 100%;
        }
        </style>
    </head>
    <body>
            <div id="root">
            </div>

    </body>
    <script type="text/javascript" src="js/app.js"></script>
</html>
