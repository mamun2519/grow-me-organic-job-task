import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { validationSchema } from "../../schema/singup";
import { ISingUP } from "../../interfaces/singup";
import { setIntoLocalStorage } from "../../utils/local-storage";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ISingUP> = async (data) => {
    console.log(data);
    setIntoLocalStorage("USER_FORM", JSON.stringify(data));
    navigate("/");
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="lg:w-2/6 w-full h-[450px] border shadow rounded-2xl">
        <div className=" mt-4 h-10 bg-red-500 text-white  flex justify-center items-center">
          <p>Please Fil Up This From</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-10 px-5">
            <div className="mt-5">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Enter Your Name"
                    error={!!errors.name}
                    helperText={errors.name?.message as string}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-3">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Email"
                    placeholder="Enter Your Email"
                    error={!!errors.email}
                    helperText={errors.email?.message as string}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-3">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="Enter Your phone Number"
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message as string}
                    {...field}
                  />
                )}
              />
            </div>

            <div className="mt-4">
              <div className="w-full h-10 bg-red-500 text-white flex justify-center items-center rounded-2xl">
                <button className="w-full" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
