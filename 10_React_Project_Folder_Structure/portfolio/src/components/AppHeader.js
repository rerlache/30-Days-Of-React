import { useState } from "react";

const AppHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
      <div className="flex justify-between items-center px-4 sm:px-0">
        <div>
          Robin Erlacher
        </div>
      </div>

    </div>
  );
};

export default AppHeader;
