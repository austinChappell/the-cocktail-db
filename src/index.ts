import axios from "axios";

import { Drink } from "./types";

type Version = 1;
interface ConstructorArgs {
  apiKey: string;
  version: Version;
}

export class CocktailDbApi {
  constructor({
    apiKey,
    version,
  }: ConstructorArgs) {
    if (version !== 1) {
      throw new Error('Unsupported version number. The supported version number is: 1');
    }

    if (!apiKey) {
      throw new Error('API key required.')
    }

    this.apiKey = apiKey;
    this.version = version;
  }

  private readonly apiKey: string;
  private readonly version: number;

  private fetchDataFromService = async <T>(url: string) => {
    const baseUrl = `https://www.thecocktaildb.com/api/json/v${this.version}/${this.apiKey}`;

    return axios.get<T>(`${baseUrl}/${url}`);
  }

  searchCocktailsByName = async (searchTerm: string) => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    return this.fetchDataFromService<{ drinks: Drink[] }>(`/search.php?s=${encodedSearchTerm}`)
  }
}
