interface FilterBlockItemType {
    children: React.ReactNode,
    title: string,
}

export default function FilterBlockItem({ children, title }: FilterBlockItemType) {

    return (
        <div className="flex justify-between items-center bg-[--accent-brown] text-[--text-secondary-white] p-[--spacing-2] hover">
                <p>{title}</p>
            {children}
        </div>
    )
}