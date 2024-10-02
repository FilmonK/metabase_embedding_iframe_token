# Iframe token expiration
This is a simple app to see how iframes with JWT handle re-render/refreshes. This is not meant to be considered best practice or production, but rather what 
happens in certain scenarios where iframes are refreshed and make calls to existing urls with expired tokens.


## Table of Contents
* [Technologies Used](#technologies-used)
* [Workflows](#workflows)
* [Screenshots and Recordings](#screenshots-recordings)


## Technologies Used
- Metabase
- Vite
- React
- NodeJS
- Express
- Jsonwebtoken

## Workflows
A call to the backend (node) is made to generate a JWT with a designated expiration. This token is stored in state within the React app and included in a url to be used by the iframe.
You should be able to use the embedded Metabase instance with no issue at this time. 

There's a button that will toggle the visibility of the iframe causing a re-render. You can toggle the iframe within the expiration period of the generated JWT, however, toggling 
outside of this period will indicate a token expiration due to referencing the iframe url with the expired token.

## Screenshots and Recordings
[Screen Recording](https://github.com/FilmonK/metabase_embedding_iframe_token/blob/main/readme_images/iframe_embed.mp4)

<br>
<br>

![alt text](https://github.com/FilmonK/metabase_embedding_iframe_token/blob/main/readme_images/dash1.png?raw=true)

<br>
<br>

![alt text](https://github.com/FilmonK/metabase_embedding_iframe_token/blob/main/readme_images/dash2.png?raw=true)

