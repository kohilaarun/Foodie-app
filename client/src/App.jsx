import { Route, Routes } from "react-router-dom";
import DishProvider from "./contexts/dishContext";
import OrderProvider from "./contexts/orderContext";
import UserProvider from "./contexts/userContext";
import "./scss/style.scss";
import { Navigation } from "./components/Navigation";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import OrderPage from "./components/OrderPage";
import CartContainer from "./components/Cart";

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
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/orders" element={<OrderPage />} />
                </Routes>
                <CartContainer />
              </div>
            </div>
          </OrderProvider>
        </DishProvider>
      </UserProvider>
    </>
  );
}

export default App;
