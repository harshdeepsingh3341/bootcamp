$(document).ready(function () {
    

});

$(window).on('click',() => {
    initClient();
    console.log(GoogleAuth);
})

var GoogleAuth;

function initClient() {
    gapi.client.init({
        'apiKey': '_FhkGHkAbqUfi3I6LbpibkBn',
        'clientId': '1073809220588-dam68t5d9hkc351gp70qki6o56rqqjrd.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
  
        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
  }