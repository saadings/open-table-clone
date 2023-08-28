"use client";

const RestaurantError = ({ error }: { error: Error }) => {
  return <div>Restaurant Error: {error.message}</div>;
};

export default RestaurantError;
