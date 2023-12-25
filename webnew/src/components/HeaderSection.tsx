
export const HeaderSection = () => {
  return (
    <header className="site-header" id="site-header">
    <nav className="navbar navbar-expand-xl" id="site-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html"><img className="img-fluid" src="image/logo.png" style={{visibility: 'hidden'}} alt="fungi logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="bi bi-list" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#site-header">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skill-section">Publications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#academics-section-1">Academics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">Contact</a>
            </li>
          </ul> {/* .navbar-nav */}
        </div> {/* .collapse */}
      </div> {/* .container */}
    </nav> {/* .navbar */}
  </header>
  )
}
