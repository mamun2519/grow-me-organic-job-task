import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IUserPops {
  data: {
    id: number;
    title: string;
    body: string;
  }[];
}
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "title",
    headerName: "User Title",
    width: 450,
    editable: true,
  },
  {
    field: "body",
    headerName: "Information",
    width: 550,
    editable: true,
  },
];

export default function UserInformation({ data }: IUserPops) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
