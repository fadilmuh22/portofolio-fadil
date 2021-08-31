function NavLink({ name = '', active = false }) {
  return (
    <div className="nav-link">
      <p>{name}</p>
      {active ? (
        <div>
          <img src="" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function TopNav() {
  return (
    <div className="top-nav">
      <NavLink name="Home" active={false} />
      <NavLink name="Blog" active={false} />
    </div>
  );
}
