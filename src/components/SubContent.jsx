import './SubContent.css';

export default function SubContent({number, children}){

    const isEven = number % 2 === 0;
    const bgColor = isEven ? '#02448E' : 'white';

    return (
        <>
        <div className="SubContent" style = {{backgroundColor: bgColor}}>
                {children}
        </div>
        </>

    )
    }