import { Route, Routes } from "react-router-dom";
import DishProvider from "./contexts/dishContext";
import OrderProvider from "./contexts/orderContext";
import UserProvider from "./contexts/userContext";
import "./scss/style.scss";
import { Navigation } from "./components/Navigation";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <UserProvider>
        <DishProvider>
          <OrderProvider>
            <div className="d-flex flex-column min-vh-100">
              <Navigation />
              <div className="row flex-fill align-items-stretch p-3 g-3">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </div>
            </div>
          </OrderProvider>
        </DishProvider>
      </UserProvider>
    </>
  );
}

export default App;
