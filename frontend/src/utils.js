const domain = "ai-chess.cdauis68qu3i.us-east-2.rds.amazonaws.com";

export const login = (credential) => {
  const loginUrl = `${domain}/login`;
  const requestStatus = fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });

  return requestStatus.then((response) => {
    if (response.status >= 300) {
      throw Error("Fail to log in.");
    }

    return response.json();
  });
};

export const register = (credential) => {
  const registerUrl = `${domain}/register`;
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status >= 300) {
      throw Error("Fail to register.");
    }
    return response.json();
  });
};

export const logout = () => {
  const logoutUrl = `${domain}/logout`;
  return fetch(logoutUrl, {
    method: "POST",
    credentials: "include",
  }).then((response) => {
    if (response.status >= 300) {
      throw Error("Fail to log out.");
    }
    return response.json();
  });
};

// export const startGame = (playerInfo) => {
//   const startGameUrl = `${domain}/startGame`;
//   return fetch(startGameUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(playerInfo),
//   }).then((response) => {
//     if (response.status >= 300) {
//       throw Error("Fail to start game.");
//     }
//     // Handle cases with no response body
//     if (
//       response.status === 204 ||
//       response.headers.get("Content-Length") === "0"
//     ) {
//       return {}; // Optional: return an empty object
//     }
//     return response.json();
//   });
// };

// export const makeMove = (playerMove) => {
//   const makeMoveUrl = `${domain}/makeMove`;
//   return fetch(makeMoveUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(playerMove),
//   }).then((response) => {
//     if (response.status >= 300) {
//       throw Error("Failed to process the move.");
//     }
//     return response.json(); // Expect AI's move in response
//   });
// };

// export const quitGame = () => {
//   const quitGameUrl = `${domain}/quitGame`;
//   return fetch(quitGameUrl, {
//     method: "POST",
//   }).then((response) => {
//     if (response.status >= 300) {
//       throw Error("Failed to quit the game.");
//     }
//     return response.json();
//   });
// };

// export const undoMove = () => {
//   const undoMoveUrl = `${domain}/undoMove`;
//   return fetch(undoMoveUrl, {
//     method: "POST",
//   }).then((response) => {
//     if (response.status >= 300) {
//       throw Error("Failed to undo the move.");
//     }
//     return response.json();
//   });
// };
