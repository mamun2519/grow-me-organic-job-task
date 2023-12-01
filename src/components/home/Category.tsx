import React from "react";
import OurAccordion from "../ui/Accordion";

const Category = () => {
  const data = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: ["graphic_design", "product_design", "web_design"],
    },
  ];

  return (
    <div>
      {data.map((category, index) => (
        <OurAccordion category={category} key={index} />
      ))}
    </div>
  );
};

export default Category;
