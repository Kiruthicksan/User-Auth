import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";

type RegisterForm = {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    console.log("Form Data", data);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User Name */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="userName">UserName </Label>
          <Input
            type="text"
            {...register("userName", {
              required: "UserName is Required",
            })}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        {/* Email */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid Email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        {/* Password */}

        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            type="text"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters Long",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Phone Number */}

        <div >
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone Number must be 10 digits",
              },
            })}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </div>

        
          <Button type="submit" variant="destructive">
            Register
          </Button>
          
        
      </form>
    </div>
  );
};
export default Register;
