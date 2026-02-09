import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '../data/recipes';
import './RecipeCard.css';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const getDifficultyClass = (difficulty: string) => {
        switch (difficulty) {
            case 'Mudah':
                return 'badge-difficulty-easy';
            case 'Sedang':
                return 'badge-difficulty-medium';
            case 'Sulit':
                return 'badge-difficulty-hard';
            default:
                return '';
        }
    };

    return (
        <Link to={`/recipe/${recipe.id}`} className="recipe-card">
            <div className="recipe-card-image">
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-card-content">
                <div className="recipe-card-badges">
                    <span className="badge badge-category">{recipe.category}</span>
                    <span className={`badge badge-difficulty ${getDifficultyClass(recipe.difficulty)}`}>
                        {recipe.difficulty}
                    </span>
                </div>
                <h3 className="recipe-card-title">{recipe.title}</h3>
                <p className="recipe-card-description">{recipe.description}</p>
                <div className="recipe-card-meta">
                    <span className="meta-item">
                        <Clock size={14} />
                        {recipe.time}
                    </span>
                    <span className="meta-item">
                        <Users size={14} />
                        {recipe.portions}
                    </span>
                </div>
            </div>
        </Link>
    );
};
