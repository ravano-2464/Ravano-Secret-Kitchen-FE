import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Recipe } from '../types/Recipe';

type TabType = 'ingredients' | 'instructions' | 'video';

interface UseRecipeDetailReturn {
  recipe: Recipe | null;
  activeTab: TabType;
  loading: boolean;
  error: string;
  setActiveTab: (tab: TabType) => void;
  goBack: () => void;
}

export const useRecipeDetail = (): UseRecipeDetailReturn => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('ingredients');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
        if (!id) return;
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes/${id}`);
            const data = await response.json();
            if (response.ok) {
                setRecipe(data.data);
            } else {
                setError('Resep tidak ditemukan');
            }
        } catch (err) {
            setError('Terjadi kesalahan koneksi');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    fetchRecipe();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return {
    recipe,
    activeTab,
    loading,
    error,
    setActiveTab,
    goBack,
  };
};
