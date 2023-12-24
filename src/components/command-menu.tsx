import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CommandItemType } from "@/types/command-item";
import { useEffect, useState } from "react";

type CommandMenuProps = {
  commandItems: CommandItemType[];
  shorcutKey: string;
};

export function CommandMenu({
  commandItems,
  shorcutKey = "s",
}: Readonly<CommandMenuProps>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === shorcutKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [shorcutKey]);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {commandItems?.map((item) => (
              <CommandItem key={item.id}>{item.name}</CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <Button
        asChild
        variant={"outline"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-sm font-medium text-foreground/60">
          Search...
          <kbd className="ml-4 hidden rounded border bg-muted p-1 font-mono text-[10px] font-medium text-foreground/60 sm:flex">
            Ctrl + {shorcutKey.toUpperCase()}
          </kbd>
        </span>
      </Button>
    </>
  );
}
