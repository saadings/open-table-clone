import Header from "@/components/header/Header";
import RestaurantCard from "@/components/restaurant-card/RestaurantCard";
import { PrismaClient, Cuisine, Location, Price, Review } from "@prisma/client";

export interface RestaurantCardType {
  id: string;
  name: string;
  mainImage: string;
  cuisine: Cuisine;
  slug: string;
  location: Location;
  price: Price;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      mainImage: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });

  return restaurants;
};

const Home = async () => {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
};

export default Home;
