console.log("Navbar script loaded");
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div id="navigation">
        <a href="index.html">Home</a>
        <a href="software.html">Software</a>
        <a href="content.html">Content</a>
        <a href="hobbies.html">Hobbies</a>
      </div>
    `;
  }
}

customElements.define('nav-bar', Navbar);