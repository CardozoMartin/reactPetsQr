import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
        <i class="bi bi-qr-code"></i>   Pets QR
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
        "Un pequeño esfuerzo en la dirección correcta puede hacer una gran diferencia en la vida de una comunidad."
        </p>

       

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/DanielTinCardozo/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <i class="bi bi-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/cardozo9698/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <i class="bi bi-instagram"></i>
            </a>
          </li>

          <li>
            <a
              href="https://myportafoliomc.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <i class="bi bi-rocket-takeoff-fill"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/CardozoMartin"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <i class="bi bi-github"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/martin-cardozo-14b597238/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-100 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Dribbble</span>
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
