const ListHeader = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-4  bg-gray-100 p-3 rounded-md border-t border-b border-gray-300">
          <div className="hidden lg:block col-span-1">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 lg:mr-4" />{" "}
              <div className="hidden lg:block text-base font-normal text-blue-600">
                Aday
              </div>
            </div>
          </div>
          <div className="hidden lg:block col-span- text-base font-normal text-blue-600">
            <div className="hero">Meslek/Eğitim Bilgisi</div>
          </div>
          <div className="hidden lg:block col-span-1 text-base font-normal text-blue-600">
            <div className="hero">Çalışma Bilgileri</div>
          </div>
          <div className="hidden lg:block col-span-1 text-base font-normal text-blue-600 text-center">
            <div className="hero">İşlemler</div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 lg:grid-cols-4  bg-gray-200 p-3 rounded-md border-t border-b border-gray-300">
          <div className=" col-span-1">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 lg:mr-4" />{" "}
              <div className=" text-base font-normal text-blue-600">
                Başvurular
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListHeader;
