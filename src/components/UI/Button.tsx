import clsx from "clsx";

interface BtnType {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    btnIcon?: boolean;
    className?: string;
}

export default function Button({ children, onClick, btnIcon, className }: BtnType) {
    return (
        // <button onClick={onClick} className={btnIcon ? 'iconCustom' : 'btnCustom' }>{children}</button>
        <button onClick={onClick} className={clsx(
        
            btnIcon ? 'iconCustom' : 'btnCustom',
            className,
        )}>{children}</button>
    )
}