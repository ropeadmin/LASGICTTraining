export function getAuthSession() {
  const cookies = document.cookie.split('; ');
  const authCookie = cookies.find(cookie => cookie.startsWith('authData='));
  
  if (authCookie) {
    const authData = JSON.parse(authCookie.split('=')[1]);
    return authData.sessionToken;  // return session token if it exists
  }
  return null;
}