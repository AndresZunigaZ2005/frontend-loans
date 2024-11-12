import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './BankHome.css';

const BankHome = () => {
  return (
    <div className="bank-home">
      {/* Sección sobre el banco */}
      <section className="about-section">
        <h2>Bienvenidos a Nuestro Banco</h2>
        <p>
          Somos un banco comprometido con brindar servicios financieros de confianza y calidad a nuestros clientes.
          Con años de experiencia, nos enfocamos en construir relaciones duraderas basadas en el respeto,
          la transparencia y la confianza.
        </p>
        <LazyLoadImage
          src="https://th.bing.com/th/id/OIP.XGaeDAMXPN0SVjz7g2ClcAHaEo?w=277&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" // URL de imagen optimizada
          alt="Edificio del Banco"
          effect="blur"
          className="bank-image"
        />
      </section>

      {/* Sección sobre préstamos */}
      <section className="loan-section">
        <h3>Servicios de Préstamos</h3>
        <p>
          Ofrecemos una amplia gama de opciones de préstamos adaptadas a tus necesidades. Ya sea que busques
          financiar un proyecto personal, adquirir un vehículo o mejorar tu vivienda, tenemos el préstamo adecuado
          para ti, con tasas competitivas y un proceso sencillo y ágil.
        </p>
        <LazyLoadImage
          src="https://th.bing.com/th/id/OIP.75EEDXybgqhd_g8G-9ML4gAAAA?rs=1&pid=ImgDetMain" // URL de imagen optimizada
          alt="Servicios de Préstamos"
          effect="blur"
          className="loan-image"
        />
      </section>

      {/* Otra sección opcional */}
      <section className="more-info-section">
        <h3>Más Servicios Financieros</h3>
        <p>
          Además de nuestros servicios de préstamos, contamos con una gran variedad de soluciones de ahorro e
          inversión para ayudarte a alcanzar tus metas financieras.
        </p>
        <LazyLoadImage
          src="URL_DE_IMAGEN_SERVICIOS"
          alt="Servicios Financieros"
          effect="blur"
          className="services-image"
        />
      </section>
    </div>
  );
};

export default BankHome;