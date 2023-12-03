import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
interface Department {
  department: string;
  sub_departments: string[];
}

interface CheckedDepartments {
  [key: string]: boolean;
}

export const DepartmentCheckbox = ({
  departmentData,
  checkedDepartments,
  onDepartmentChange,
}: {
  departmentData: Department;
  checkedDepartments: CheckedDepartments;
  onDepartmentChange: (
    department: string,
    isChecked: boolean,
    subDepartments: string[]
  ) => void;
}) => {
  const [isChecked, setIsChecked] = useState(
    checkedDepartments[departmentData.department] || false
  );

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    onDepartmentChange(
      departmentData.department,
      checked,
      departmentData.sub_departments
    );
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
          />
        }
        label={departmentData.department}
      />
      <br />
      {departmentData.sub_departments.map((subDepartment: string) => (
        <div key={subDepartment} style={{ marginLeft: "20px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedDepartments[subDepartment] || false}
                onChange={(e) =>
                  onDepartmentChange(subDepartment, e.target.checked, [])
                }
              />
            }
            label={subDepartment}
          />
        </div>
      ))}
    </div>
  );
};
