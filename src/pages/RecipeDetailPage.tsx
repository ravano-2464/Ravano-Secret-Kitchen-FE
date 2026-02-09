import { ArrowLeft, Clock, Users, Lightbulb } from 'lucide-react';
import { useRecipeDetail } from '../hooks/useRecipeDetail';
import './RecipeDetailPage.css';

export const RecipeDetailPage = () => {
    const { recipe, activeTab, loading, setActiveTab, goBack } = useRecipeDetail();

    if (loading) {
        return (
            <div className="detail-loading">
                <p>Loading...</p>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="detail-not-found">
                <p>Resep tidak ditemukan</p>
                <button onClick={goBack}>Kembali</button>
            </div>
        );
    }

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
        <div className="detail-page">
            <header className="detail-header">
                <button className="back-button" onClick={goBack}>
                    <ArrowLeft size={18} />
                    <span>Kembali</span>
                </button>
            </header>

            <main className="detail-main">
                <div className="detail-image">
                    <img src={recipe.image} alt={recipe.title} />
                </div>

                <div className="detail-content">
                    <div className="detail-badges">
                        <span className="badge badge-category">{recipe.category}</span>
                        <span className={`badge badge-difficulty ${getDifficultyClass(recipe.difficulty)}`}>
                            {recipe.difficulty}
                        </span>
                    </div>

                    <h1 className="detail-title">{recipe.title}</h1>
                    <p className="detail-description">{recipe.description}</p>

                    <div className="detail-meta">
                        <span className="meta-item">
                            <Clock size={16} />
                            {recipe.time}
                        </span>
                        <span className="meta-item">
                            <Users size={16} />
                            {recipe.portions}
                        </span>
                    </div>

                    <div className="detail-tabs">
                        <button
                            className={`tab-button ${activeTab === 'ingredients' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ingredients')}
                        >
                            Bahan-bahan
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'instructions' ? 'active' : ''}`}
                            onClick={() => setActiveTab('instructions')}
                        >
                            Cara Membuat
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'video' ? 'active' : ''}`}
                            onClick={() => setActiveTab('video')}
                        >
                            Video Tutorial
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'ingredients' && (
                            <div className="ingredients-section">
                                <div className="section-card">
                                    <h3 className="section-title">
                                        <span className="section-icon">🧂</span>
                                        Bahan-bahan
                                    </h3>
                                    <ul className="ingredients-list">
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tips-card">
                                    <h3 className="tips-title">
                                        <Lightbulb size={18} />
                                        Tips & Trik
                                    </h3>
                                    <ul className="tips-list">
                                        {recipe.tips.map((tip, index) => (
                                            <li key={index}>{tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'instructions' && (
                            <div className="instructions-section">
                                <div className="section-card">
                                    <h3 className="section-title">
                                        <span className="section-icon">📝</span>
                                        Cara Membuat
                                    </h3>
                                    <ol className="instructions-list">
                                        {recipe.instructions.map((instruction, index) => (
                                            <li key={index}>{instruction}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        )}

                        {activeTab === 'video' && (
                            <div className="video-section">
                                <div className="section-card">
                                    <p className="video-placeholder">
                                        Video tutorial belum tersedia untuk resep ini.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};
