import styled, {css} from 'styled-components';


export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 1280px;
  height: 832px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

export const LeftPanel = styled.div`
  width: 40%;
  background-color: #F8F2DC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    min-height: 300px;
    background-color: white;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  max-width: 200px;
  margin-bottom: 40px;
  
  img {
    width: 50%;
    height: auto;
  }
`;

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

export const PhoneImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: -40px; 

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightPanel = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px; 
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 2.5rem;
  color: #0A090B;
  margin-right: 22rem;
  text-align: center;
  font-weight: 600;
  font-family: 'Satoshi', sans-serif;
`;

export const InputField = styled.div`
  margin-bottom: 2rem;
  width: 312px;
  font-family:sans-serif;
  font-weight: 500;
  color: #09090B;
  line-height: 24px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: block;
`;

export const SubmitButton = styled.button`
  width: 335px;
  padding: 16px;
  background-color: #7000F6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #7000F6;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

