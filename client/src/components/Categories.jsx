import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { dishContext } from "../contexts/dishContext";

const Categories = (item) => {
  const { selectedCategory, setSelectedCategory, categories } =
    useContext(dishContext);

  const handleClick = (item) => {
    setSelectedCategory(item);
  };

  return (
    <div className="col-12 col-md-3 col-xxl-2">
      <div className=" border p-3 shadow h-100" style={{ minWidth: 200 }}>
        <div>
          <h5>Categories</h5>
        </div>

        <div className="d-flex flex-md-column gap-2 flex-wrap">
          {categories.map((item, index) => {
            const isSelected = selectedCategory.name === item.name;

            return (
              <Button
                variant={isSelected ? "primary" : "white"}
                key={index}
                className="text-start py-3"
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.Svg && (
                  <item.Svg
                    width={25}
                    fill={isSelected ? "white" : "var(--bs-primary)"}
                  />
                )}
                <span style={{ marginRight: 6 }}>{item.icon}</span>
                <span className="fw-bold">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
