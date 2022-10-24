# The Cocktail DB

Unofficial API library for [the cocktail db API](https://thecocktaildb.com/api.php)

## Install

```bash
npm install the-cocktail-db
```

or

```bash
yarn add the-cocktail-db
```

## Example

```ts
import {CocktailDbApi} from 'the-cocktail-db';

const cocktailDbApi = new CocktailDbApi({
  apiKey: process.env.COCKTAIL_DB_API_KEY,
  version: 1,
});

cocktailDbApi.searchCocktailsByName('margarita');
```

## Methods

| Method Name                  | Description                                | Argument                |
|------------------------------|--------------------------------------------|-------------------------|
| listAlcoholFilters           | list all alcoholic filters                 |                         |
| listCategoryFilters          | list all category filters                  |                         |
| listGlassFilters             | list all glass filters                     |                         |
| listIngredientFilters        | list all ingredient filters                ||
| filterCocktailsByAlcoholic   | list cocktails filtered by alcoholic value | alcoholicFilter: string |
| filterCocktailsByCategory    | list cocktails filtered by category        | category: string        |
| filterCocktailsByGlass       | list cocktails filtered by glass           | glass: string           |
| filterCocktailsByIngredient  | list cocktails filtered by ingredient      | ingredient: string      |
| filterCocktailsByIngredients | list cocktails filtered by ingredients     | ingredients: string[]   |
| latestCocktails | list latest cocktails                      ||
| popularCocktails | list popular cocktails                     ||
| lookupCocktailById | get one cocktail                           | id: number              |
| lookupIngredientById | get one ingredient                         | id: number              |
| randomCocktail | get a random cocktail                      ||
| randomSelectionOfCocktails | get a random selection of cocktail         ||
| searchCocktailsByFirstLetter | get cocktails starting with a letter       | firstLetter: string     |
| searchCocktailsByName | get cocktails containing a name            | searchTerm: string      |
| searchIngredientsByName | get ingredients containing a name          | searchTerm: string                        |
