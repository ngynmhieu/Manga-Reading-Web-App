export function Header() {
  return (
    <header className="app-header">
      {/* <img src="/manga_icon.png" alt="Manga Reader Logo" className="logo-image" /> */}
      <div className="header-left">
        <h1>📚 Manga Reader</h1>
      </div>
      <div className="header-right">
        <button className="search-btn">🔍 Search</button>
        <button className="settings-btn">⚙️ Settings</button>
        <button className="profile-btn">👤 Profile</button>
      </div>
    </header>
  )
}
