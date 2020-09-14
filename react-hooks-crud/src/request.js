//const backendApiUrl = "https://morning-hollows-26967.herokuapp.com/api";
// const backendApiUrl = "https://5f5f5e42df620f00163e599c.mockapi.io/api";
const backendApiUrl = "http://localhost:8080/api";

export class RequestService {
  get = async (uri) => {
    const options = {
      method: "GET",
    };
    const request = new Request(backendApiUrl + uri, options);
    const response = await fetch(request);
    return await response.json();
  };
}
