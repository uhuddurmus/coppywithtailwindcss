import { useState } from "react";

const BoxItem = () => {
  const [showTooltip, setShowTooltip] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [basvuru, setBasvuru] = useState(false);
  const [hoveredBasvuru, setHoveredBasvuru] = useState(false);

  return (
    <div className="candidate-list-head">
      <div
        className={
          hoveredButton
            ? "p-10 ps-2 mt-2 pb-1 pt-3 grid grid-cols-1 lg:grid-cols-4 lg:border lg:border-l-4 border-blue-500 lg:bg-gray-100 rounded-md transition-all duration-500"
            : "p-10 ps-2 mt-2 pb-1 pt-3 grid grid-cols-1 lg:grid-cols-4 lg:border lg:border-l-4 border-gray-300 lg:bg-gray-100  rounded-md transition-all duration-500"
        }
        onMouseLeave={() => setHoveredButton(false)}
        onMouseEnter={() => setHoveredButton(true)}
      >
        <div className="flex lg:block flex-col col-span-1">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 lg:mr-4" />
            <div className="flex  flex-row items-center text-base font-normal text-blue-500">
              <a
                className="profile-image"
                data-bs-toggle="modal"
                data-bs-target="#applyInfoModal"
                href="javascript:void(0)"
              >
                <img
                  className="w-15 h-15 rounded-full mb-2 lg:mb-0 lg:mr-4  border-2 border-blue-500 me-3"
                  src="https://isbull.s3.eu-north-1.amazonaws.com/default-images/user-profile.png?v=1.0"
                  alt="Profile"
                  loading="lazy"
                />
              </a>
              <div className="candidate-info">
                <span className="name-input text-xl">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#applyInfoModal"
                    href="javascript:void(0)"
                  >
                    K***** A*****
                  </a>
                </span>
                <br />
                <span className="text-gray-500 text-sm">
                  ****** / ****** Kadın, 37
                  <br />
                  Çalışmıyor
                </span>
                <div className="candidate-date text-gray-500 text-sm">
                  07 Mart 2024 /{" "}
                  <span className="candidate-state text-blue-400">
                    İncelendi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-2 pt-0 hidden lg:block col-span-1 text-base font-normal text-blue-500">
          <div className="text-blue-500">Kasiyer aşçı yardimcisi</div>
          <br />
          <p className="text-gray-400 text-sm">
            Aöl.
            <br />
            (Lise)
          </p>
        </div>
        <div className=" p-2 pt-0 hidden lg:block col-span-1 text-base font-normal text-blue-500">
          <div className="text-blue-500">Kasiyer</div>
          <br />
          <p className="text-gray-400 text-sm">
            Popayes
            <br />
            Eylül 2021 / Eylül 2022
          </p>
        </div>
        <div className="hidden lg:block col-span-1 text-base font-normal text-blue-500">
          <div className=" flex-col gap-1 grid justify-items-center">
            <button
              className="flex-1 relative bg-transparent p-2 ps-8 w-10"
              onMouseEnter={() => setShowTooltip(1)}
              onMouseLeave={() => setShowTooltip(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-help-octagon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" />
                <path d="M12 16v.01" />
                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
              </svg>
              {showTooltip == 1 && (
                <span className="absolute bg-black text-white py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2">
                  Adayın Soruya Verdiği Cevaplar
                </span>
              )}
            </button>
            <button
              className="relative bg-transparent p-2 ps-8 w-10"
              onMouseEnter={() => setShowTooltip(2)}
              onMouseLeave={() => setShowTooltip(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-list-numbers"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 6h9" />
                <path d="M11 12h9" />
                <path d="M12 18h8" />
                <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
                <path d="M6 10v-6l-2 2" />
              </svg>
              {showTooltip == 2 && (
                <span className="absolute bg-black text-white py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2">
                  Adayın İş Deneyimleri
                </span>
              )}
            </button>
            <button
              className="relative bg-transparent p-2 ps-8 w-10"
              onMouseEnter={() => setShowTooltip(3)}
              onMouseLeave={() => setShowTooltip(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              {showTooltip == 3 && (
                <span className="absolute bg-black text-white py-1 px-2 rounded-md bottom-full left-1/2 transform -translate-x-1/2">
                  Adayı Görüntüle
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="items-center justify-center lg:justify-start col-span-12 ">
          <div className="row">
            <button
              onClick={() => setBasvuru(!basvuru)}
              className="l-2 hidden mb-3 lg:flex lg:ml-6  items-center justify-center h-5 leading-6 bg-blue-600 rounded-md text-white text-xs font-medium px-4"
            >
              1 Başvuru
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mt-1"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </button>
            <div
              className={
                basvuru == true
                  ? hoveredBasvuru == false
                    ? "p-5 ps-2 mt-3 lg:mt-0 ml-2 border border-l-4 border-gray-300 bg-gray-200 rounded-md transition-all duration-500"
                    : "p-5 ps-2 mt-3 lg:mt-0 ml-2 border border-l-4 border-blue-500 bg-gray-200 rounded-md transition-all duration-500"
                  : "hidden "
              }
              onMouseLeave={() => setHoveredBasvuru(false)}
              onMouseEnter={() => setHoveredBasvuru(true)}
            >
              <div className="flex items-center">
                <div className="w-5/12 lg:w-4/12">
                  <div className="">
                    <div className="ms-3">
                      <span className="text-gray-400">Mutfak Elemanı</span>
                      <br />
                      <span className="text-blue-500 text-sm">(Yeni)</span>
                    </div>
                  </div>
                </div>
                <div className="w-7/12 lg:w-8/12">
                  <div className="job-education">
                    <span className="text-gray-400">02 Mart 2024</span>
                    <br />
                    <span className="text-blue-500 text-sm">İncelendi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
