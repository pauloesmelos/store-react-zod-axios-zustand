import CreateUserForm from "@/components/CreateUserForm";

function CreateUser() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[60%] lg:max-w-[500px] p-8 bg-white shadowCard rounded-md">
            <CreateUserForm />
        </div>
    </div>
  )
}

export default CreateUser;