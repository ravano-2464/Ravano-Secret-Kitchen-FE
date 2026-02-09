import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipes } from '../hooks/useRecipes';
import './HomePage.css';

export const HomePage = () => {
    const {
        filteredRecipes,
        categories,
        activeCategory,
        searchQuery,
        setActiveCategory,
        setSearchQuery,
    } = useRecipes();

    return (
        <div className="home-page">
            <Navbar />

            <main className="home-main">
                <section className="home-hero">
                    <h1 className="home-title">Jelajahi Resep Masakan</h1>
                    <p className="home-subtitle">
                        Temukan berbagai resep masakan Indonesia untuk keluarga dan usaha Anda
                    </p>

                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                        placeholder="Cari resep..."
                    />
                </section>

                <section className="home-content">
                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onSelect={setActiveCategory}
                    />

                    <div className="recipe-grid">
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>

                    {filteredRecipes.length === 0 && (
                        <div className="no-results">
                            <p>Tidak ada resep yang ditemukan</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};
