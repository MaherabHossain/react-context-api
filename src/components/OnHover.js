
export default function OnHover({count,incrementCount,theme,switchTheme}) {
    return(
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} time {theme}</h1>
            <button onClick={switchTheme}>Switch theme</button>
        </div>
    )    
}