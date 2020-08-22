import http from "./Axios";

class AuthenticateService {
  signin(data: any) {
    return http.post("/auth/login", data);
  }
}

export default new AuthenticateService();
