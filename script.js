const foodWrapper = document.getElementById('food-wrapper');

const buildCard = (recipe) => {
  const wrapper = document.createElement("a");
  wrapper.setAttribute("class", "recipe-wrapper");
  wrapper.href = "./recipe.html?recipeId=" + recipe.id;

  const image = document.createElement("img");
  image.setAttribute("class", "recipe-image");
  image.src = recipe.img_url;

  const title = document.createElement("h1");
  title.innerHTML = recipe.title;

  const description = document.createElement("p");
  description.innerHTML = recipe.description;

  wrapper.append(image);
  wrapper.append(title);
  wrapper.append(description);

  return wrapper;
};

const getAllFood = async () => {
  const response = await fetch(
    "https://64e2f2b5bac46e480e77f31c.mockapi.io/food"
  );
  const food = await response.json();

  food
    .sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    })
    .forEach((recipe) => {
      const card = buildCard(recipe);
      foodWrapper.append(card);
    });
};

getAllFood();

