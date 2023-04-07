import DateForm from "./components/date-form/DateForm";
import IconButton from "./components/ui/IconButton/IconButton";
import ArrowIcon from "./components/ui/arrow-icon/ArrowIcon";

function App() {
  return (
    <main class="flex justify-center items-center h-screen">
      <section class="bg-white rounded-3xl rounded-br-[80px] w-11/12 grid-rows-3 py-6 px-3">
        <DateForm />
        <IconButton class="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full active:bg-purple-900">
          <ArrowIcon height="20" width="20" color="white" strokeWidth="4" />
        </IconButton>
        <div>
          <p class="text-5xl font-bold">
            <span class="text-purple-500">38</span> years
          </p>
          <p class="text-5xl font-bold">
            <span class="text-purple-500">3</span> months
          </p>
          <p class="text-5xl font-bold">
            <span class="text-purple-500">26</span> days
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
