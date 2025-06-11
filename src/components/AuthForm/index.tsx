import { login } from "@/services/auth/login";
import { useUser } from "@/store/useLogin";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const schemaAuth = z.object({
    username: z.string().min(2,{
        message: "Preencha um usuário válido"
    }),
    password: z.string().min(2, "Senha deve ter pelo menos 2 caracteres")
});

type TypeSchemaAuth = z.infer<typeof schemaAuth>

function AuthForm() {
  const form = useForm({
    resolver: zodResolver(schemaAuth),
    defaultValues: {
        username: "",
        password: ""
    }
  });
  const { setUser } = useUser();
  const navigate = useNavigate();

  const submit = async (data: TypeSchemaAuth) => {
    try {
        const response = await login(data.username, data.password);
        const credentials = {
          ...response,
          username: data.username,
          password: data.password
        }
        setUser(credentials);
        navigate("/home");
    }
    catch (error) {
        console.log("erro login");
    }
  }

  return (
    <Form {...form}>
        <FormDescription className="mb-6">
          Faça seu login
        </FormDescription>
        <form onSubmit={form.handleSubmit((data: TypeSchemaAuth) => submit(data))} className="flex flex-col gap-6">
            <FormField 
              name="username" 
              render={({ field }) => (
                <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                        <Input 
                          {...field}
                          placeholder="Seu usuário"
                          type="text" 
                        />
                    </FormControl>
                    <FormDescription className="text-[.7rem]">
                        Preencha um e-mail válido para criar sua conta.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField 
              name="password"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Sua senha" 
                          type="password"
                        />
                    </FormControl>
                    <FormDescription className="text-[.7rem]">
                        Preencha uma senha válida para criar sua conta.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
            />
            <Button 
              className="cursor-pointer" 
              type="submit"
              disabled={form.formState.isSubmitting}
            >
                Login
            </Button>
        </form>
    </Form>
  )
}

export default AuthForm;