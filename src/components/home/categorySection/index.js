import React from "react";

const CategorySection = () => {
  return (
    <div className="container p-8 my-2 h-max w-full">
      <p className="w-full text-xl lg:text-3xl text-center">Shop By Category</p>
      <div className="flex justify-center item-center lg:px-32 w-full">
        <div className="py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-full w-full">
          <div className="h-96 md:h-full  w-full">
            <div className="w-full h-full object-cover overflow-hidden">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1683&q=80" />
            </div>
          </div>
          <div className="h-96 md:h-full grid grid-cols-2 gap-4 w-full">
            <div className="grid grid-rows-2 gap-4 w-full">
              <div className="h-full w-full  object-cover overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1683&q=80" />
              </div>
              <div className="h-full w-full object-cover overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1683&q=80" />
              </div>
            </div>
            <div className="h-full w-full object-cover overflow-hidden bg-silver">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
