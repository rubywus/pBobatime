import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import LogInUI from "./LogIn.presenter";
import { LOGIN_USER } from "./LogIn.queries";
import { GlobalContext } from "../../../../pages/_app";

export default function LogIn() {

    const { setAccessToken } = useContext(GlobalContext);
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginUser] = useMutation(LOGIN_USER);

	function onChangeEmail(event) {
		setEmail(event.target.value);
	}
	function onChangePassword(event) {
		setPassword(event.target.value);
	}
	async function onClickLogin() {
		const result = await loginUser({
			variables: { email, password },
		});
		localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
		setAccessToken(result.data?.loginUser.accessToken);
        router.push("/boards/list");
	}
    function onClickSignUp() {
        router.push(`/signup`)
    }


    return (
        <LogInUI
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onClickLogin={onClickLogin}
            onClickSignUp={onClickSignUp}
        />
    )
}