import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      class="flex flex-col h-screen text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1482859602406-7659b00979fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 class="eb-garamond-bold text-center text-4xl">china cookbook</h1>
      <div class="eb-garamond-norm flex h-screen items-center">
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-20 hover:opacity-100">
            <img
              src="https://christieathome.com/wp-content/uploads/2021/07/Egg-Fried-Rice-5-500x500.jpg"
              class="rounded-4xl hover:opacity-100"
              width="500"
              height="500"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-500 text-gray-900"
              >
                fart balls dookie drawls
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <p class="dookie-text eb-garamond-norm text-2xl md:first-letter:text-5xl">
              dookie dookiedookie dookie edookiedookie dookiedookie dookie
            </p>
          </div>
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
