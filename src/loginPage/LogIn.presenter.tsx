import { Box, LoginButton, Wrapper } from "./LogIn.styles";

export default function LogInUI(props) {
    return (
        <Wrapper>
            <Box type="text" onChange={props.onChangeEmail} placeholder="이메일을 입력해주세요."/><br />
			<Box type="password" onChange={props.onChangePassword} placeholder="비밀번호를 입력해주세요."/><br />
			
            <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
            <LoginButton onClick={props.onClickSignUp}>회원가입하기</LoginButton>
        </Wrapper>
    )
}