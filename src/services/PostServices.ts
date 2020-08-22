import http from "./Axios";

class PostService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id: number) {
    return http.get(`/tutorials/${id}`);
  }

  create(data: any) {
    return http.post("/tutorials", data);
  }

  update(id: number, data: any) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/tutorials/${id}`);
  }
}

export default new PostService();
