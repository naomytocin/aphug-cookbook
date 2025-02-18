import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-col h-screen text-black bg-white">
      <br/>
      <h1 class='eb-garamond-bold text-center text-2xl'>china cookbook</h1>
      <div class="eb-garamond-norm flex h-screen text-left items-center">
        <div class="m-20 relative">
          fart
          <br/>
          
          <img src="https://christieathome.com/wp-content/uploads/2021/07/Egg-Fried-Rice-5-500x500.jpg" class="rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2" width="500" height="500"/>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "aphug china cookbook",
  meta: [
    {
      name: "",
      content: "",
    },
  ],
};
