import AuthForm from "@/components/AuthForm";

function Auth() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[90%] lg:max-w-[400px] p-8 bg-white shadowCard rounded-md">
            <AuthForm />
        </div>
    </div>
  )
}

export default Auth;