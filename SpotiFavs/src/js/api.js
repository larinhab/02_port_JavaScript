// import { Headers } from "./undici-types"

export const clientId = 'dd61a9105e4d49b49b7b8f076ebdf289'
export const clientSecret = 'e64ed3944c8a41a49b4240eecf905ba4'
export const redirectUrl = 'http://localhost:3000'
export const authURL = 'https://accounts.spotify.com/authorize'
export const tokenURL = 'https://accounts.spotify.com/api/token'
const runBtn = document.querySelector('.start', '.return')

export function authorizeSpotify() {
    const scope = 'user-top-read';
    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = authorizationUrl;
}

authorizeSpotify()

// ENDPOINTS - ARTISTS AND TRACKS
export async function getAccessToken() {
    const credentials = `${clientId}:${clientSecret}`;
    const encodedCredentials = btoa(credentials)
  
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
  
      body: 'grant_type=client_credentials',
    });
  
  
    const data = await response.json()
    console.log(data);
    return data.access_token;
  }
  

export async function getSpotifyProfile() {
    const accessToken = await getAccessToken()
    const searchInput = document.getElementById('search-input')
    const userId = ''
  
        const result =  await `https://api.spotify.com/v1/users/${userId} `
       //const resultProfile = 
       fetch(`${result}`, {
           method: 'GET',
           headers: {
               'Authorization': `Bearer ${accessToken}`
            }}) 
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
}
