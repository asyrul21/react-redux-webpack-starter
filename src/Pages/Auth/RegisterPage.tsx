import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import {
  Banner,
  CenterContainer,
  Checkbox,
  ControlWrapper,
  FormContainer,
  Label,
  SubmitButton,
  Text,
  TextInput,
  View,
  useFormInput,
} from "reso-ui";
import { UserRegistration } from "../../state/auth/types";
import { clearAuthErrors, registerUser } from "../../state/auth/slice";
import { LOCAL_STORAGE_KEYS } from "../../constants/LocalStorageKeys";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    value: emailValue,
    setValue: setEmailValue,
    error: emailValueError,
    setError: setEmailValueError,
  } = useFormInput<string>(
    localStorage.getItem(LOCAL_STORAGE_KEYS.REGISTER_PAGE.email) || ""
  );

  const {
    value: passwordValue,
    setValue: setPasswordValue,
    error: passwordValueError,
    setError: setPasswordValueError,
  } = useFormInput<string>("");

  const {
    value: confirmPasswordValue,
    setValue: setConfirmPasswordValue,
    error: confirmPasswordValueError,
    setError: setConfirmPasswordValueError,
  } = useFormInput<string>("");

  const {
    value: nameValue,
    setValue: setNameValue,
    error: nameValueError,
    setError: setNameValueError,
  } = useFormInput<string>(
    localStorage.getItem(LOCAL_STORAGE_KEYS.REGISTER_PAGE.name) || ""
  );

  const {
    value: acceptedTOC,
    setValue: setAcceptedTOC,
    error: acceptedTOCError,
    setError: setAcceptedTOCError,
  } = useFormInput<boolean>(false);

  const handFormSubmit = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.REGISTER_PAGE.email, emailValue);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REGISTER_PAGE.name, nameValue);

    dispatch(clearAuthErrors());
    const userData: UserRegistration = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      acceptedTOC,
    };
    dispatch(registerUser(userData));
  };

  const { loading, isAuthenticated, loggedInUser, error } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (loggedInUser && typeof loggedInUser._id === "string") {
      navigate("/protected");
    }
  }, [loggedInUser?._id, isAuthenticated]);

  const disableSubmit =
    !acceptedTOC ||
    !!nameValueError ||
    !!passwordValueError ||
    !!emailValueError ||
    !!confirmPasswordValueError;
  const labelWidth = "142px";
  return (
    <>
      {error && <Banner type="error" text={error} />}
      <View pt={8}>
        <CenterContainer maxWidth={540}>
          <Text Element="h1" size={5} mb={7} ml={2}>
            Join Us
          </Text>
          <FormContainer
            onSubmit={handFormSubmit}
            rootClassName="auth_form_container"
          >
            <ControlWrapper mb={6}>
              <Label
                htmlFor="registerPage_nameInput"
                label="Name"
                required
                rootStyles={{ width: labelWidth }}
              />
              <TextInput
                id="registerPage_nameInput"
                required
                type="text"
                value={nameValue}
                onChange={(val) => setNameValue(val as string)}
                error={nameValueError || undefined}
                setError={setNameValueError}
              />
            </ControlWrapper>
            <ControlWrapper mb={6}>
              <Label
                htmlFor="registerPage_emailInput"
                label="Email"
                required
                rootStyles={{ width: labelWidth }}
              />
              <TextInput
                id="registerPage_emailInput"
                required
                type="email"
                value={emailValue}
                onChange={(val) => setEmailValue(val as string)}
                error={emailValueError || undefined}
                setError={setEmailValueError}
              />
            </ControlWrapper>
            <ControlWrapper mb={6}>
              <Label
                htmlFor="registerPage_passwordInput"
                label="Password"
                required
                rootStyles={{ width: labelWidth }}
              />
              <TextInput
                id="registerPage_passwordInput"
                required
                type="password"
                value={passwordValue}
                onChange={(val) => setPasswordValue(val as string)}
                error={passwordValueError}
                setError={setPasswordValueError}
              />
            </ControlWrapper>

            <ControlWrapper mb={6}>
              <Label
                htmlFor="registerPage_confirmPasswordInput"
                label="Confirm Password"
                required
                rootStyles={{ width: labelWidth }}
              />
              <TextInput
                id="registerPage_confirmPasswordInput"
                required
                type="password"
                value={confirmPasswordValue}
                onChange={(val) => setConfirmPasswordValue(val as string)}
                error={confirmPasswordValueError}
                setError={setConfirmPasswordValueError}
                customValidators={{
                  validationFn: (val) => {
                    if (!val) return true;
                    if (typeof val === "string" && val === passwordValue) {
                      return true;
                    }
                    return false;
                  },
                  errorMessage: "Your passwords do not match",
                }}
              />
            </ControlWrapper>
            <ControlWrapper mb={6}>
              <Checkbox
                id="registerPage_toc"
                required
                rootStyles={{ marginRight: "0" }}
                value={acceptedTOC}
                onChange={(val) => setAcceptedTOC(val)}
                error={acceptedTOCError}
                setError={setAcceptedTOCError}
                inputStyles={{ marginRight: "42px" }}
              >
                By checking this box, I agree to the Terms and Conditions of
                using this web application.
              </Checkbox>
            </ControlWrapper>

            <SubmitButton disabled={disableSubmit} />
          </FormContainer>
        </CenterContainer>
      </View>
    </>
  );
};

export default RegisterPage;
