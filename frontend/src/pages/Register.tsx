import { Button, Flex } from "@radix-ui/themes";
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
        <div>
          <label htmlFor="userName">UserName </label>
          <input
            type="text"
            {...register("userName", {
              required: "UserName is Required",
            })}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
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

        <div>
          <label htmlFor="password">Password</label>
          <input
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

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
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

        <Flex>
          <Button type="submit" variant="solid" color="blue">
            Register
          </Button>
        </Flex>
      </form>
    </div>
  );
};
export default Register;
