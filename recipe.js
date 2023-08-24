const RECIPES_URL = "https://64e2f2b5bac46e480e77f31c.mockapi.io/food/";

const deleteButton = document.getElementById("delete-button");

const url = new URL(window.location.href);
const recipeId = url.searchParams.get("recipeId");

const insertRecipeToScreen = (recipe) => {
  const title = document.getElementById("title");
  title.innerHTML = recipe.title;

  const description = document.getElementById("description");
  description.innerHTML = recipe.description;

  const instructions = document.getElementById("instructions");
  instructions.innerHTML = recipe.instructions;

  const recipeImage = document.getElementById("recipe-page-image");
  recipeImage.src = recipe.img_url;
};

const getRecipe = async () => {
  try {
    const response = await fetch(RECIPES_URL + recipeId);
    const recipe = await response.json();
    return recipe;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteRecipe = async () => {
  try {
    const response = await fetch(RECIPES_URL + recipeId, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const onRecipeDeleted = (data) => {
  const infoMessage = document.getElementById("info-message");
  if (data) {
    infoMessage.innerHTML = "Recipe was deleted";

    setTimeout(() => {
      window.location.replace("./index.html");
    }, 3000);
  } else {
    infoMessage.innerHTML = "Recipe was NOT deleted, please try later";
  }
};

const onClickDeleteButton = async () => {
  try {
    const response = await deleteRecipe();
    onRecipeDeleted(response);
  } catch (err) {
    console.log(err);
  }
};

deleteButton.addEventListener("click", onClickDeleteButton);

const displayRecipe = async () => {
  const recipe = await getRecipe();
  recipe && insertRecipeToScreen(recipe);
};

displayRecipe();
