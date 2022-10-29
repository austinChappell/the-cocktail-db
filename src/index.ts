import axios from "axios";

import {AbbreviatedDrink, Drink, Ingredient} from "./types";

type Version = 1 | 2;
interface ConstructorArgs {
  apiKey: number;
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

  private readonly apiKey: number;
  private readonly version: number;

  private fetchDataFromService = async <T>(url: string) => {
    const baseUrl = `https://www.thecocktaildb.com/api/json/v${this.version}/${this.apiKey}`;

    const response = await axios.get<T>(`${baseUrl}/${url}`);

    return response.data;
  }

  // List
  listAlcoholFilters = async () => {
    return this.fetchDataFromService<{ drinks: Pick<Drink, 'strAlcoholic'>[] }>('/list.php?a=list')
  }

  listCategoryFilters = async () => {
    return this.fetchDataFromService<{ drinks: Pick<Drink, 'strCategory'>[] }>('/list.php?c=list')
  }

  listGlassFilters = async () => {
    return this.fetchDataFromService<{ drinks: Pick<Drink, 'strGlass'>[] }>('/list.php?g=list')
  }

  listIngredientFilters = async () => {
    return this.fetchDataFromService<{ drinks: Pick<Drink, 'strIngredient1'>[] }>('/list.php?i=list')
  }

  // Filter
  filterCocktailsByAlcoholic = async (alcoholicFilter: string) => {
    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] | null }>(`/filter.php?a=${alcoholicFilter}`)
  }

  filterCocktailsByCategory = async (category: string) => {
    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] | null }>(`/filter.php?c=${category}`)
  }

  filterCocktailsByGlass = async (glass: string) => {
    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] | null }>(`/filter.php?g=${glass}`)
  }

  filterCocktailsByIngredient = async (ingredient: string) => {
    const encodedIngredientName = encodeURIComponent(ingredient);

    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] | null }>(`/filter.php?i=${encodedIngredientName}`)
  }

  filterCocktailsByMultipleIngredients = async (ingredients: string[]) => {
    const encodedIngredientNames = encodeURIComponent(ingredients.join(','));

    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] | null }>(`/filter.php?i=${encodedIngredientNames}`)
  }

  // Misc
  latestCocktails = async () => {
    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] }>('/latest.php')
  }

  popularCocktails = async () => {
    return this.fetchDataFromService<{ drinks: AbbreviatedDrink[] }>('/popular.php')
  }

  // Lookup
  lookupCocktailById = async (id: number) => {
    return this.fetchDataFromService<{ drinks: Drink[] | null }>(`/lookup.php?i=${id}`)
  }

  lookupIngredientById = async (id: number) => {
    return this.fetchDataFromService<{ ingredients: Ingredient[] | null }>(`/lookup.php?iid=${id}`)
  }

  // Random
  randomCocktail = async () => {
    return this.fetchDataFromService<{ drinks: Drink[] }>('/random.php')
  }

  randomSelectionOfCocktails = async () => {
    return this.fetchDataFromService<{ drinks: Drink[] }>('/randomselection.php')
  }

  // Search
  searchCocktailsByFirstLetter = async (firstLetter: string) => {
    const encodedFirstLetter = encodeURIComponent(firstLetter);

    return this.fetchDataFromService<{ drinks: Drink[] | null }>(`/search.php?f=${encodedFirstLetter}`)
  }

  searchCocktailsByName = async (searchTerm: string) => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    return this.fetchDataFromService<{ drinks: Drink[] | null }>(`/search.php?s=${encodedSearchTerm}`)
  }

  searchIngredientsByName = async (searchTerm: string) => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    return this.fetchDataFromService<{ ingredients: Ingredient[] | null }>(`/search.php?i=${encodedSearchTerm}`)
  }
}
