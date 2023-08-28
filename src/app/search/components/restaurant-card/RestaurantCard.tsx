import PriceDetail from "@/components/price-detail/PriceDetail";
import { Cuisine, Location, Price } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  mainImage: string;
  price: Price;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className="border-b flex pb-5 ">
      <img src={restaurant.mainImage} alt="" className="w-44 rounded h-36" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <PriceDetail price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
