import { SideNavbar } from "./components/SideNavbar";

function App() {
  return (
    <section className="h-screen bg-slate-100 lg:px-8 lg:py-4 xl:px-16 xl:py-8 dark:bg-slate-900">
      <div className="grid h-full overflow-hidden bg-white md:grid-cols-[auto_1fr] lg:rounded-bl-3xl lg:rounded-tl-3xl dark:bg-slate-800">
        <SideNavbar />
      </div>
    </section>
  );
}
export default App;
