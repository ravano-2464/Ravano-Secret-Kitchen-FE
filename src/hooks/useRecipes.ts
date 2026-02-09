import { useState, useMemo } from 'react';
import { recipes, categories } from '../data/recipes';
import type { Recipe } from '../data/recipes';

interface UseRecipesReturn {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  categories: string[];
  activeCategory: string;
  searchQuery: string;
  loading: boolean;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useRecipes = (): UseRecipesReturn => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading] = useState(false);

  const filteredRecipes = useMemo(() => {
    let result = recipes;

    // Filter by category
    if (activeCategory !== 'Semua') {
      result = result.filter(recipe => recipe.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return {
    recipes,
    filteredRecipes,
    categories,
    activeCategory,
    searchQuery,
    loading,
    setActiveCategory,
    setSearchQuery,
  };
};
