import { useState } from "react";

import { Container } from "@mui/material";
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
    const updatedCheckedDepartments = { ...checkedDepartments };

    if (isChecked) {
      updatedCheckedDepartments[department] = true;
      subDepartments.forEach((subDepartment) => {
        updatedCheckedDepartments[subDepartment] = true;
      });
    } else {
      updatedCheckedDepartments[department] = false;
      subDepartments.forEach((subDepartment) => {
        updatedCheckedDepartments[subDepartment] = false;
      });
    }

    setCheckedDepartments(updatedCheckedDepartments);
  };
  return (
    <div>
      <Container>
        {data.map((department, i) => (
          <DepartmentCheckbox
            key={i}
            departmentData={department}
            checkedDepartments={checkedDepartments}
            onDepartmentChange={handleDepartmentChange}
          />
        ))}
      </Container>
    </div>
  );
};

export default Category;
