"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import sal from "sal.js";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import O7ChatWidget from "@/components/o7/chat/O7ChatWidget";
import { closeMenu } from "@/utlis/toggleMenu";

export default function ClientLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [pathname]);

  useEffect(() => {
    // Close any open modal
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        document.querySelector(".header-sticky")?.classList.add("sticky");
      } else {
        document.querySelector(".header-sticky")?.classList.remove("sticky");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isDarkmode = localStorage.getItem("isDarkmode");

    // Compare to the string "true"
    if (isDarkmode === "true") {
      document.body.setAttribute("class", "active-dark-mode");
    } else if (isDarkmode === "false") {
      document.body.setAttribute("class", "active-light-mode");
    }
  }, []);

  return (
    <>
      <main className="page-wrapper">{children}</main>
      <O7ChatWidget siteCode="o7digital" />
      <MobileMenu />
      <BackToTop />
    </>
  );
}
