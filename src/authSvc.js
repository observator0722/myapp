export const fakeAuthProvider = {
  isAuthenticated: () => {
    return !!localStorage.getItem("username")
  },
  signin: async (username) => {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    
    localStorage.setItem("username", username)
  },
  signout: async () => {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    localStorage.removeItem("username")
  },
};
