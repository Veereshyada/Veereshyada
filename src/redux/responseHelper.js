import OAuth from 'oauth-1.0a'

var Account_id = '6991251_SB1'
var token = {
    public: '909ed22eab801b44eccdc1ad64b26f587b710f86f2eb134980944405654a23eb',
    secret: '0dfe5f1eb8e72da20b1ad8276157ad1879af8ae94d2d3b67a91b21c1d77677ff'
}

var consumer = {
    public: 'ed2917dd0986577602a8d16f6bdf3e4e2f2de514013592555ab3aa55f65333d7',
    secret: 'da881699f445e484fc43d03eb96ee08b3ab6bd84234eb425a6fd93dadfb308d5'
};

var restlet_url = 'https://6991251-sb1.restlets.api.netsuite.com/app/site/hosting/restlet.nl?';

//SET UP THE OAUTH OBJECT
var oauth = OAuth({
    consumer: consumer,
    signature_method: 'HMAC-SHA256'
});

//SET UP THE REQUEST OBJECT
// var request_data = {
//     url: restlet_url,
//     method: 'GET',
// };

//GET THE AUTHORIZATION AND STICK IT IN THE HEADER, ALONG WITH THE REALM AND CONTENT-TYPE
// var authorization = oauth.authorize(request_data, token);
// var header = oauth.toHeader(authorization);
// header.Authorization += ', realm="' + Account_id + '"';
// header['content-type'] = 'application/json';

//MAKE THE REQUEST
// fetch(request_data.url,{
//         method: request_data.method,
//         headers: header
//     }).then((res)=> { return res.json()}).then((result)=>{
//         console.log("the result of the api ====>", result)
//         return result;
//     })
//     .catch((err)=>console.log("the error of request===>", err))

    //Login Api Response
    export const LOGIN = async(url, data2) => {
        try{
            const data = await fetch(restlet_url+url, {
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':`NLAuth nlauth_account=6991251_SB1, nlauth_email=${data2.userEmail}, nlauth_signature=${data2.userPassword}, nlauth_role=1039`
                }
            }).then(response => {
                return response.json();
            }).then(result=>{return result})
            .catch(err => {
                console.log("the error ====>", err)
            })
            return data;
        }catch(error){
            console.log("the error through login====>", error)
        }
    }

    //Get api Response
    export const GET = async getUrl => {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'GET',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';
        try{
        const data = await fetch(request_data.url,{
        method: request_data.method,
        headers: header
        })
          .then(response => {
            return response.json();
          })
          .catch(err => {
            console.log("The error in get api===>",err);
          });
        return data;
      }catch(e){
        console.log('response get error===>',e)
      }
    };

    //Get project api response
    export const GET_PROJECT = async(getUrl)=> {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'GET',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';

        try{
            const data = await fetch(request_data.url,{
            method: request_data.method,
            headers: header
            })
              .then(response => {
                return response.json();
              })
              .catch(err => {
                console.log("THe error in get project api===>",err);
              });
            return data;
        }catch(e){
            console.log('response get error===>',e)
        }
    }

    //Get project task api response
    export const GET_PROJECT_TASK = async(getUrl)=> {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'GET',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';

        try{
            const data = await fetch(request_data.url,{
            method: request_data.method,
            headers: header
            })
              .then(response => {
                return response.json();
              })
              .catch(err => {
                console.log("the error in get project task api===>",err);
              });
            return data;
        }catch(e){
            console.log('response get error===>',e)
        }
    }

    //Get timesheet api response
    export const GET_TIMESHEET = async(getUrl)=> {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'GET',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';

        try{
            const data = await fetch(request_data.url,{
            method: request_data.method,
            headers: header
            })
              .then(response => {
                return response.json();
              })
              .catch(err => {
                console.log("the get timesheet api ====>",err);
              });
            return data;
        }catch(e){
            console.log('response get error===>',e)
        }
    }

    //Get timeoff api response
    export const GET_TIMEOFFAPI = async(getUrl)=> {
      var request_data = {
          url: restlet_url+getUrl,
          method: 'GET',
      };
      var authorization = oauth.authorize(request_data, token);
      var header = oauth.toHeader(authorization);
      header.Authorization += ', realm="' + Account_id + '"';
      header['content-type'] = 'application/json';

      try{
          const data = await fetch(request_data.url,{
          method: request_data.method,
          headers: header
          })
            .then(response => {
              return response.json();
            })
            .catch(err => {
              console.log("The error in get timeoff api====>",err);
            });
          return data;
      }catch(e){
          console.log('response get error===>',e)
      }
    }

    //Get company list api response
    export const GET_COMPANY_LIST = async(getUrl)=> {
      var request_data = {
          url: restlet_url+getUrl,
          method: 'GET',
      };
      var authorization = oauth.authorize(request_data, token);
      var header = oauth.toHeader(authorization);
      header.Authorization += ', realm="' + Account_id + '"';
      header['content-type'] = 'application/json';

      try{
          const data = await fetch(request_data.url,{
          method: request_data.method,
          headers: header
          })
            .then(response => {
              return response.json();
            })
            .catch(err => {
              console.log("the error in get company list====>",err);
            });
          return data;
      }catch(e){
          console.log('response get error===>',e)
      }
    }

    //Get POLICY list api response
    export const GET_POLICY_LIST = async(getUrl)=> {
      var request_data = {
          url: restlet_url+getUrl,
          method: 'GET',
      };
      var authorization = oauth.authorize(request_data, token);
      var header = oauth.toHeader(authorization);
      header.Authorization += ', realm="' + Account_id + '"';
      header['content-type'] = 'application/json';

      try{
          const data = await fetch(request_data.url,{
          method: request_data.method,
          headers: header
          })
            .then(response => {
              return response.json();
            })
            .catch(err => {
              console.log("the error in get POLICY list====>",err);
            });
          return data;
      }catch(e){
          console.log('response get error in policy api===>',e)
      }
    }

    // GET PROJECT LIST API
    export const GET_ALL_PROJECT = async(getUrl)=> {
      var request_data = {
          url: restlet_url+getUrl,
          method: 'GET',
      };
      var authorization = oauth.authorize(request_data, token);
      var header = oauth.toHeader(authorization);
      header.Authorization += ', realm="' + Account_id + '"';
      header['content-type'] = 'application/json';

      try{
          const data = await fetch(request_data.url,{
          method: request_data.method,
          headers: header
          })
            .then(response => {
              return response.json();
            })
            .catch(err => {
              console.log("The error in get all project====>",err);
            });
          return data;
      }catch(e){
          console.log('response get error===>',e)
      }
    }

//POST API

    //Post post_employee api response
    export const POST_EMPLOYEE = async(getUrl, bodyData)=> {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'POST',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';

        try{
            const data = await fetch(request_data.url,{
            method: request_data.method,
            headers: header,
            body: JSON.stringify(bodyData)
            })
              .then(response => {
                return response.json();
              }).then(result=>{
                  return result
                })
              .catch(err => {
                console.log("The error in post employee===>",err);
              });
            return data;
        }catch(e){
            console.log('response post employee error===>',e)
        }
    }

    //POST ADD NEW PROJECT API
    export const POST_ADDING_PROJECT = async(getUrl, bodyData)=> {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'POST',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';

        try{
            const data = await fetch(request_data.url,{
            method: request_data.method,
            headers: header,
            body: JSON.stringify(bodyData)
            })
              .then(response => {
                return response.json();
              }).then(result=>{
                  return result
                })
              .catch(err => {
                console.log("the error in post adding project===>",err);
              });
            return data;
        }catch(e){
            console.log('response post ADD PROJECT error===>',e)
        }
    }

    //POST ADD NEW TIME OFF API
    export const POST_ADD_TIMEOFF = async(getUrl, bodyData)=> {
        var request_data = {
            url: restlet_url+getUrl,
            method: 'POST',
        };
        var authorization = oauth.authorize(request_data, token);
        var header = oauth.toHeader(authorization);
        header.Authorization += ', realm="' + Account_id + '"';
        header['content-type'] = 'application/json';

        try{
            const data = await fetch(request_data.url,{
            method: request_data.method,
            headers: header,
            body: JSON.stringify(bodyData)
            })
              .then(response => {
                return response.json();
              }).then(result=>{
                  return result
                })
              .catch(err => {
                console.log("the error in post adding TIME OFF===>",err);
              });
            return data;
        }catch(e){
            console.log('response post ADD PROJECT error===>',e)
        }
    }