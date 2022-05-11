import React from 'react'
import { Link } from '@reach/router';
import LogoImage from "@images/logo.svg"
import LanguageSwitch from "@components/shared/LanguageSwitch";
import './style.scss'

const Header = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/programacao", label: "Programação" },
    { href: "/eventos", label: "Eventos" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header id="header">
      <div className="header-inner container">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={LogoImage} alt="Logo da Python Brasil 2022" />
          </Link>
        </div>
        <nav className="links">
          <ul>
            {links.map(({href, label}) => (
              <li className={href === window.location.pathname ? 'active' : ''}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="languages">
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  )
}

export default Header