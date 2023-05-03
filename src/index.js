window.onload = () => {
  document.getElementById("suggest").onclick = () => {
  YaAuthSuggest.init({
         client_id: "cdc84ba8cb97478a9519f7f2aadee334", 
         response_type: "token",
         redirect_uri: "https://oauth-master-class-one.vercel.app/token.html"
      },
      "https://oauth-master-class-one.vercel.app/"
   )
   .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
      };
