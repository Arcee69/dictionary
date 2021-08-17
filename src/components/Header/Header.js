import React from 'react';
import {
    createTheme,
    TextField,
    ThemeProvider,
    MenuItem
} from '@material-ui/core';
import categories from "../../data/category";
import './Header.css';

const Header = ({ setCategory, category, word, setWord, lightMode }) => {
    //Dark theme palette from Material UI
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : '#fff',
            },
            type: lightMode ? "light" : 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }
    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search"
                        label="Search a Word" 
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />

                    <TextField 
                        className="select"                       
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
