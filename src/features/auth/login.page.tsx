import { ROUTES } from "@/shared/model/routes.ts";
import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import {LoginForm} from "@/features/auth/ui/login-form";




function LoginPage() {
  return (
     <AuthLayout
         title="Вход в систему"
         description="Введите свои учетные данные для входа в систему."
         form={<LoginForm/>}
         footerText={
         <>
              Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
         </>
         }
      />
  );
}

export const Component = LoginPage;



