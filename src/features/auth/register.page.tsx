import {AuthLayout} from "@/features/auth/ui/auth-layout";
import {Link} from "react-router-dom";
import {ROUTES} from "@/shared/model/routes.ts";
import {RegisterForm} from "@/features/auth/ui/register-form.tsx";

function RegisterPage() {
  return (
      <AuthLayout
          title="Вход в систему"
          description="Введите свои учетные данные для входа в систему."
          form={<RegisterForm />}
          footerText={
            <>
              Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
            </>
          }
      />
  );
}

export const Component = RegisterPage;
