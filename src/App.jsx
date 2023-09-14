import "./App.css";
import Cart from "./components/Cart/cart";
import Courses from "./components/Course_cards/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex gap-5">
        <div>
          <Courses />
        </div>

        <div>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
