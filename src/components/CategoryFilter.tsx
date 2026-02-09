import './CategoryFilter.css';

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onSelect }: CategoryFilterProps) => {
    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category-button ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => onSelect(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};
