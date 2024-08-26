import React, { useState } from "react";
import './styles.css';

export default function SearchInput() {
    const [search, setSearch] = useState<string>('');
    
    return (
        <input 
            type="text" 
            placeholder="Digite o que você procura" 
            className="search-input" 
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    )
}