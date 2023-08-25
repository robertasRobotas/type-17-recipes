const recipeFormButton = document.getElementById("recipe-button");


const getRecipeObject = () => {
  const urlRegex =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

  const recipeTitle = document.getElementById("recipe-title").value;
  const recipeDescription = document.getElementById("recipe-description").value;
  const recipeInstructions = document.getElementById(
    "recipe-instructions"
  ).value;
  const recipeImage = document.getElementById("recipe-image").value;

  if (!recipeTitle) {
    throw new Error("Input is empty");
  }

  if (!recipeDescription) {
    throw new Error("Input is empty");
  }

  if (!recipeInstructions) {
    throw new Error("Input is empty");
  }

  if (!recipeImage) {
    throw new Error("Input is empty");
  }

  if (!urlRegex.test(recipeImage)) {
    throw new Error("Bad Link");
  }


  const recipe = {
    title: recipeTitle,
    description: recipeDescription,
    instructions: recipeInstructions,
    ingridients: [],
    img_url: recipeImage,
  };

  return recipe;
};

const insertRecipe = async (recipe) => {
  try {
    const response = await fetch(
      "https://64e2f2b5bac46e480e77f31c.mockapi.io/food",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const onRecipeInserted = (data) => {
  const messageWrapper = document.getElementById("response-message");

  if (data) {
    messageWrapper.innerHTML = "Recipe was inserted";
    setTimeout(() => {
      window.location.replace("./index.html");
    }, 3000);
  } else {
    console.log("err", err);
    messageWrapper.innerHTML = "Recipe was NOT inserted, ERROR happend";
  }
};

recipeFormButton.addEventListener("click", async () => {
  const recipe = getRecipeObject();
  const data = await insertRecipe(recipe);
  onRecipeInserted(data);
});










