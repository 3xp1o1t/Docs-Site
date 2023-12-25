import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ListFilter } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const components = Array.from({ length: 50 }).map(
  (_, i, a) => `Component ${a.length - i}`,
);

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="mr-2 px-0 text-base md:hidden">
          <ListFilter className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px] pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-4rem)] pb-10 pl-6">
          <div className="w-full">
            <h1 className="mb-1 rounded-md px-2 text-sm font-semibold">
              Componentes
            </h1>
          </div>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {components.map((component) => (
              <a
                href={"http://localhost:5173/" + component}
                key={component}
                className="px-2 py-1 hover:underline"
              >
                {component}
              </a>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
