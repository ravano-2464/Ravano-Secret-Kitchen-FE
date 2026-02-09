import { Search } from 'lucide-react';
import './SearchBar.css';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = 'Cari resep...' }: SearchBarProps) => {
    return (
        <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="search-input"
            />
        </div>
    );
};
