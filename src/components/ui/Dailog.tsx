/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Typography } from "@mui/material";
import { IUser } from "../../interfaces/singup";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface IDialogProps {
  open: boolean;
  handleClose: any;

  user: IUser;
}
export default function OurDialog({
  open,
  handleClose,

  user,
}: IDialogProps) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Our Profile Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText width={400} id="alert-dialog-slide-description">
            <div className=" flex mt-1">
              <div className="w-36">
                {" "}
                <Typography>Name </Typography>
              </div>
              <Typography>: {user?.name}</Typography>
            </div>
            <div className=" flex mt-1">
              <div className="w-36">
                {" "}
                <Typography>Email </Typography>
              </div>
              <Typography>: {user?.email}</Typography>
            </div>
            <div className=" flex mt-1">
              <div className="w-36">
                {" "}
                <Typography>Phone Number </Typography>
              </div>
              <Typography>: {user?.phoneNumber}</Typography>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
