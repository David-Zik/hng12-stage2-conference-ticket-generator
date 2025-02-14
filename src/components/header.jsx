const Header = () => {
    return (
        <header>
        <div className="icon-container">
          <img
            className="ticket-icon"
            src="src/assets/thumb.png"
            alt="ticket-icon"
          />
          <img className="ticz-icon" src="src/assets/ticz.png" alt="ticz" />
        </div>
        <div className="button">
          <button>
            <a href="#">
              MY TICKETS <span className="arrow">&rarr;</span>
            </a>
          </button>
        </div>
      </header>
    )
}

export default Header;