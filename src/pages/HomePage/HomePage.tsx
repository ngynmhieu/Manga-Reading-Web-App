import { Header } from '../../components/Header'
import './HomePage.css'

export function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <h1>Welcome to Manga Reader</h1>
        <p>Your local manga collection</p>
      </main>
    </div>
  )
}
