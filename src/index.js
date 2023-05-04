<!doctype html>
<html lang="ru">

<head>
<meta charSet="utf-8" />
<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, shrink-to-fit=no, viewport-fit=cover'>
<meta http-equiv='X-UA-Compatible' content='ie=edge'>
<style>
   html,
   body {
      background: #eee;
   }
</style>
<script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"></script>
</head>

<body>
   <script>
   window.onload = function() {
      window.YaAuthSuggest.init({
               client_id: 'cdc84ba8cb97478a9519f7f2aadee334',
                  response_type: 'token',
                  redirect_uri: 'https://oauth-master-class-one.vercel.app/token.html'
               },
               'https://oauth-master-class-one.vercel.app', {
                  view: 'button',
                  parentId: 'container',
                  buttonView: 'main',
                  buttonTheme: 'light',
                  buttonSize: 'm',
                  buttonBorderRadius: 0
               }
            )
            .then(function(result) {
               return result.handler()
            })
            .then(function(data) {
               console.log('Сообщение с токеном: ', data);
               document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
            })
            .catch(function(error) {
               console.log('Что-то пошло не так: ', error);
               document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
            });
      };
   </script>
</body>

</html>
