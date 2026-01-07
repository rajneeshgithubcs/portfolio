import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToRoute = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // We only want this behavior on the home page "/"
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Triggers when section is in the middle of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const newPath = sectionId === "home" ? "/" : `/${sectionId}`;

          // Update URL without adding to browser history stack (replace: true)
          // so the back button doesn't get "stuck" in scroll steps
          window.history.replaceState(null, "", newPath);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollToRoute;
