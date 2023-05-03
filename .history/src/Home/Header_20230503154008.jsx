function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
