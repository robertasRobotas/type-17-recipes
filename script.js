const foodWrapper = document.getElementById('food-wrapper');


const getAllFood = async()=>{
    const response = await fetch('https://64e2f2b5bac46e480e77f31c.mockapi.io/food');
    const food = await response.json();

    food.forEach((recipe) => {

        const wrapper = document.createElement("a");
        wrapper.setAttribute("class", "recipe-wrapper");
        wrapper.href = "./recipe.html";
        wrapper.addEventListener("click", () => {
          localStorage.setItem("recipeId", recipe.id);
        });

        const image = document.createElement("img");
        image.setAttribute("class", "recipe-image");
        image.src = recipe.img_url;

        const title = document.createElement('h1');
        title.innerHTML = recipe.title;

        const description = document.createElement('p');
        description.innerHTML = recipe.description;

        wrapper.append(image);
        wrapper.append(title);
        wrapper.append(description);

        // wrapper.append(image, title, description)

        foodWrapper.append(wrapper);

    })
}


getAllFood();

