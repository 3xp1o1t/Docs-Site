import { ScrollArea } from "@/components/ui/scroll-area";

const PageIndex = () => {
  return (
    <section className="hidden text-sm xl:block">
      <div className="sticky top-16 -mt-10 pt-4">
        <ScrollArea>
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5)] py-12">
            <div className="space-y-2">
              <p className="font-medium">Indice de pagina</p>
              <ul className="m-0 list-none">
                <li className="mt-0 pt-2">Información</li>
                <li className="mt-0 pt-2">Uso</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};
export default PageIndex;
