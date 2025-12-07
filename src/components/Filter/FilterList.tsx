'use client';

import { useState } from 'react';
import { Plus, Minus } from '../UI/icons';
import { filterData } from '@/data/filterData';
import FilterBlockItem from './FilterBlockItem';

const renderContent = (blockId: string) => {
  // далее логика под конкретный блок
  switch (blockId) {
    case 'sortBy':
      return (
        <div className="space-y-1">
          {filterData.sorting.map(sort => (
            <div key={sort.id}>{sort.label}</div>
          ))}
        </div>
      );
    case 'color':
      return (
        <div className="space-y-1">
          {filterData.commonFilters.color.options.map(color => (
            <div key={color}>{color}</div>
          ))}
        </div>
      );
    case 'size':
      return (
        <div className="space-y-1">
          {filterData.commonFilters.size.options.map(size => (
            <div key={size}>{size}</div>
          ))}
        </div>
      );
    default:
      return <div>Содержимое недоступно</div>;
  }
};

export default function FilterBlock() {
  const [openBlocks, setOpenBlocks] = useState<Set<string>>(new Set());

  const toggleBlock = (blockId: string) => {
    setOpenBlocks(prev => {
      const newSet = new Set(prev);
      newSet.has(blockId) ? newSet.delete(blockId) : newSet.add(blockId);
      return newSet;
    });
  };

  return (
    <>
      {filterData.sortingBlocks.map((block) => (
        <div
          key={block.id}
          className="border border-solid border-[--accent-brown]"
        >
          <button
            className="w-full"
            onClick={() => toggleBlock(block.id)}
          >
            <FilterBlockItem title={block.label}>
              {openBlocks.has(block.id) ? <Minus /> : <Plus className="text-[--text-secondary-white]" />}
            </FilterBlockItem>
          </button>

          {openBlocks.has(block.id) && (
            <div className="p-[--spacing-2]">
              {renderContent(block.id)}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

// 'use client'

// import { useState } from "react";
// import { Minus, Plus } from "../UI/icons";
// import { filterData } from '@/data/filterData'
// import FilterBlockItem from "./FilterBlockItem";

// export default function FilterList() {
//     const [filterOpen, setFilterOpen] = useState(false)
//     const handleFilterOpen = () => {
//         setFilterOpen(prev => !prev)
//     }
//     return (
//         <>
//             {
//                 filterData.sortingBlocks.map((block) => <div className="border-[1px] border-solid border-[--accent-brown]">
//                     <button className="w-full " onClick={handleFilterOpen}>
//                         <FilterBlockItem key={block.id} title={block.label}>
//                             {filterOpen ? <Minus /> : <Plus className="text-[--text-secondary-white]" />}
//                         </FilterBlockItem>
//                     </button>
//                     {filterOpen && <div className="p-[--spacing-2]"><div>fghdihfgihfd</div>
//                         <div>fghdihfgihfd</div>
//                         <div>fghdihfgihfd</div></div>}
//                 </div>)
//             }
//         </>
//     )
// }