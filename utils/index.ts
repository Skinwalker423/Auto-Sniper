export const fetchCars = async () => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "f056635fecmsh53c6d788cc340b3p1cb9c8jsn21854ddfd141",
      "X-RapidAPI-Host":
        "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
