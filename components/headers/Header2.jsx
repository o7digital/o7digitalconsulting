"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import ModeSwitcher from "../common/ModeSwitcher";
import { openMenu } from "@/utlis/toggleMenu";
import { usePathname } from "next/navigation";

export default function Header2({
  parentClass = "rainbow-header header-default header-left-align header-not-transparent header-sticky",
  btnClass = "btn-default btn-small round",
}) {
  const pathname = usePathname();
  const localePrefix =
    pathname?.match(/^\/(en|es|de|it)(?=\/|$)/)?.[0] || "";

  const buildLocaleHref = (locale) => {
    const current = pathname || "";
    const stripped = current.replace(/^\/(en|es|de|it)(?=\/|$)/, "");
    if (locale === "fr") return stripped || "/";
    const base = stripped.startsWith("/") ? stripped : `/${stripped}`;
    return `/${locale}${base === "/" ? "" : base}`;
  };

  // Force un header non transparent même si une page passe "header-transparent"
  const computedParentClass = (parentClass || "")
    .replace("header-transparent", "header-not-transparent")
    .trim();

  return (
    <header className={computedParentClass}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-6 col-4 position-static">
            <div className="header-left d-flex">
              <div className="logo">
                <Link href={`${localePrefix}/index-digital-agency`}>
                  <Image
                    className="logo-light"
                    alt="O7 Digital Consulting"
                    src="/assets/images/o7digital-logo.png"
                    width={288}
                    height={100}
                  />
                  <Image
                    className="logo-dark"
                    alt="O7 Digital Consulting"
                    src="/assets/images/o7digital-logo.png"
                    width={288}
                    height={100}
                  />
                </Link>
              </div>
              <nav className="mainmenu-nav d-none d-lg-block">
                <ul className="mainmenu">
                  <Nav />
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-8">
            <div className="header-right">
              {/* pas de bouton BUY NOW */}
              <div className="language-switcher d-none d-lg-inline-block me-3">
                <Link
                  href={buildLocaleHref("fr")}
                  className={localePrefix === "" ? "active" : ""}
                >
                  FR
                </Link>
                <span className="mx-1">|</span>
                <Link
                  href={buildLocaleHref("en")}
                  className={localePrefix === "/en" ? "active" : ""}
                >
                  EN
                </Link>
                <span className="mx-1">|</span>
                <Link
                  href={buildLocaleHref("es")}
                  className={localePrefix === "/es" ? "active" : ""}
                >
                  ES
                </Link>
                <span className="mx-1">|</span>
                <Link
                  href={buildLocaleHref("de")}
                  className={localePrefix === "/de" ? "active" : ""}
                >
                  DE
                </Link>
                <span className="mx-1">|</span>
                <Link
                  href={buildLocaleHref("it")}
                  className={localePrefix === "/it" ? "active" : ""}
                >
                  IT
                </Link>
              </div>
              <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                <div className="hamberger">
                  <button onClick={openMenu} className="hamberger-button">
                    <i className="feather-menu" />
                  </button>
                </div>
              </div>
              <ModeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
