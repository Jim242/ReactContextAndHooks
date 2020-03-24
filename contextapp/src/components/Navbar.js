import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                // Destructuring to get them as individual const
                const { isLightTheme, light, dark } = context;
                // ternary
                const theme = isLightTheme ? light : dark;
                return(
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}</ThemeContext.Consumer>
        );
    }
}

export default Navbar;