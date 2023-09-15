import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Course_cards/Courses";
import Carts from "./components/Carts/Carts";
import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleAddToCart = (course) => {
    const isExist = carts.find((courseList) => courseList.id == course.id);
    const totalCreditHour = 20;
    let creditHour = course.credit;
    let totalCourseCost = course.price;

    if (isExist) {
      return alert("already added"); // addd kortee Hobe
    } else {
      carts.forEach((cItem) => {
        creditHour = creditHour + cItem.credit;
        totalCourseCost = totalCourseCost + cItem.price;
      });
      const remaining = totalCreditHour - creditHour;

      if (creditHour > totalCreditHour) {
        return alert("Hour Limit Sesh");
      } else {
        setRemaining(remaining);
        setTotalHour(creditHour);
        setTotalCost(totalCourseCost);
        const newCarts = [...carts, course];
        setCarts(newCarts);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="md:flex gap-5">
        <div>
          <Courses handleAddToCart={handleAddToCart} />
        </div>

        <div>
          <Carts
            carts={carts}
            remaining={remaining}
            totalHour={totalHour}
            totalCost={totalCost}
          />
        </div>
      </div>
    </>
  );
}

export default App;
