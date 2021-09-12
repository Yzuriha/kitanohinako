<template>
  <div class="works">
    <base-section title="WORKS" additional-classes="headline--center" class="">
      <template v-slot:content>
        <work-card title="WEB" :works="web"></work-card>
        <work-card title="DRAMA" :works="drama"></work-card>
        <work-card title="STAGE PLAY" :works="stagePlay"></work-card>
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