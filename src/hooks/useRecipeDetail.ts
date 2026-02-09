import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';
import type { Recipe } from '../data/recipes';

type TabType = 'ingredients' | 'instructions' | 'video';

interface UseRecipeDetailReturn {
  recipe: Recipe | null;
  activeTab: TabType;
  loading: boolean;
  setActiveTab: (tab: TabType) => void;
  goBack: () => void;
}

export const useRecipeDetail = (): UseRecipeDetailReturn => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('ingredients');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundRecipe = recipes.find(r => r.id === id);
    setRecipe(foundRecipe || null);
    setLoading(false);
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return {
    recipe,
    activeTab,
    loading,
    setActiveTab,
    goBack,
  };
};
