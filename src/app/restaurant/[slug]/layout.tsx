import { Metadata } from "next";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Restaurants | OpenTableClone",
  description: "Open Table Clone",
};

const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
};

export default RestaurantLayout;
