import React, { useState } from "react";
import OurAccordion from "../ui/Accordion";
import { Container, Typography } from "@mui/material";
import { DepartmentCheckbox } from "../ui/DepartmentCheckbox";
interface CheckedDepartments {
  [key: string]: boolean;
}
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
  const [checkedDepartments, setCheckedDepartments] =
    useState<CheckedDepartments>({});

  const handleDepartmentChange = (
    department: string,
    isChecked: boolean,
    subDepartments: string[]
  ) => {
    const newCheckedDepartments = { ...checkedDepartments };

    if (isChecked) {
      newCheckedDepartments[department] = true;
      subDepartments.forEach((subDepartment) => {
        newCheckedDepartments[subDepartment] = true;
      });
    } else {
      newCheckedDepartments[department] = false;
      subDepartments.forEach((subDepartment) => {
        newCheckedDepartments[subDepartment] = false;
      });
    }

    setCheckedDepartments(newCheckedDepartments);
  };
  return (
    <div>
      {/* {data.map((category, index) => (
        <OurAccordion category={category} key={index} />
      ))} */}
      <Container>
        {data.map((department) => (
          <DepartmentCheckbox
            key={department}
            departmentData={department}
            checkedDepartments={checkedDepartments}
            onDepartmentChange={handleDepartmentChange}
          />
        ))}
        <Typography variant="body1">
          <strong>Checked Departments:</strong>{" "}
          {JSON.stringify(checkedDepartments)}
        </Typography>
      </Container>
    </div>
  );
};

export default Category;
