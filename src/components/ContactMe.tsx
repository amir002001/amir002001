import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  email: string;
  title: string;
  message: string;
};

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          className="inputField"
          placeholder="Name"
          {...(register("name"), { required: true })}
        />
        <input
          className="inputField"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]+$/i,
          })}
        />
      </div>
      <input
        className="inputField"
        placeholder="Title"
        {...register("title")}
      />

      <textarea
        className="inputField h-48"
        placeholder="Message"
        {...(register("message"), { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>Please input your name</span>}
      {errors.email && (
        <span>Please input your email in the correct format</span>
      )}
      {errors.message && <span>Please write a message</span>}

      <button
        type="submit"
        className="border border-primary p-2 font-medium w-fit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactMe;
