import React from "react";

const ApplicationStatistics = () => {
  const statistics = {
    totalApplications: 4,
    newApplications: 0,
    selectedApplications: 0,
    applicationViews: 353,
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/4">
          <div className="item border  flex flex-col items-center p-4">
            <img
              src="https://isbul.net/frontend/images/svg/total-applications.svg"
              alt="Total Applications"
              className=""
            />
            <p className="text-base font-normal text-gray-700 mt-2 mb-2">
              Toplam Başvuru
            </p>
            <span className="text-xl font-bold text-true-gray-800">
              {statistics.totalApplications}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="item border flex flex-col items-center p-4">
            <img
              src="https://isbul.net/frontend/images/svg/new-application.svg"
              alt="New Applications"
            />
            <p className="text-base font-normal text-gray-700 mt-2 mb-2">
              Yeni Başvuru
            </p>
            <span className="text-xl font-bold text-true-gray-800">
              {statistics.newApplications}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="item border flex flex-col items-center p-4">
            <img
              src="https://isbul.net/frontend/images/svg/selected-application.svg"
              alt="Selected Applications"
            />
            <p className="text-base font-normal text-gray-700 mt-2 mb-2">
              Seçilen Başvuru
            </p>
            <span className="text-xl font-bold text-true-gray-800">
              {statistics.selectedApplications}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className=" border flex flex-col items-center p-4">
            <img
              src="https://isbul.net/frontend/images/svg/application-view.svg"
              alt="Application Views"
            />
            <p className="text-base font-normal text-gray-700 mt-2 mb-2">
              İlan Görüntüleme Sayısı
            </p>
            <span className="text-xl font-bold text-true-gray-800">
              {statistics.applicationViews}
            </span>
          </div>
        </div>
      </div>
      <div className="w-100  justify-items-stretch  border text-gray-700 hidden lg:grid flex-row p-3">
        <div className="justify-self-end">
          <div className="flex">
            <button className=" bg-orange-600 w-40 h-10 font-semibold px-10 text-white  py-2 rounded-md mr-2">
              Filtrele
            </button>
            <select className="bg-white border border-blue-500 rounded-md me-2 font-semibold px-5 text-blue-500 hover:border-blue-500">
              <option value="option1">Tüm Başvurular</option>
              <option value="option2">İncelendi</option>
              <option value="option3">...</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder=" Ara"
                className="border border-blue-500 p-2 pr-10 rounded-md"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-3 top-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 17.5l2.5 2.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationStatistics;
