import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/services/auth/login";

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

  const submit = async (credentials: TypeSchemaAuth) => {
    const { username, password } = credentials;
    try {
        await login(username, password);
        console.log("sucess login");
    }
    catch (error) {
        console.log("erro login");
    }
  }

  return (
    <Form {...form}>
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
                    <FormDescription>
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
                    <FormDescription>
                        Preencha uma senha válida para criar sua conta.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
            />
            <Button className="cursor-pointer" type="submit">
                Enviar
            </Button>
        </form>
    </Form>
  )
}

export default AuthForm;