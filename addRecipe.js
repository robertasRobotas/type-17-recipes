const recipeFormButton = document.getElementById("recipe-button");

recipeFormButton.addEventListener("click", async()=>{
    const recipeTitle = document.getElementById('recipe-title').value;
    const recipeDescription = document.getElementById('recipe-description').value;
    const recipeInstructions = document.getElementById('recipe-instructions').value;
    const recipeImage = document.getElementById('recipe-image').value;


    const recipe = {
        title: recipeTitle,
        description: recipeDescription,
        instructions: recipeInstructions,
        ingridients: [],
        img_url: recipeImage
    }

    try{

        const response = await fetch('https://64e2f2b5bac46e480e77f31c.mockapi.io/food', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });

        const data = await response.json();

        if(data){

            const messageWrapper = document.getElementById("response-message");
            messageWrapper.innerHTML = "Recipe was inserted"

            setTimeout(()=>{
                window.location.replace("./index.html");
            },3000)

        }

    }catch(err){
        console.log('err',err)
        const messageWrapper = document.getElementById("response-message");
        messageWrapper.innerHTML = "Recipe was NOT inserted, ERROR happend"
    }

})