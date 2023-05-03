import Navigation from "./Navigation";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>My Portfolio</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
