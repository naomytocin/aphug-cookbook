import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div
      class="flex flex-col min-h-screen w-screen text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1522701025355-3b334358d451?q=80&w=1119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
              src="https://photos.bigoven.com/recipe/hero/plain-white-rice-f7391e.jpg?h=300&w=300"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                米
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Rice my beloved
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Rice has been cultivated in the Yangtze River basin for over
                9,000 years, and it is now a primary food all across Asia
                (including my own stomach).
                <br />
                <br />
                Where the ingredient comes from now:
                <br />
                Today, rice is predominantly grown in southern China and other
                parts of Asia, with a lot of production in countries like
                Thailand, India, and Vietnam.
                <br />
                <br />
                Sustainability:
                <br />
                Rice farming is extensive and requires a lot of water and labor.
                It produces a lot of methane emissions. Excessive irrigation in
                areas with poorer soil quality can lead to soil degradation, but
                innovations like dry seeding help to reduce the damanges.
                <br />
                <br />
                Importing and exporting:
                <br />
                Global trade networks allow rice’s year-round availability,
                allowing everyone to absorb the beauty that rice is. Thank you,
                globalization.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://theheirloompantry.co/wp-content/uploads/2022/06/how-to-fry-eggs-perfectly-in-4-ways-the-heirloom-pantry.jpg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                鸡蛋
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Eggs
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Eggs have been a vital source of protein in Chinese cooking for
                centuries, though tradition is more open to various types of
                eggs than just chicken eggs.
                <br />
                <br />
                Where the ingredient comes from now:
                <br />
                Eggs are commonly sourced from local free-range and organic
                poultry farms throughout China and worldwide through trade.
                <br />
                <br />
                Sustainability:
                <br />
                Egg production is heavily dependent on industrial farming, which
                gets a little messy when talking about land use, greenhouse gas
                emissions, etc. Large scale egg farms contribute to pollution
                whereas free-range take a lot of land and resources per egg.
                <br />
                <br />
                Importing and exporting:
                <br />
                Eggs and egg products circulate globally because eggs are in
                almost every culture's food somewhere.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://mintykitchen.com/wp-content/uploads/2024/05/shrimp-main-1200.jpg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                虾
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Shrimp
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Shrimp has a history in coastal Chinese foods for a long time,
                with it being included in recipes since ancient times.
                <br />
                <br />
                Where the ingredient comes from now:
                <br />
                Today, shrimp is both wild-caught in coastal waters and farmed
                using modern aquaculture techniques in many parts of Asia.
                <br />
                <br />
                Sustainability:
                <br />
                Shrimp isn't the most sustainable food, destroying mangroves and
                reducing biodiversity. The antibiotics that is used pollutes the
                water.
                <br />
                <br />
                Importing and exporting:
                <br />
                Shrimp, which was once not really common outside the region, is
                now everywhere because of globalization. Because of its
                popularity, a lot of extensive production has been done,
                furthering the environmental impact.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://cdn.tasteatlas.com/images/articles/583e95a178fb4ec7b54c3ddfc2629f25.jpg?w=1200"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                火腿
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Chinese Ham
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Discuss its individual origins and history:
                <br />
                Chinese ham, particularly the style used in Yangzhou Fried Rice,
                came from traditional curing and roasting techniques developed
                over time as Yangzhou Fried Rice became increasingly popular.
                <br />
                <br />
                Discuss where the ingredient comes from now:
                <br />
                Today, it is produced in various regions of China, being used in
                many sorts of dishes.
                <br />
                <br />
                Discuss the sustainability of your chosen ingredient:
                <br />
                Pork productions, and meat in general, is pretty environmentally
                taxing. Pig farms lead to deforestation for crops, there's a lot
                of water used, and a lot of emissions too.
                <br />
                <br />
                Discuss the impact of importing and exporting:
                <br />
                Chinese ham is prized both domestically and internationally,
                with export markets encouraging producers to maintain high
                standards and sustainable practices.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://www.theenvironmentalblog.org/wp-content/uploads/2024/09/Green-Onion-Classification-768x768.jpg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                葱
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Scallions
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Scallions have been used for millennia in Chinese cooking to add
                aroma and brightness, forming an indispensable part of many
                traditional recipes.
                <br />
                <br />
                Where the ingredient comes from now:
                <br />
                They are cultivated locally across China and in many other parts
                of the world, ensuring their presence in global kitchens.
                <br />
                <br />
                Sustainability:
                <br />
                Scallion farming is relatively low-impact compared to other
                crops. However, large-scale monoculture production can lead to
                soil depletion and increased pesticide use. In some regions,
                over-irrigation has contributed to declining groundwater levels,
                but overall, it's pretty okay.
                <br />
                <br />
                Importing and exporting:
                <br />
                Scallions are widely traded regionally but are not a major
                global commodity. Short transportation distances and ease of
                growth make them one of the more sustainable produce items.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://www.eatingwell.com/thmb/4SWJfPj5G5Humyfnmzvu9KueJvA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pickled-garlic-cloves-03-250668-4000x4000-a8ff72228b934f489bac84cdc8111735.jpg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                蒜
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Garlic
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Garlic, revered for its robust flavor and medicinal benefits,
                has been a cornerstone of Chinese cooking since ancient times.
                <br />
                <br />
                Where the ingredient comes from now:
                <br />
                It is now grown extensively in China, India, and other parts of
                Asia, forming a major part of global spice markets.
                <br />
                <br />
                Sustainability:
                <br />
                Garlic, like scallion, isn't that bad either, but like scallion,
                large-scale production has similar effects to scallion. There's
                also a lot of questionble labor around garlic peeling and
                processing.
                <br />
                <br />
                Importing and exporting:
                <br />
                China dominates global garlic exports, which has doesn't help
                local farmers in other countries. The heavy reliance on
                international garlic trade increases carbon emissions due to
                transportation.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://www.diversivore.com/wp-content/uploads/2020/01/Gai-Lan-square-1.jpg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                芥蓝
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Gai Lan
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Gai Lan has been a beloved vegetable in Cantonese cooking for
                centuries, prized for its crisp texture and slightly bitter
                flavor.
                <br />
                <br />
                Where the ingredient comes from now:
                <br />
                It is primarily grown in southern China and is a staple in local
                markets and traditional Cantonese kitchens.
                <br />
                <br />
                Sustainability:
                <br />
                They're genereally sustainable, but again, large-scale
                production has similar effects to scallion and garlic.
                <br />
                <br />
                Importing and exporting:
                <br />
                Gai lan is mostly consumed locally, but its export to global
                Asian markets has increased recently, adding transportation
                emissions and dependency on overseas demand.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://i0.wp.com/msshiandmrhe.com/wp-content/uploads/2022/09/oyster-sauce.jpg?resize=800%2C840&ssl=1"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                蚝油
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Oyster Sauce
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Invented in 1888 in Guangdong by accident, oyster sauce became a
                staple in Cantonese cooking for its rich umami flavor.
                <br />
                <br />
                Where it comes from now:
                <br />
                Mainly produced in China, Thailand, and Vietnam, using farmed
                oysters in coastal waters.
                <br />
                <br />
                Sustainability:
                <br />
                Oyster farming can improve water quality but also risks
                overharvesting and habitat disruption if poorly managed.
                <br />
                <br />
                Importing and exporting:
                <br />
                Exported worldwide, especially to North America and Europe.
                Global demand has led to international production, reducing
                transport impact (but it's not as good as Asian production like
                mangoes too, speaking of which up next is...).
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://tropicalplantae.com/wp-content/uploads/2024/07/a7163962-e07d-49ab-b44b-2aa70b58e526.jpeg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                芒果
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Mango
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                <br />
                First cultivated in South Asia over 4,000 years ago, mangoes
                reached China during the Tang Dynasty and were once reserved for
                nobility.
                <br />
                <br />
                Where it comes from now:
                <br />
                Grown in southern China (Hainan, Guangxi, Yunnan) and heavily
                imported from Thailand, the Philippines, and Vietnam.
                <br />
                <br />
                Sustainability:
                <br />
                Mango farming requires high water use and can lead to
                deforestation. Organic and agroforestry practices help mitigate
                these issues.
                <br />
                <br />
                Importing and exporting:
                <br />
                Mangoes are widely traded globally, but air transport
                contributes to carbon emissions. Their availability year-round
                is a result of globalization. Though, mangoes that are sold in
                Asia are so much sweeter and nicer.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://healthyhappylife.com/wp-content/uploads/2011/09/highres-coconut-cream-whip37820.png"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href=""
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                椰奶油
              </Link>
            </div>
          </div>
          <div class="ml-10 flex-l">
            <div class="dookie-text eb-garamond-norm text-3xl bold">
              Coconut Cream
              <p class="dookie-text eb-garamond-norm text-xl md:first-letter:text-2xl backdrop-blur backdrop-brightness-75 rounded-2xl transition-all">
                Origins and history:
                <br />
                Native to Southeast Asia, coconuts became popular in southern
                Chinese cuisine through historical trade with tropical regions.
                <br />
                <br />
                Where it comes from now:
                <br />
                Mostly imported from Thailand, Indonesia, and the Philippines,
                with some domestic production in Hainan.
                <br />
                <br />
                Sustainability:
                <br />
                Coconut farming is generally sustainable, like scallions and
                stuff, but rising demand has led to deforestation and poor labor
                conditions in some regions.
                <br />
                <br />
                Importing and exporting:
                <br />A key global commodity, coconut cream is exported
                worldwide, with processing facilities closer to consumer markets
                to reduce shipping impact.
              </p>
            </div>
          </div>
        </div>
        <div class="m-20 flex">
          <div class="relative rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2 opacity-64 hover:opacity-100">
            <img
              src="https://blog.altajcargo.com/wp-content/uploads/2024/05/AL-TAJ-BI-26-04-2024-1024x1024.jpg"
              class="rounded-4xl hover:opacity-100"
              width="400"
              height="400"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:translate-y-2">
              <Link
                href="ingredientsdata"
                class="zhi-mang-xing-regular text-2xl scale-400 text-gray-900"
              >
                Data
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
