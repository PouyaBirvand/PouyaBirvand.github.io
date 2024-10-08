function Products() {
  return (
    <div className="flex justify-between items-center shadow-md mt-[2.5rem] bg-warm-wood bg-opacity-60 rounded-[50rem] py-1 px-3 mx-auto w-[70%] md:w-[75%] max-w-md overflow-scroll gap-[0.5rem]">
      <img
        src="/public/assets/images/ph_ice-cream-light.png"
        alt="iceCream"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src="/public/assets/images/hugeicons_drink.png"
        alt="Drinks"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src="/public/assets/images/hugeicons_soft-drink-01.png"
        alt="icePack"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
      <img
        src="/public/assets/images/ph_coffee-light.png"
        alt="Coffes"
        className="hover:bg-deep-mahogany p-2  rounded-full transition duration-300 bg-deep-mahogany cursor-pointer"
      />
      <img
        src="/public/assets/images/fluent_food-pizza-20-regular.png"
        alt="Pizzas"
        className="hover:bg-deep-mahogany p-2 rounded-full transition duration-300 cursor-pointer bg-custom-2 bg-opacity-50 backdrop-filter backdrop-blur-sm"
      />
    </div>
  );
}

export default Products;
