

export default function Button({children, onClick, btnIcon}){
    return (
        <button onClick={onClick} className={btnIcon ? 'iconCustom' : 'btnCustom'}>{children}</button>
    )
}