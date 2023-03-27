export async function fetchDataFromAPI(endpoint, param) {
  try {
    const response = await fetch(
      `https://api.datamuse.com/words?${endpoint}=${param}`
    );
    console.log(response);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.text();
      return JSON.parse(data);
    } else {
        console.log('The response is not in JSON format');
    }
  } catch (error) {
    console.log(error);
  }
}
