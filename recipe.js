const recipeId = localStorage.getItem("recipeId");
const deleteButton = document.getElementById("delete-button");

const addRecipeToScreen = (recipe) => {
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
  const response = await fetch(
    "https://64e2f2b5bac46e480e77f31c.mockapi.io/food/" + recipeId
  );
  const recipe = await response.json();

  addRecipeToScreen(recipe);
};

getRecipe();

deleteButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://64e2f2b5bac46e480e77f31c.mockapi.io/food/" + recipeId,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data) {
      const infoMessage = document.getElementById("info-message");
      infoMessage.innerHTML = "Recipe was deleted";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 3000);
    }
  } catch (err) {
    console.log(err);
    const infoMessage = document.getElementById("info-message");
    infoMessage.innerHTML = "Recipe was NOT deleted, please try later";
  }
});
