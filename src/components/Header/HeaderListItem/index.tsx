interface HeaderListItemProps {
  handleSelect: (menuItem: number) => void;
  selected: boolean;
  menuItem: number;
  itemName: string;
}

export default function HeaderListItem({
  handleSelect,
  selected,
  menuItem,
  itemName,
}: HeaderListItemProps) {
  return (
    <li>
      <button onClick={() => handleSelect(menuItem)}>
        <div
          className={
            "h-[2.5rem]" && (selected ? "font-bold text-darkpink transition-all duration-300" : undefined)
          }
        >
          <div className="max-h-[27px]">{itemName}</div>

          <span
            className={
              (selected ? "w-[25%]" : undefined) &&
              "content-none bg-darkpink h-[0.3125rem] block ml-[25%] mr-[25%] rounded-[0.625rem] mt-2 transition-colors duration-300 ease-linear"
            }
          />
        </div>
      </button>
    </li>
  );
}
