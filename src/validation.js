export const validateInputForm = (
  recipeTitle,
  recipeDescription,
  recipeInstructions,
  recipeImage
) => {
  const urlRegex =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

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
};
