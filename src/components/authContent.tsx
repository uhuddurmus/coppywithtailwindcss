import React from "react";

const AuthContent = () => {
  return (
    <div className="border auth-content mt-10 flex flex-wrap justify-between rounded-md bg-white shadow-lg mx-auto my-10 overflow-hidden">
      <div className="container mx-auto h-100">
        <div className="login-application-alert max-w-full flex">
          <div className="alert-icon flex-none w-12  bg-red-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-full h-full"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <div className="m-5 alert-content">
            <p className="leading-6 font-medium">Başvuru İnceleme Süreniz Dolmuştur.</p>
            <br />
            <span className="mt-5 text-sm font-normal text-gray-400/75">
              Üyeliğinizde aktif bir ürün olmadığı için başvuruları
              inceleyememektesiniz.
              <br />
              Başvurularınızı incelemek için paketlerimizden size uygun olanı
              seçebilirsiniz.
              <br />
              CV Görüntüleme paketi satın alarak tüm eski başvurularınızı
              incelemeye devam edebilirsiniz.
              <br />
              <br />
              <hr />
              <br />
              <a
                href="https://isbul.net/isveren/paketler"
                className="btn btn-primary btn-sm"
                style={{ textDecoration: "none" }}
              >
                Ürünleri İncele
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
