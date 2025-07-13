export function registerUser(name: string, email: string, password: string): boolean {
    const user = { name, email, password };
    localStorage.setItem("glorebd_user", JSON.stringify(user));
    localStorage.setItem("glorebd_isLoggedIn", "true");
    return true;
  }
  
  export function loginUser(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem("glorebd_user") || "{}");
    if (user.email === email && user.password === password) {
      localStorage.setItem("glorebd_isLoggedIn", "true");
      return true;
    }
    return false;
  }
  
  export function logoutUser() {
    localStorage.setItem("glorebd_isLoggedIn", "false");
  }
  
  export function isLoggedIn(): boolean {
    return localStorage.getItem("glorebd_isLoggedIn") === "true";
  }
  