import React, { useContext } from "react";
import { Container, Footer } from "react-materialize";
import { ThemeContext } from "../ThemeContext";
import "./Footer.css";
export default function FooterFC() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="footer"
      style={{
        backgroundColor: theme.backgroundColor,
        paddingTop: theme.paddingTop,
      }}
    >
      <div
        className="containers footer-container"

      >
        
        
       
        <div className="footer-item">
          <a href="https://www.youtube.com/@PhePhim" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Youtube
          </a>
          <a href="https://www.facebook.com/phephim/?locale=vi_VN" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Facebook
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Help
          </a>
        </div>
      </div>
    </section>
  );
}
