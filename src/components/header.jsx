import React, { useState, useEffect } from "react";
import { HandleWhatsClick } from "../utils/whatssap"; // Certifique-se de que o caminho esteja correto
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importação do Font Awesome

export const Header = (props) => {
  const images = [
    "../img/madeira3.jpg",
    "../img/madeira4.jpg",
    "../img/madeira2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header id="header">
      <div className="intro" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  onClick={() => HandleWhatsClick({
                    phoneNumber: '+5511910771180',
                    message: 'Olá, gostaria de mais informações.'
                  })}
                  href="#header"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ícone do WhatsApp no canto inferior direito */}
        <div
          className="whatsapp-icon"
          onClick={() => HandleWhatsClick({
            phoneNumber: '+5511910771180',
            message: 'Olá, gostaria de mais informações.'
          })}
        >
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>
    </header>
  );
};
