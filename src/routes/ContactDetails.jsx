import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  // 6 - redirect
  const navigate = useNavigate();

  const handleContact = () => {
    alert(`Mensgem enviada para o contato ${id}!`);
    return navigate("/");
  };

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContact} style={{ border: "1px solid #000" }}>
        Enviar mensagem
      </button>
    </div>
  );
};

export default ContactDetails;
