import { FormControlLabel, Checkbox } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  const mainDepartmentChecked =
    checkedDepartments[departmentData.department] || false;

  const handleCheckboxChange = (checked: boolean) => {
    onDepartmentChange(
      departmentData.department,
      checked,
      departmentData.sub_departments
    );
  };

  const handleSubDepartmentChange = (
    subDepartment: string,
    isChecked: boolean
  ) => {
    const updatedCheckedDepartments = { ...checkedDepartments };
    updatedCheckedDepartments[subDepartment] = isChecked;

    const allSubDepartmentsUnchecked = departmentData.sub_departments.every(
      (subDep) => !updatedCheckedDepartments[subDep]
    );

    if (allSubDepartmentsUnchecked) {
      updatedCheckedDepartments[departmentData.department] = false;
    } else {
      updatedCheckedDepartments[departmentData.department] = true;
    }

    onDepartmentChange(subDepartment, isChecked, []);
    //     setCheckedDepartments(updatedCheckedDepartments);
  };

  return (
    <div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={mainDepartmentChecked}
                  onChange={(e) => handleCheckboxChange(e.target.checked)}
                />
              }
              label={departmentData.department}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div className="border px-10 rounded-2xl shadow-sm">
              {departmentData.sub_departments.map((subDepartment: string) => (
                <div key={subDepartment} style={{ marginLeft: "20px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedDepartments[subDepartment] || false}
                        onChange={(e) =>
                          handleSubDepartmentChange(
                            subDepartment,
                            e.target.checked
                          )
                        }
                      />
                    }
                    label={subDepartment}
                  />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
