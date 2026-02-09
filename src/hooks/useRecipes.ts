import { useState, useMemo, useEffect } from 'react';
import type { Recipe } from '../types/Recipe';

interface UseRecipesReturn {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  categories: string[];
  activeCategory: string;
  searchQuery: string;
  loading: boolean;
  error: string;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useRecipes = (): UseRecipesReturn => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes`);
        const data = await response.json();
        
        if (response.ok) {
           setRecipes(data.data || []);
        } else {
           setError('Gagal memuat resep');
        }
      } catch (err) {
        setError('Terjadi kesalahan koneksi');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(recipes.map(r => r.category)));
    return ['Semua', ...cats];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    let result = recipes;

    if (activeCategory !== 'Semua') {
      result = result.filter(recipe => recipe.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [recipes, activeCategory, searchQuery]);

  return {
    recipes,
    filteredRecipes,
    categories,
    activeCategory,
    searchQuery,
    loading,
    error,
    setActiveCategory,
    setSearchQuery,
  };
};
