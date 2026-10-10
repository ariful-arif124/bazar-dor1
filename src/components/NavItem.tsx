import Link from "next/link";

interface NavItemProps {
  href: string;
  name: string;
  icon?: string;
}

const NavItem = ({
  href,
  name,
  icon,
}: NavItemProps) => {

  return (
    <Link
      href={href}
      className="
        flex
        shrink-0
        items-center
        gap-1.5
        rounded-lg
        px-3
        py-1.5
        text-sm
        font-medium
        text-gray-700
        hover:bg-green-50
        hover:text-green-700
        transition
      "
    >

      {icon && (
        <span className="text-xs">
          {icon}
        </span>
      )}

      <span className="whitespace-nowrap">
        {name}
      </span>

    </Link>
  );
};

export default NavItem;