import DateForm from "./components/date-form/DateForm";

function App() {
  return (
    <main class="flex justify-center items-center h-screen">
      <section class="bg-white rounded-3xl rounded-br-[80px] w-11/12 grid-rows-3 py-6 px-3">
        <div class="">
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
