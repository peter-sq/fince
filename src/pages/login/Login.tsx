import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import image from '../../assets/phone-preview.png';
import logo from '../../assets/logo.png';
import {
  PageWrapper,
  LoginContainer,
  LeftPanel,
  RightPanel,
  PhoneContainer,
  LogoContainer,
  PhoneImageWrapper,
  FormContainer,
  Title,
  InputField,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  ForgotPassword
} from './login.styles';
import React from 'react';


const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      navigate("/dashboard")
    }
  };

  return (
    <PageWrapper>
      <LoginContainer>
        <LeftPanel>
          <LogoContainer>
            <img src={logo} alt="App logo" />
          </LogoContainer>
          <PhoneContainer>
            <PhoneImageWrapper>
              <img src={image} alt="Phone preview" />
            </PhoneImageWrapper>
          </PhoneContainer>
        </LeftPanel>

        <RightPanel>
          <FormContainer>
            <Title>Sign In</Title>
            
            <form onSubmit={handleSubmit}>
              <InputField>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </InputField>
              
              <InputField>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </InputField>
              
              <SubmitButton type="submit">
                Sign In
              </SubmitButton>

              <ForgotPassword>
                <a href="/forgot-password">Forgot your password?</a>
              </ForgotPassword>
            </form>
          </FormContainer>
        </RightPanel>
      </LoginContainer>
    </PageWrapper>
  );
};