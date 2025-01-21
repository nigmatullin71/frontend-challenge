import React, { useEffect, useState } from "react";
import { fetchCats } from "../API/catAPI";
import CatItem from "./Cat";

interface Cat {
  id: string;
  url: string;
}

const CatList: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCats = async () => {
      setLoading(true);
      try {
        const data = await fetchCats(0, 100); 
        setCats(data);
      } catch (err) {
        setError("Не удалось загрузить котиков");
      } finally {
        setLoading(false);
      }
    };

    loadCats();
  }, []);

  if (loading) {
    return <p>Загрузка котиков...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>

    <div className="cat-list">
      {cats.map((cat) => (
        <CatItem key={cat.id} cat={cat} />
      ))}
    </div>
  </div>
  );
};

export default CatList;
