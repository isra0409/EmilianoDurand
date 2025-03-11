import { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import "./styles.css";

const LandingPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [navbarExpanded, setNavbarExpanded] = useState(false); // Estado para controlar la expansión del navbar

  const works = [
    {
      id: 1,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2024/02/Emiliano-Durand-foto08-scaled.jpeg",
      title: "Trabajo 1",
      description: "Descripción del trabajo 1",
    },
    {
      id: 2,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2024/02/Emiliano-Durand-foto06.jpeg",
      title: "Trabajo 2",
      description: "Descripción del trabajo 2",
    },
    {
      id: 3,
      img: "https://municipalidadsalta.gob.ar/wp-content/uploads/2024/02/Emiliano-Durand-foto03.jpeg",
      title: "Trabajo 3",
      description: "Descripción del trabajo 3",
    },
  ];

  const timelineData = [
    {
      date: "2023 - Hoy",
      title: "Intendente de la Ciudad de Salta",
      description:
        "Implementó políticas que resultaron en un aumento significativo de la inversión extranjera.",
    },
    {
      date: "2021 - 2023",
      title: "Senador de la provincia",
      description:
        "Implementó políticas que resultaron en un aumento significativo de la inversión extranjera.",
    },
    {
      date: "2014 - 2014",
      title: "Jefe de gabinete",
      description:
        "Implementó políticas que resultaron en un aumento significativo de la inversión extranjera.",
    },
  ];

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const handleNavLinkClick = () => {
    // Cerrar el menú en dispositivos móviles cuando se haga clic en cualquier enlace de la barra de navegación
    setNavbarExpanded(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbaris navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Emiliano Durand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={navbarExpanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle} // Controlar la expansión del navbar
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              navbarExpanded ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={handleNavLinkClick}
                >
                  Sobre Mí
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#works"
                  onClick={handleNavLinkClick}
                >
                  Trabajos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#trayectoria"
                  onClick={handleNavLinkClick}
                >
                  Trayectoria
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact-form"
                  onClick={handleNavLinkClick}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="banner-container d-flex flex-column align-items-center justify-content-center text-center text-white">
        {/* Imagen de fondo con overlay */}
        <div className="banner-bg"></div>

        {/* Contenido en primer plano */}
        <div className="banner-content">
          <h1>Hola vecino de Salta!</h1>
          <p>Te invito a conocer nuestra web!</p>
        </div>
      </header>

      {/* Sobre Mí */}
      <h2 className="text-center mt-5 mb-4">Sobre Mí</h2>
      <section
        id="about"
        className="container my-4 py-4 d-flex flex-column flex-md-row align-items-center"
      >
        <img
          src="https://www.cuarto.com.ar/cuarto/wp-content/uploads/2023/02/Emiliano-Durand-1.jpg"
          className="imgEmi me-md-5 mb-4 mb-md-0"
          alt="Foto"
        />
        <div>
          <p>
            Soy Jorge Mario Emiliano Durand (n. 1976, Salta) soy un abogado,
            periodista y político argentino. Actualmente me desempeño como
            Intendente de la Ciudad de Salta y anteriormente fui Senador
            Provincial por el departamento de la Capital
          </p>
        </div>
      </section>

      <section id="trayectoria" className="container my-5 py-5">
        <h2 className="text-center mb-4">Trayectoria</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item d-flex align-items-center justify-content-center"
            >
              <div className="timeline-date-container">
                <div className="timeline-date">{item.date}</div>
              </div>
              <div className="timeline-content-container">
                <div className="timeline-title">{item.title}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trabajos */}
      <section id="works" className="container my-4 py-4">
        <h2 className="text-center mb-4">Trabajos</h2>
        <Carousel>
          {works.map((work) => (
            <Carousel.Item
              key={work.id}
              onClick={() => {
                setSelectedWork(work);
                setModalShow(true);
              }}
            >
              <img
                src={work.img}
                className="imgEmi d-block w-100"
                alt={work.title}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Modal de Trabajos */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        {selectedWork && (
          <div className="d-flex flex-column p-4" style={{ maxWidth: "800px" }}>
            <img
              src={selectedWork.img}
              className="w-100 mb-3"
              alt={selectedWork.title}
              style={{
                maxHeight: "400px", // Limita la altura máxima de la imagen
                objectFit: "cover", // Hace que la imagen mantenga sus proporciones sin distorsionarse
              }}
            />
            <div className="imgModal">
              <h4>{selectedWork.title}</h4>
              <p>{selectedWork.description}</p>
              <button
                className="btn btn-secondary"
                onClick={() => setModalShow(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </Modal>

      <section id="contact-form" className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Contáctanos</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <i className="bi bi-person-fill me-2"></i> Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-0 shadow-sm"
                    id="name"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="bi bi-envelope-fill me-2"></i> Correo
                    Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-white border-0 shadow-sm"
                    id="email"
                    placeholder="Tu correo electrónico"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    <i className="bi bi-pencil-fill me-2"></i> Mensaje
                  </label>
                  <textarea
                    className="form-control bg-dark text-white border-0 shadow-sm"
                    id="message"
                    rows="4"
                    placeholder="Escribe tu mensaje aquí"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">
                  <i className="bi bi-send me-2"></i> Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="navbaris bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {/* Redes sociales */}
            <div className="col-md-4">
              <h5 className="text-uppercase mb-3">Síguenos</h5>
              <div>
                <a href="#" className="text-white me-3 fs-4" title="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white me-3 fs-4" title="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white fs-4" title="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            {/* Enlaces útiles */}
            <div className="col-md-4">
              <h5 className="text-uppercase mb-3">Enlaces Útiles</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white text-decoration-none">
                    <i className="bi bi-house-door me-2"></i>Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-briefcase me-2"></i>Trabajos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-form"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-envelope-paper me-2"></i>Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Información de la empresa */}
            <div className="col-md-4">
              <h5 className="text-uppercase mb-3">Intendencia de Salta</h5>
              <p>
                Somos la cara digital de nuestra intendencia. Consultas y
                mensajes únicamente por los medios oficiales.
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <strong>Teléfono:</strong> +54 3875 55 55 55
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <strong>Email:</strong> intendenciasalta@gmail.com
              </p>
            </div>
          </div>
        </div>
        
      </footer>
      <p className="text-center m-0">@fastfrontwebs</p>
    </>
  );
};

export default LandingPage;
