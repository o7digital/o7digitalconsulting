"use client";
import { menuItems } from "@/data/menu";
import { menuItemsEn } from "@/data/menu-en";
import { menuItemsEs } from "@/data/menu-es";
import { menuItemsDe } from "@/data/menu-de";
import { menuItemsIt } from "@/data/menu-it";
import { closeMenu } from "@/utlis/toggleMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const localePrefix =
    pathname?.match(/^\/(en|es|de|it)(?=\/|$)/)?.[0] || "";
  const resolvedItems =
    locale === "en"
      ? menuItemsEn
      : locale === "es"
      ? menuItemsEs
      : locale === "de"
      ? menuItemsDe
      : locale === "it"
      ? menuItemsIt
      : menuItems;
  const prefix =
    locale === "en" ? "/en" : locale === "es" ? "/es" : locale === "de" ? "/de" : locale === "it" ? "/it" : "";
  const popupRef = useRef(null); // For .popup-mobile-menu
  const innerRef = useRef(null); // For .inner

  const menuRefs = useRef([]); // To store references to all menu items
  const handleMenuClick = (index) => {
    menuRefs.current.forEach((menu, idx) => {
      if (menu) {
        if (idx === index) {
          if (menu.classList.contains("open")) {
            menu.classList.remove("open");

            const nextElement = menu.nextElementSibling;
            if (nextElement) {
              nextElement.style.height = "0px";
            }
          } else {
            menu.classList.add("open");

            const nextElement = menu.nextElementSibling;
            if (nextElement) {
              nextElement.style.height = nextElement.scrollHeight + "px";
            }
          }
        } else {
          // Remove 'active' class from all other menus
          menu.classList.remove("open");
          // Remove 'open' class from the next sibling elements
          const nextElement = menu.nextElementSibling;
          if (nextElement) {
            nextElement.style.height = "0px";
          }
        }
      }
    });
  };

  // Handler for clicking outside of .inner
  const handleOutsideClick = (e) => {
    if (
      popupRef.current &&
      popupRef.current.contains(e.target) &&
      innerRef.current &&
      !innerRef.current.contains(e.target)
    ) {
      closeMenu();
      // Add your logic to handle outside click here
    }
  };

  useEffect(() => {
    // Attach the event listener for outside clicks
    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const buildLocaleHref = (nextLocale) => {
    const current = pathname || "";
    const stripped = current.replace(/^\/(en|es|de|it)(?=\/|$)/, "");
    if (nextLocale === "fr") return stripped || "/";
    const base = stripped.startsWith("/") ? stripped : `/${stripped}`;
    return `/${nextLocale}${base === "/" ? "" : base}`;
  };

  const isActiveParent = (menu) => {
    var isActive = false;
    if (menu.megamenuColumns) {
      menu.megamenuColumns.forEach((elm) => {
        if (elm.some((el) => el.href.split("/")[1] == pathname.split("/")[1])) {
          isActive = true;
        }
      });
    }
    if (menu.submenu) {
      if (
        menu.submenu.some(
          (el) => el.href.split("/")[1] == pathname.split("/")[1]
        )
      ) {
        isActive = true;
      }
    }
    return isActive;
  };
  return (
    <div ref={popupRef} className="popup-mobile-menu">
      <div ref={innerRef} className="inner">
        <div className="header-top">
          <div className="logo">
            <Link href={`${prefix || "/"}`}>
              <Image
                className="logo-light"
                alt="Corporate Logo"
                src="/assets/images/o7digital-logo.png"
                width={288}
                height={100}
              />
              <Image
                className="logo-dark"
                alt="Corporate Logo"
                src="/assets/images/o7digital-logo.png"
                width={288}
                height={100}
              />
            </Link>
          </div>
          <div className="close-menu">
            <button onClick={closeMenu} className="close-button">
              <i className="feather-x" />
            </button>
          </div>
        </div>
        <ul className="mainmenu">
          {resolvedItems.map((item, index) => (
            <li
              key={index}
              className={`${
                item.hasMegamenu ? "with-megamenu has-menu-child-item " : ""
              } ${
                item.hasDropdown ? "has-droupdown has-menu-child-item" : ""
              } ${
                item.megamenuClass == "with-mega-item-2"
                  ? "position-relative"
                  : ""
              }`}
            >
              {item.href ? (
                <Link
                  className={
                    pathname.split("/")[1] == item.href.split("/")[1]
                      ? "active"
                      : ""
                  }
                  href={item.href}
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  ref={(el) => (menuRefs.current[index] = el)} // Store refs for each menu item
                  onClick={() => handleMenuClick(index)}
                >
                  <span className={isActiveParent(item) ? "activeParent" : ""}>
                    {item.title}
                  </span>
                </a>
              )}
              {item.hasMegamenu && (
                <div className={`rainbow-megamenu ${item.megamenuClass}`}>
                  <div className="wrapper">
                    <div className="row row--0">
                      {item.megamenuColumns.map((column, colIndex) => (
                        <div key={colIndex} className={item.colclass}>
                          <ul className="mega-menu-item">
                            {column.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link
                                  className={
                                    pathname.split("/")[1] ==
                                    link.href.split("/")[1]
                                      ? "active"
                                      : ""
                                  }
                                  href={link.href}
                                >
                                  {link.label}{" "}
                                  {link.badge && (
                                    <span className="rainbow-badge-card">
                                      {link.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {item.hasDropdown && (
                <ul className="submenu">
                  {item.submenu.map((submenuItem, submenuIndex) => (
                    <li key={submenuIndex}>
                      <Link
                        className={
                          pathname.split("/")[1] ==
                          submenuItem.href.split("/")[1]
                            ? "active"
                            : ""
                        }
                        href={submenuItem.href}
                      >
                        {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-language-switcher" aria-label="Language switcher">
          <Link
            href={buildLocaleHref("fr")}
            className={localePrefix === "" ? "active" : ""}
          >
            FR
          </Link>
          <span className="separator">|</span>
          <Link
            href={buildLocaleHref("en")}
            className={localePrefix === "/en" ? "active" : ""}
          >
            EN
          </Link>
          <span className="separator">|</span>
          <Link
            href={buildLocaleHref("es")}
            className={localePrefix === "/es" ? "active" : ""}
          >
            ES
          </Link>
          <span className="separator">|</span>
          <Link
            href={buildLocaleHref("de")}
            className={localePrefix === "/de" ? "active" : ""}
          >
            DE
          </Link>
          <span className="separator">|</span>
          <Link
            href={buildLocaleHref("it")}
            className={localePrefix === "/it" ? "active" : ""}
          >
            IT
          </Link>
        </div>
      </div>
    </div>
  );
}
