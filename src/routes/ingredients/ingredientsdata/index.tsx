import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      class="flex flex-col min-h-screen w-screen text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div class="eb-garamond-norm flex h-screen flex-col">
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/rice.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                rice
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/eggs.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                eggs
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/fish.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                shrimp
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/ham.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                ham
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/scallions.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                scallions
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/garlic.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                garlic
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/gailan.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                gai lan
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/oysters.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                oysters
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/mango.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                mango
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="/coconuts.png"
              class="rounded-4xl hover:opacity-100"
              width="600"
              height="800"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-100 text-gray-900"
              >
                coconuts
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l"></div>
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
