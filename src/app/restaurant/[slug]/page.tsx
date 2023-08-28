import RestaurantNavBar from "./components/restaurant-nav-bar/RestaurantNavBar";
import Title from "./components/title/Title";
import Rating from "./components/rating/Rating";
import Description from "./components/description/Description";
import { PrismaClient, Review } from "@prisma/client";
import Images from "./components/images/Images";
import Reviews from "./components/reviews/Reviews";
import ReservationCard from "./components/reservation-card/ReservationCard";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface Restaurant {
  id: string;
  name: string;
  description: string;
  images: string[];
  slug: string;
  reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });

  if (!restaurant) {
    notFound();
    // throw new Error("Restaurant not found");
  }

  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
