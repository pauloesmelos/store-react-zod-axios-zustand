import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schemaFormCreateUser = z.object({
    email: z.string().email({
        message: "Preencha um e-mail válido"
    }),
    username: z.string().min(2, "Nome de usuário deve ter pelo menos 2 caracteres"),
    password: z.string().min(2, "Senha deve ter pelo menos 2 caracteres").max(10, "Senha deve ter no máximo 10 caracteres")
});

type FormCreateUser = z.infer<typeof schemaFormCreateUser>

const CreateUserForm = () => {
  const form = useForm({
    resolver: zodResolver(schemaFormCreateUser),
    defaultValues: {
        email: "",
        username: "",
        password: ""
    }
  });
  const submit = (data: FormCreateUser) => {
    console.log(data);
  }

  return (
    <Form {...form}>
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
            <Button type="submit">
                Criar conta
            </Button>
        </form>
    </Form>
  )
}

export default CreateUserForm;