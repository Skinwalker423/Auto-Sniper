export const fetchCars = async () => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST!,
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
