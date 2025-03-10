import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      class="flex flex-col min-h-screen w-screen text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        overflow: "auto",
        opacity: "1.1",
      }}
    >
      <div class="eb-garamond-norm flex h-screen flex-col">
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://flolum.com/wp-content/uploads/2023/12/yangchowrice-blog-500x500.jpg"
              class="rounded-4xl hover:opacity-100"
              width="500"
              height="500"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-500 text-gray-900"
              >
                扬州炒饭
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-5xl bold">
              Entrée: Yangzhou Fried Rice
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-4xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                This dish is one of the most famous traditional Chinese dishes
                ever. <br />
                It is said to be one of the first Fried Rice dishes ever,
                <br />
                originating from Yangzhou, hence the name, during the Qing
                <br />
                Dynasty. This dish uses leftovers to make the rice, as many
                <br />
                aristocrats had leftovers and a man named Yi Bingshou decided to
                <br />
                mix and match ingredients to create the Yangzhou Fried Rice.
                <br />
              </p>
            </div>
          </div>
        </div>
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
                小笼包
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Appetizer: Xiao Long Bao
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl padding-100 transition-all">
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
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl padding-100 transition-all">
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
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl padding-100 transition-all">
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
              src="https://blog.altajcargo.com/wp-content/uploads/2024/05/AL-TAJ-BI-26-04-2024-1024x1024.jpg"
              class="rounded-4xl hover:opacity-100"
              width="300"
              height="300"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-300 text-gray-900"
              >
                ?
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Globalization
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl padding-100 transition-all">
                Would your dish be possible without the globalization of food?
                <br />
                No, globalization has played a pretty big role in shaping modern
                <br />
                Chinese cuisine. While the base ingredients of Yangzhou Fried
                <br />
                Rice and other traditional dishes are deeply rooted in Chinese
                <br />
                agricultural history, some components, such as certain
                <br />
                seasonings, meats, and even modern rice varieties, have
                <br />
                benefited from international trade. It also allows people of all
                <br />
                classes access to said foods.
                <br />
                <br />
                <br />
                How has globalization impacted the world's diet?
                <br />
                <br />
                Globalization has diversified diets around the world by making
                <br />
                foreign ingredients and dishes more accessible, not only to all
                <br />
                countries but all people. Traditional cuisines have expanded
                <br />
                beyond their geographic origins, leading to fusion dishes (that
                <br />
                aren't always amazing) and new cooking techniques. But also,
                <br />
                globalization has also contributed to not so great stuff with
                <br />
                processed and fast food becoming an increasing norm. This shift
                <br />
                has led to both positive effects, such as increased food
                <br />
                security and cultural exchange, and negative consequences,
                <br />
                including rising health issues linked to high-fat and high-sugar
                <br />
                diets.
                <br />
                <br />
                <br />
                At what point did your traditional dish become affected by
                <br />
                globalization?
                <br />
                <br />
                Yangzhou Fried Rice, while deeply traditional, has been
                <br />
                influenced by globalization in multiple ways. As trade routes
                <br />
                expanded, so did access to new ingredients such as imported rice
                <br />
                varieties and cooking oils. In more recent times, the dish has
                <br />
                spread internationally, with variations appearing in Chinese
                <br />
                restaurants worldwide, sometimes incorporating non-traditional
                <br />
                elements like Western-style proteins or fusion ingredients (not
                <br />
                the best tasting). It's more popular now, with people like Uncle
                <br />
                Roger living in Britain talking about it to their millions of
                <br />
                YouTube audience.
                <br />
                <br />
                <br />
                Has diet and nutrition around the world benefited from the trade
                <br />
                of food? Why or why not?
                <br />
                <br />
                Yes and no because on one hand, global food trade has improved
                <br />
                nutrition by making diverse and nutrient-rich foods more
                <br />
                accessible to populations that might otherwise face food
                <br />
                shortages or limited variety. On the other hand, the globalized
                <br />
                food industry has also contributed to unhealthy eating patterns,
                <br />
                particularly through the rise of processed foods high in sugar,
                <br />
                salt, and unhealthy fats. The mass production of food has often
                <br />
                prioritized profit over nutritional quality, leading to an
                <br />
                increase in diet-related diseases such as obesity and diabetes
                <br />
                worldwide, notably in the land of the free and the home of the
                <br />
                brave.
                <br />
                <br />
                <br />
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
