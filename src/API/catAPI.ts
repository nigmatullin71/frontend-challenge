const API_KEY = "DEMO-API-KEY";
const BASE_URL = "https://api.thecatapi.com/v1";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
});

const requestOptions: RequestInit = {
  method: "GET",
  headers: headers,
};

export const fetchCats = async (page: number = 0, limit: number = 10) => {
  const url = `${BASE_URL}/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=${limit}`;
  
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Ошибка при загрузке котиков:", error);
    throw error;
  }
};
