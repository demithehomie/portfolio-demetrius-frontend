import { ChangeEvent, useState } from "react";
import axios from "axios";

function InsertProject() {
  const [formData, setFormData] = useState({
    title: "",
    imageBase64: "",
    text: "",
    whyIsRelevant: "",
    mainChallenges: "",
    repositoryLink: "",
  });


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // You might want to send the formData to the backend here
    try {
      await axios.post("YOUR_NESTJS_ENDPOINT", formData);
        console.log(formData)
    } catch (error) {
      console.log(error)
      console.error(error)
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image = await convertImageToBase64(file);
      setFormData((prevData) => ({ ...prevData, imageBase64: base64Image }));
    }
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
        <h3>Título</h3>
       
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
<br />
<h3>Imagem de Capa</h3>
<input
        type="file"
        name="imageBase64"
        accept="image/*"
        onChange={handleImageChange}
      />

        <h3>Descricao</h3>

     <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
             <h3>Porque eh relevanta?</h3>

<input
   type="text"
   name="whyIsRelevant"
   value={formData.whyIsRelevant}
   onChange={handleChange}
 />

<h3>Principais Desafios</h3>

<input
   type="text"
   name="mainChallenges"
   value={formData.mainChallenges}
   onChange={handleChange}
 />

<h3>Link do Repositório</h3>

<input
   type="text"
   name="repositoryLink"
   value={formData.repositoryLink}
   onChange={handleChange}
 />

 
 

   
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default InsertProject;
