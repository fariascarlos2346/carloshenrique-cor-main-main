function getProjects(){
   const urlGitHub = 'https://www.linkedin.com/in/carlos-henrique-da-silva-farias/'

   fetch(urlGitHub, {
      method: 'GET'
   })
      .then((response) => response.json())
      .then((response) => {
         console.log(response)
      })
      .catch((e) => {
         console.log(e)
      })
}

getProjects()