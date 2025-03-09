import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      class="flex flex-col min-h-screen w-screen text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1552914343-54bcc3ba07f8?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
              src="https://redhousespice.com/wp-content/uploads/2020/06/Xiao-Long-Bao-Soup-Dumplings-17-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                米
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Appetizer: Xiao Long Bao
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Also known as Soup Dumplings, this dish originates from the{" "}
                <br />
                Jiangnan region. It came alive during the late Ming Dynasty and
                <br />
                early Qing Dynasty eras, where chefs in teahouses would
                <br />
                skillfully learn how to make these dumplings with a paper-thin
                <br />
                dough and a beautiful broth.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2021/11/chinese-broccoli-with-oyster-sauce-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芥蓝
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Side Dish: Stir-Fried Gai Lan with Oyster Sauce
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Also known as Chinese broccoli, this dish is a stable in
                <br />
                Cantonese foods. Originating from southern China, this dish
                <br />
                became quickly popular all over china during the late Qing
                <br />
                period when wok frying was more commonly done by people of all
                <br />
                classes.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://redhousespice.com/wp-content/uploads/2017/05/hong-kong-mango-pancakes-300x300.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                芒果班戟
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Dessert: Mango Pancakes
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl">
                Originating from Hong Kong, this dish is a spin on the Cantonese
                <br />
                dessert pancakes. In Hong Kong, chefs began incorporating
                <br />
                mangoes into Dim Sum, a fruit introduced to China by the ancient
                <br />
                trade routes like the Silk Road. The dish has both a long
                <br />
                history, specifically within the mango, but also a unique spin
                <br />
                done by Hong Kong's chefs.
              </p>
            </div>
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
