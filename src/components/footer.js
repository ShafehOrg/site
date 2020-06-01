import React from "react"

const Footer = () => (
  <footer>
    <div className="copy">
      © {new Date().getFullYear()}, Shafeh.org
          {`, Developer: `}
      <a href="https://www.sharshi.com">Shersheial Borisute</a>
      <br />
            Twitter: <a href="https://twitter.com/ShafehOrg">@ShafehOrg</a>
            WhatsApp: <a href="https://wa.me/13476742774">1 (347) 674-2774</a>
    </div>
  </footer>
)

export default Footer
