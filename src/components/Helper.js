import OnHover from './OnHover'
import Counter from './Counter'
import ThemeContext from './Context/ThemeContex'
import { useContext } from 'react'
export default function Helper() {

    const context = useContext(ThemeContext);

    const {theme,switchTheme} = context
    return(
        <div>
            <h1>i am from healper</h1>
            <Counter>
                {(count,incrementCount)=>(                      
                    <OnHover 
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    )    
}

// for class component

// Helper.contextType = ThemeContext;

