import Header from "@/components/header/Header";

const HomeLoading = () => {
  return (
    <main>
      <Header />
      <div className="py-3 px-46 mr-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
          return (
            <div
              key={item}
              className="animate-pulse bg-gray-200 rounded-lg m-2 w-64 h-64 overflow-hidden cursor-pointer"
            />
          );
        })}
      </div>
    </main>
  );
};

export default HomeLoading;
