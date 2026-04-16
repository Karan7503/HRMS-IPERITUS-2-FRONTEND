import Footer from "./components/footer/Footer";
import Navbar from "./pages/Navbar";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (

    <div className="min-h-screen flex flex-col">

      <Navbar />

      <div className="flex-1">

        <AppRoutes/>

      </div>

      <Footer />

    </div>

  );

}

export default App;