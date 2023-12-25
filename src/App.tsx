import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import MainContent from "./components/main-content";
import PageIndex from "./components/page-index";
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
              <article className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                <MainContent />
                <PageIndex />
              </article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;
