// export default function authHeader() {
//     const user = JSON.parse(localStorage.getItem('user'));
  
//     if (user && user.accessToken) {
//       return { Authorization: 'Bearer ' + user.accessToken };
//     } else {
//       return {};
//     }
//   }

// For node js app auth we use x-access-token

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
}