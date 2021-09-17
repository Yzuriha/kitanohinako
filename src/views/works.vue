<template>
  <div class="works">
    <base-section title="WORKS" additional-classes="headline--center" class="">
      <template v-slot:content>
        <work-card v-for="(work, index) in worksData" :title="work.title" :works="work.data" :animation-delay-number="index"></work-card>
      </template>
    </base-section>
  </div>
</template>

<script>
import MainNav from "@/components/navigation/main-nav";
import BaseSection from "@/components/sections/base-section";
import WorkCard from "@/components/cards/work-card";
export default {
  name: "Works",
  components: {WorkCard, BaseSection, MainNav},
  data() {
    return {
      worksData: [
        {
          title: "PHOTO BOOK",
          data: [
            {
              kanji: '空気の色',
              romaji: 'Kuuki no Iro',
              year: '2020'
            },
          ],
        },
        {
          title: "MAGA- ZINE",
          data: [
            {
              kanji: '遠回りの"希望" (UTB vol.305)',
              romaji: 'Toumawari no Kibou',
              year: '2021'
            },
            {
              kanji: 'Sailing Day (EX大衆　5月号)',
              romaji: 'Sailing Day',
              year: '05.2021'
            },
            {
              kanji: '君と過ごしたあの時間いつまでも忘れない (B.L.T.　8月号)',
              romaji: 'Kimi to Sugoshita Ano Jikan Itsumademo Wasurenai',
              year: '08.2021'
            },
            {
              kanji: "It's my place (blt graph.vol.61)",
              romaji: 'It\'s my place',
              year: '2021'
            },
            {
              kanji: '君をみつけたあの日から (B.L.T.　12月号)',
              romaji: 'Kimi wo Mitsuketa Ano Hi',
              year: '12.2019'
            },
            {
              kanji: '転校生のトゲ (WBP #8)',
              romaji: 'Tenkousei Toge',
              year: '2016'
            },
            {
              kanji: 'キミが笑顔でいてくれるなら (FLASHスペシャル グラビアBEST秋号 2015年11月号)',
              romaji: 'Kimi ga Egao de Ite Kurerunara',
              year: '11.2015'
            },
            {
              kanji: 'やるなら今しかねえ (BUBKA vol.45)',
              romaji: 'Yaru nara Imashikanee',
              year: '2015'
            },
            {
              kanji: 'キタノスポーツ (UTB vol.233)',
              romaji: 'Kitano Sports',
              year: '2015'
            },
            {
              kanji: 'ぼく勉強ができない (EX大衆　9月号)',
              romaji: 'Boku ga Denkyou dekinai',
              year: '09.2015'
            },
          ],
        },
        {
          title: 'WEB',
          data: [
            {
              kanji: '結道',
              romaji: 'Yuidou',
              year: '2020'
            },
            {
              kanji: '乃木坂46 乃木坂世界旅 今野さんほっといてよ！',
              romaji: 'Nogizaka Sekai Tabi Konno san Hottoite yo',
              year: '2020'
            }
          ],
        },
        {
          title: 'STAGE PLAY',
          data: [
            {
              kanji: 'あさひなぐ',
              romaji: 'Asahinagu',
              year: '2015 - 2016'
            },
            {
              kanji: 'じょしらく',
              romaji: 'Joshiraku',
              year: '2017'
            }
          ],},
        {
          title: 'DRAMA',
          data: [
            {
              kanji: 'オトナヘノベル',
              romaji: 'Otona e Noboru',
              year: '2016'
            },
            {
              kanji: '初森ベマーズ',
              romaji: 'Hatsumori Bemars',
              year: '2015'
            }
          ]}
      ],
      photobooks: [
        {
          kanji: '空気の色',
          romaji: 'Kuuki no Iro',
          year: '2020'
        },
      ],
      web: [
        {
          kanji: '結道',
          romaji: 'Yuidou',
          year: '2020'
        },
        {
          kanji: '乃木坂46 乃木坂世界旅 今野さんほっといてよ！',
          romaji: 'Nogizaka Sekai Tabi Konno san Hottoite yo',
          year: '2020'
        }
      ],
      stagePlay: [
        {
          kanji: 'あさひなぐ',
          romaji: 'Asahinagu',
          year: '2015 - 2016'
        },
        {
          kanji: 'じょしらく',
          romaji: 'Joshiraku',
          year: '2017'
        }
      ],
      drama: [
        {
          kanji: 'オトナヘノベル',
          romaji: 'Otona e Noboru',
          year: '2016'
        },
        {
          kanji: '初森ベマーズ',
          romaji: 'Hatsumori Bemars',
          year: '2015'
        }
      ]
    }
  }
}
</script>