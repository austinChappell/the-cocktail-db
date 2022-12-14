export interface Drink extends AbbreviatedDrink {
  "strInstructionsZH-HANS": null;
  "strInstructionsZH-HANT": null;
  dateModified: string | null;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrinkAlternate: null;
  strGlass: string;
  strIBA: string | null;
  strImageAttribution: string | null;
  strImageSource: string | null;
  strIngredient10: null;
  strIngredient11: null;
  strIngredient12: null;
  strIngredient13: null;
  strIngredient14: null;
  strIngredient15: null;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: null;
  strIngredient9: null;
  strInstructions: string;
  strInstructionsDE: string | null;
  strInstructionsES: null;
  strInstructionsFR: null;
  strInstructionsIT: string;
  strMeasure10: null;
  strMeasure11: null;
  strMeasure12: null;
  strMeasure13: null;
  strMeasure14: null;
  strMeasure15: null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: null;
  strMeasure9: null;
  strTags: string | null;
  strVideo: null;
}

export interface AbbreviatedDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface Ingredient {
  idIngredient:   string;
  strABV:         string;
  strAlcohol:     string;
  strDescription: string;
  strIngredient:  string;
  strType:        string;
}
