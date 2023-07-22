import { CarProps } from "@/types";

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

export const calculateCarRent = (
  city_mpg: number,
  year: number
) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate =
    (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay =
    basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (
  car: CarProps,
  angle?: string
) => {
  const url = new URL(
    "https://cdn.imagin.studio/car-image-api"
  );

  const { make, year, model } = car;

  url.searchParams.append(
    "customer",
    "hrjavascript-mastery"
  );
  url.searchParams.append("make", make);
  url.searchParams.append(
    "modelFamily",
    model.split(" ")[0]
  );
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
