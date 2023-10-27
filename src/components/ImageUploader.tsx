import  { ChangeEvent, FC } from 'react';

interface ImageUploaderProps {
  onImageUpload: (base64Image: string) => void;
}

export const ImageUploader: FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return <input type="file" onChange={handleImageChange} />;
};
