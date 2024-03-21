import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CenterContainer,
  ControlWrapper,
  FormContainer,
  Banner,
  Label,
  SubmitButton,
  Text,
  TextInput,
  View,
  useFormInput
} from "reso-ui";

import "./Auth.scss";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import { clearAuthErrors, loginUser } from "../../state/auth/slice";
import { UserLogin } from "../../state/auth/types";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    value: emailValue,
    setValue: setEmailValue,
    error: emailValueError,
    setError: setEmailValueError
  } = useFormInput<string>(
    localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_PAGE.email) || ""
  );

  const {
    value: passwordValue,
    setValue: setPasswordValue,
    error: passwordValueError,
    setError: setPasswordValueError
  } = useFormInput<string>("");

  const handFormSubmit = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.LOGIN_PAGE.email, emailValue);
    dispatch(clearAuthErrors());
    const userData: UserLogin = {
      email: emailValue,
      password: passwordValue
    };
    dispatch(loginUser(userData));
  };

  const { loading, isAuthenticated, loggedInUser, error } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (loggedInUser && typeof loggedInUser._id === "string") {
      navigate("/mypage");
    }
  }, [loggedInUser, isAuthenticated, navigate]);

  const labelWidth = "142px";
  return (
    <>
      {error && <Banner type="error" text={error} />}
      <View pt={8}>
        <CenterContainer maxWidth={540}>
          <Text Element="h1" size={5} mb={7} ml={2}>
            Log In
          </Text>
          <FormContainer
            onSubmit={handFormSubmit}
            rootClassName="auth_form_container"
          >
            <ControlWrapper mb={6}>
              <Label
                htmlFor="loginPage_emailInput"
                label="Email"
                required
                rootStyles={{ width: labelWidth }}
              />
              <TextInput
                id="loginPage_emailInput"
                required
                type="text"
                value={emailValue}
                onChange={(val) => setEmailValue(val as string)}
                error={emailValueError || undefined}
                setError={setEmailValueError}
              />
            </ControlWrapper>
            <ControlWrapper mb={6}>
              <Label
                htmlFor="loginPage_passwordInput"
                label="Password"
                required
                rootStyles={{ width: labelWidth }}
              />
              <TextInput
                id="loginPage_passwordInput"
                required
                type="password"
                value={passwordValue}
                onChange={(val) => setPasswordValue(val as string)}
                error={passwordValueError || undefined}
                setError={setPasswordValueError}
              />
            </ControlWrapper>
            <SubmitButton />
          </FormContainer>
        </CenterContainer>
      </View>
    </>
  );
};

export default LoginPage;
