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
        <div className={selected ? "font-bold text-darkpink" : undefined}>
          {itemName}
        </div>
      </button>
    </li>
  );
}
