import { useUser } from "@/store/useLogin";

function Home() {
  const { user } = useUser();
  console.log(user);

  if(!user) return <p>Carregando...</p>
  return (
    <main className="w-full">
      <div className="w-full p-4">
        <div className="w-full">
          <h2 className="text-lg">
            Seja bem-vindo, {user?.username}
          </h2>
        </div>
      </div>
    </main>
  )
}

export default Home;