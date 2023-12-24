import { ScrollArea } from "@/components/ui/scroll-area";

const components = Array.from({ length: 50 }).map(
  (_, i, a) => `Component ${a.length - i}`,
);
const Sidebar = () => {
  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full py-6 pr-6 lg:py-8">
        <div className="w-full">
          <h1 className="mb-1 rounded-md px-2 text-sm font-semibold">
            Componentes
          </h1>
        </div>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {components.map((component) => (
            <a href="#" key={component} className="px-2 py-1 hover:underline">
              {component}
            </a>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
export default Sidebar;
