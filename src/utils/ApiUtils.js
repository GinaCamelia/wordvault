export async function fetchDataFromAPI(endpoints, params) {
  try {
    const queries = endpoints.map((endpoint, index) => `${endpoint}=${params[index]}`).join('&');
    const response = await fetch(`https://api.datamuse.com/words?${queries}`);
    const data = await response.text();
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}
