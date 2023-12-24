import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="border-b">
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6">
              <Sidebar />
              <article className="relative py-6 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                <section className="mx-auto w-full min-w-0">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis eos natus deserunt minus, autem amet ullam. Unde,
                    dignissimos velit soluta repellat qui fuga minima ad
                    perspiciatis blanditiis eum. Alias, commodi. Fugit deserunt,
                    natus rerum repellendus praesentium facere eius quam,
                    ducimus minima enim, adipisci earum nihil? Dolorum nulla,
                    provident iste autem ipsum ducimus labore perspiciatis
                    laudantium nemo, ab quas, quaerat sit? Fugiat aspernatur
                    maiores quae hic rerum similique sit, exercitationem,
                    dignissimos totam reiciendis, quis accusamus velit sapiente
                    omnis explicabo rem. Provident, ut nulla! Explicabo, fuga
                    in. Unde reiciendis quod nam itaque. Hic, aspernatur odit
                    ullam voluptate, beatae ut tenetur, dolore rerum voluptatem
                    vel delectus repellat reiciendis! Eligendi sit eaque
                    assumenda consectetur in saepe voluptatibus explicabo
                    voluptates aperiam! Eum vel at nulla!
                  </p>
                </section>
              </article>
            </div>
          </div>
        </main>
        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
              Work in progress - Jesús Montiel
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};
export default App;
