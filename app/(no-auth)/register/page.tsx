import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <section className="h-screen md:flex">
      <article className="md:w-3/5 flex justify-center items-center h-full">
        <RegisterForm />
      </article>
      <figure className="relative hidden md:w-2/5 md:block h-full">
        <Image
          src="/images/register-bg.jpg"
          alt="people in sitting"
          fill
          className="absolute inset-0 object-cover"
        />
      </figure>
    </section>
  );
};

export default Register;
