import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
