
import FilterList from "./FilterList";

export default function Filter() {
  return (
    //TODO сделать презентабельный скролл
    <div className="sticky top-[78px] h-[calc(100vh-100px)] overflow-y-auto pr-[--spacing-4]">
      <div className="flex flex-col gap-[--spacing-4]">
        <FilterList/>
      </div>
    </div>
  )
}