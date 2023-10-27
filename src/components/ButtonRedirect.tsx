

interface ButtonRedirectProps {
  redirectTo: string;
  buttonText: string;
}

const ButtonRedirect: React.FC<ButtonRedirectProps> = ({ redirectTo, buttonText }) => {
  const handleClick = () => {
    window.location.href = redirectTo;
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default ButtonRedirect;
