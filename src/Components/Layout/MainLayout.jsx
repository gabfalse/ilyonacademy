import { Outlet } from "react-router-dom";

import Navbar from "../General/Navbar";
import Footer from "../General/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-cream text-text">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;