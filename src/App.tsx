import { Filters } from "./components/Filters";
import { SideNavbar } from "./components/SideNavbar";
import { TopNavbar } from "./components/TopNavbar";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { isDarkMode } = useGlobalContext();
  return (
    <section
      className={`h-screen bg-slate-100 lg:px-8 lg:py-4 xl:px-16 xl:py-8 dark:bg-slate-900 ${isDarkMode ? "dark" : ""}`}
    >
      <div className="grid h-full overflow-hidden bg-white md:grid-cols-[auto_1fr] lg:rounded-bl-3xl lg:rounded-tl-3xl dark:bg-slate-800">
        <SideNavbar />
        <div className="overflow-y-auto bg-slate-200 dark:bg-slate-700">
          <div className="sticky left-0 top-0 z-50 bg-slate-200  dark:bg-slate-700">
            <TopNavbar />
            <div className="px-2 py-3 sm:px-5">
              <h1 className="mb-4 hidden text-2xl font-semibold sm:block dark:text-slate-50">
                Dashboard
              </h1>
              <Filters />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
