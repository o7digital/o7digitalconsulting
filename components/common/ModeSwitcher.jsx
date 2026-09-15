"use client";

import Image from "next/image";

export default function ModeSwitcher() {
  const handleClick = () => {
    if (document.body.classList.contains("active-light-mode")) {
      document.body.setAttribute("class", "active-dark-mode");
      localStorage.setItem("isDarkmode", true);
    } else {
      document.body.setAttribute("class", "active-light-mode");
      localStorage.setItem("isDarkmode", false);
    }
  };

  return (
    <div id="my_switcher" className="my_switcher">
      <ul>
        <li>
          <button
            type="button"
            data-theme="light"
            className="setColor light"
            aria-label="Activer le thème clair"
            onClick={handleClick}
          >
            <Image
              className="sun-image"
              alt=""
              src="/assets/images/icons/sun-01.svg"
              width={18}
              height={18}
            />
          </button>
        </li>
        <li>
          <button
            type="button"
            data-theme="dark"
            className="setColor dark"
            aria-label="Activer le thème sombre"
            onClick={handleClick}
          >
            <Image
              className="vector-image"
              alt=""
              src="/assets/images/icons/vector.svg"
              width={18}
              height={18}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
