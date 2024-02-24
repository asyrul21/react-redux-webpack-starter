import React from "react";
import { useAppDispatch } from "../../state/stateHooks";
import {
  CenterContainer,
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
import { registerUser } from "../../state/auth/slice";

const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const {
    value: emailValue,
    setValue: setEmailValue,
    error: emailValueError,
    setError: setEmailValueError,
  } = useFormInput<string>("");

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
  } = useFormInput<string>("");

  const {
    value: planValue,
    setValue: setPlanValue,
    error: planValueError,
    setError: setPlanValueError,
  } = useFormInput<string>("");

  const {
    value: acceptedTOC,
    setValue: setAcceptedTOC,
    error: acceptedTOCError,
    setError: setAcceptedTOCError,
  } = useFormInput<boolean>(false);

  const handFormSubmit = () => {
    const userData: UserRegistration = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      acceptedTOC,
      subscriptionPlan: planValue,
    };
    console.log(userData);

    dispatch(registerUser(userData));
  };

  const disableSubmit =
    !!nameValueError ||
    !!passwordValueError ||
    !!emailValueError ||
    // !!confirmPasswordValueError ||
    !!planValueError;
  const labelWidth = "142px";
  return (
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
              type="text"
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
              error={passwordValueError || undefined}
              setError={setPasswordValueError}
            />
          </ControlWrapper>
          {/*
           * TO FIX
           */}
          {/* <ControlWrapper mb={6}>
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
              error={confirmPasswordValueError || undefined}
              setError={setConfirmPasswordValueError}
              customValidators={(function (pass) {
                return {
                  validationFn: (val) => {
                    console.log("password:", passwordValue);

                    if (!val) return true;
                    if (typeof val === "string" && val === pass) {
                      return true;
                    }
                    return false;
                  },
                  errorMessage: "Your passwords do not match",
                };
              })(passwordValue)}
            />
          </ControlWrapper> */}
          {/* <ControlWrapper mb={6}>
            <Checkbox
              id="registerPage_toc"
              type="password"
              value={passwordValue}
              onChange={(val) => setPasswordValue(val as string)}
              error={passwordValueError || undefined}
              setError={setPasswordValueError}
            />
          </ControlWrapper> */}
          {/*
           * TODO: Dropdown
           */}
          <SubmitButton disabled={disableSubmit} />
        </FormContainer>
      </CenterContainer>
    </View>
  );
};

export default RegisterPage;
