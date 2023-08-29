import React from "react";
import { cn } from "~/lib/utils";
import { Link } from "@remix-run/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export function Header() {
  return (
    <header>
      <NavigationMenu>
        <NavigationMenuList>
          <DropdownMenuItem itemText="Getting Started" />
          <DropdownMenuItem itemText="Components" />
          <StandaloneMenuItem itemText="Documentation" />
          <DropdownMenuItem itemText="About Us" />
          <DropdownMenuItem itemText="Articles" />
          <DropdownMenuItem itemText="Contact Us" />
          <StandaloneMenuItem itemText="Login" />
          <DropdownMenuItem itemText="Legal" />
          <DropdownMenuItem itemText="Privacy" />
          <StandaloneMenuItem itemText="Padding" />
          <StandaloneMenuItem itemText="Margin" />
          <DropdownMenuItem itemText="Border" />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function DropdownMenuItem({ itemText }: { itemText: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{itemText}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {DROPDOWN_ITEM_DATA.map((component) => (
            <ListItem
              key={`${itemText}${component.title}`}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function StandaloneMenuItem({ itemText }: { itemText: string }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link to="/" className={navigationMenuTriggerStyle()}>
          {itemText}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

const DROPDOWN_ITEM_DATA: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href || "/"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
