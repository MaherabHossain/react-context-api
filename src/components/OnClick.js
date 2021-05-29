export default function OnClick({count,incrementCount}) {
    return(
        <div>
            <button onClick={incrementCount}>Clicked {count} time</button>
        </div>
    )    
}