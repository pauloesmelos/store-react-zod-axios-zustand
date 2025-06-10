import CreateUserForm from "@/components/CreateUserForm";

function CreateUser() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="p-8 bg-white shadowCard rounded-md">
            <CreateUserForm />
        </div>
    </div>
  )
}

export default CreateUser;