import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createUser } from "@/services/user/createUser";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schemaFormCreateUser = z.object({
    email: z.string().email({
        message: "Preencha um e-mail válido"
    }),
    username: z.string().min(2, "Nome de usuário deve ter pelo menos 2 caracteres"),
    password: z.string().min(2, "Senha deve ter pelo menos 2 caracteres").max(10, "Senha deve ter no máximo 10 caracteres")
});

type FormCreateUser = z.infer<typeof schemaFormCreateUser>

const CreateUserForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(schemaFormCreateUser),
    defaultValues: {
        email: "",
        username: "",
        password: ""
    }
  });

  const submit = async (data: FormCreateUser) => {
    const { email, username, password } = data;
    try {
        const response = await createUser(email, username, password);
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
  }

  return (
    <Form {...form}>
        <FormDescription className="mb-6">
          Crie sua conta
        </FormDescription>
        <form 
          onSubmit={form.handleSubmit(submit)} 
          className="flex flex-col gap-6"
        >
            <FormField 
              name="email" 
              render={({ field }) => (
                <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                        <Input 
                          type="email"
                          placeholder="E-mail"
                          {...field} 
                        />
                    </FormControl>
                    <FormDescription>
                        Seu melhor e-mail
                    </FormDescription>
                    <FormMessage />
                </FormItem>
              )} 
            />
            <FormField 
              name="username" 
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Nome de usuário</FormLabel>
                    <FormControl>
                        <Input 
                          type="text"
                          placeholder="Nome usuário"
                          {...field} 
                        />
                    </FormControl>
                    <FormDescription>
                        Insira um nome de usuário
                    </FormDescription>
                    <FormMessage />
                </FormItem>
              )} 
            />
            <FormField 
              name="password" 
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                        <Input 
                          type="password" 
                          {...field} 
                        />
                    </FormControl>
                    <FormDescription>
                        Sua melhor senha
                    </FormDescription>
                    <FormMessage />
                </FormItem>
              )} 
            />
            <Button className="cursor-pointer" type="submit">
                Criar conta
            </Button>
        </form>
        <div className="w-full mt-5">
          <div className="w-full text-center flex flex-col gap-4">
            <Separator />
            <span className="w-full">Ou</span>
            <Separator />
          </div>
          <Button onClick={() => navigate("/login")} className="mt-5 w-full bg-blue-500 hover:bg-blue-700 cursor-pointer">
            Fazer Login
          </Button>
        </div>
    </Form>
  )
}

export default CreateUserForm;