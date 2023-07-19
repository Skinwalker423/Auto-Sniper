import {
  Hero,
  SearchBar,
  CustomFilter,
} from "@/components";
import CarCard from "@/components/CarCard";
import { CarCardProps } from "@/types";
import { fetchCars } from "@/utils";
import { carsData } from "../data/cars";

export default async function Home() {
  const allCars =
    process.env.NODE_ENV === "production"
      ? await fetchCars()
      : carsData;

  const isCarsDataEmpty =
    !Array.isArray(allCars) ||
    !allCars ||
    allCars.length === 0;

  console.log("fetch request for all cars", allCars);
  console.log("is cars data empty", isCarsDataEmpty);

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div
        className='mt-12 padding-x padding-y max-width'
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catelogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title={"fuel"} />
            <CustomFilter title={"year"} />
          </div>
        </div>
        <section></section>

        {isCarsDataEmpty ? (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              No results
            </h2>
            <p>{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => {
                return <CarCard car={car} />;
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
