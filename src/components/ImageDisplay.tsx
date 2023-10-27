import { useEffect, useState, FC } from 'react';

interface ImageDisplayProps {
  imageUrl: string;
}

export const ImageDisplay: FC<ImageDisplayProps> = ({ imageUrl }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(imageUrl);
        const data = await response.json();
        setImage(data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [imageUrl]);

  return image ? <img src={image} alt="Uploaded" /> : <p>Loading...</p>;
};
