import './NewsMenu.css'

export default function NewsMenu() {
    return (
        <div className="news-menu-secondary">
            <ul className="menu-list-secondary">
                <li className="menu-item-secondary"><a href="#">Apie mus</a></li>
                <li className="menu-item-secondary current-page"><a href="#">Naujienos</a></li>
                <li className="menu-item-secondary"><a href="#">Dėstytojai</a></li>
                <li className="menu-item-secondary"><a href="#">Karjera</a></li>
                <li className="menu-item-secondary"><a href="#">ES parama</a></li>
            </ul>
        </div>
    )
}