import axios from "axios";

const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";

const api = axios.create({ baseURL: baseUrl });

export function getBeers() {
  return api.get("/");
}

export function getBeerById(beerId) {
  return api.get(`/${beerId}`);
}

export function getRandomBeer() {
  return api.get("/random");
}

export function searchBeer(query) {
  return api.get(`/search?q=${query}`);
}

export function createBeer(beer) {
  return api.post("/new", beer);
}
