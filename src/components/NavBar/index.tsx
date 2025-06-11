import { useUser } from "@/store/useLogin";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function NavBar() {
  const { user, clearUser } = useUser();
  const navigate = useNavigate();

  return (
    <header className="w-full bg-black shadow-md">
        <nav className="w-full max-w-[1500px] mx-auto px-6 py-4">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-white font-bold text-lg">Store Brazil</h1>
                <div className="flex items-center gap-6">
                  { user?.username && user?.password ? (
                    <>
                      <Button className="cursor-pointer">
                        Perfil
                      </Button>
                      <Button 
                        onClick={() => clearUser()} 
                        className="bg-rose-500 hover:bg-rose-500 cursor-pointer"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                   <>
                    <Button onClick={() => navigate("/")} className="cursor-pointer">
                      Cadastrar
                    </Button>
                    <Button onClick={() => navigate("/login")} className="bg-emerald-500 hover:bg-emerald-500 cursor-pointer">
                      Login
                    </Button>
                   </>
                  )}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar;