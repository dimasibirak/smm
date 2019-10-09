<template>
  <section>
    <section class="slider" v-for="(slider, index) in sliderTypes[type].deviceTypes[currentDevice]" :class="slider.class_list" :id="'service'+(index+1)" :key="`service-${currentDevice}-${index}`">
      <h2>{{ slider.h2 }}</h2>
      <a class="prev si si-angle-left" @click="slidePrev(index)"></a>
      <a class="next si si-angle-right" @click="slideNext(index)"></a>
      <slick :options="slickOptions" :key="`slider-${currentDevice}-${index}`" class="wrap">
        <div v-for="(slide, key) in slider.slides" class='cards-wrap'>
          <div class="card" v-for="(card, indx) in slide">
            <h3>{{ card.count }} {{ card.h3 }}</h3>
            <p class="price si si-a-rub">{{ card.cost }} </p>
            <p class="economy si si-a-rub" v-if="card.eco">{{ card.eco }} </p>
            <hr>
            <ul>
              <li :class="{'si si-ok': li.t, 'bold': li.b }"
              v-for="li in descriptions[card.type]"
              v-html="li.t ? li.t : '&nbsp;'"></li>
            </ul>
            <a class="btn si si-cart" :class="{ blue: currentDevice === 'mobile' ? slider.class_list === 'blue' : indx === 1 }" @click="goModal(card.service, card.count)"></a>
          </div>
        </div>
      </slick>
    </section>
    <Order v-if="modal" :services="services" :current="currentService" @close="UnModal()" />
  </section>
</template>

<script>
import Slick from "vue-slick"
import Order from "~/components/landing/Order"
import "slick-carousel/slick/slick.css"

export default {
  components: {
    Slick,
    Order,
  },
  props: {
    services: {
      type: Array
    },
    type: {
      type: String,
      default: "main",
      validator: function (value) {
        return ["main", "likes", "subs", "views", "autolikes"].indexOf(value) !== -1
      }
    }
  },
  data() {
    const parts = [
      "ВЫСОКОЕ",                    // 0
      "ПРЕМИУМ",                    // 1
      " КАЧЕСТВО",                  // 2
      "МГНОВЕННЫЙ",                 // 3
      "БЫСТРЫЙ",                    // 4
      " ЗАПУСК",                    // 5
      "С АВАТАРКАМИ",               // 6
      "НЕТ БАНА",                   // 7
      "ДО 1",                       // 8
      "ДО 30",                      // 9
      "0 ТЫС. В СУТКИ",             // 10
      "ГАРАНТИЯ ОТ СПИСАНИЙ",       // 11
      "100% С ФОТО И ПОСТАМИ",      // 12
      "АВТОМАТИЧЕСКОЕ<span>ПОСТУПЛЕНИЕ</span>", // 13
      "НА НОВЫЕ ",                  // 14
      "ВИДЕО",                      // 15
      "ПУБЛИКАЦИИ",                 // 16
      "БЫСТРАЯ СКОРОСТЬ",           // 17
      "ДО 5",                       // 18
      "ДО 85",                      // 19
      "С ОХВАТОМ",                  // 20
      "НА НОВЫЕ ПУБЛИКАЦИИ",        // 21
      "ОТЛИЧНОЕ",                   // 22
      "ЖИВЫЕ РУССКИЕ ПРОФИЛИ",      // 23
      "НА 15 ПУБЛИКАЦИЙ В СУТКИ",   // 24
      "В ТЕЧЕНИЕ 30 ДНЕЙ",          // 25
      "ДО 15"                       // 26
    ]
    const counts = [
      100,      // 0
      "200 ",   // 1
      "500 ",   // 2
      1e3,      // 3
      "2000 ",  // 4
      5e3,      // 5
      1e4,      // 6
      "300 ",   // 7
      "1500 ",  // 8
      "600 ",   // 9
      "6000 ",  // 10
      "3000 ",  // 11
      "15000 ", // 12
      25e3,     // 13
      5e4,      // 14
      1e5       // 15
    ]
    const types = [
      "ЛАЙКОВ",       // 0
      "ПОДПИСЧИКОВ",  // 1
      "ПРОСМОТРОВ",   // 2
      "АВТО",         // 3
      " ИСТОРИЙ",     // 4
      " + "           // 5
    ]
    const cards = {
      likes: [
        { h3:types[0], cost:5, eco:0, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[0] },
        { h3:types[0], cost:45, eco:5, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[3] },
        { h3:types[0], cost:210, eco:40, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[5] },
        { h3:types[0], cost:390, eco:110, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[6] },
        { h3:types[0], cost:950, eco:300, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[13] },
        { h3:types[0], cost:1750, eco:750, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[14] },
        { h3:types[0], cost:3500, eco:1500, type:"likes", service: "SERVICE_INSTAGRAM_LIKES", count: counts[15] }
      ],
      subs: [
        { h3:types[1], cost:35, eco:0, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[0] },
        { h3:types[1], cost:300, eco:50, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[3] },
        { h3:types[1], cost:1390, eco:360, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[5] },
        { h3:types[1], cost:2700, eco:800, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[6] },
        { h3:types[1], cost:6250, eco:2500, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[13] },
        { h3:types[1], cost:9900, eco:7600, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[14] },
        { h3:types[1], cost:17e3, eco:18e3, type:"subs", service:"SERVICE_INSTAGRAM_SUBS", count: counts[15] }
      ],
      views: [
        { h3:types[2], cost:4, eco:0, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[0] },
        { h3:types[2], cost:35, eco:5, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[3] },
        { h3:types[2], cost:165, eco:35, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[5] },
        { h3:types[2], cost:300, eco:100, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[6] },
        { h3:types[2], cost:750, eco:250, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[13] },
        { h3:types[2], cost:1300, eco:700, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[14] },
        { h3:types[2], cost:2500, eco:1500, type:"views", service:"SERVICE_INSTAGRAM_VIEWS_VIDEO", count: counts[15] }
      ],
      autolikes: [
        { h3:types[3]+types[0], cost:4, eco:0, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[0] },
        { h3:types[3]+types[0], cost:35, eco:5, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[3] },
        { h3:types[3]+types[0], cost:165, eco:40, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[5] },
        { h3:types[3]+types[0], cost:300, eco:110, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[6] },
        { h3:types[3]+types[0], cost:950, eco:300, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[13] },
        { h3:types[3]+types[0], cost:1750, eco:750, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[14] },
        { h3:types[3]+types[0], cost:3500, eco:1500, type:"autolikes", service: "SERVICE_INSTAGRAM_AUTO_LIKES", count: counts[15] }
      ],
      autoviews: [
        { h3:types[3]+types[2], cost:5, eco:0, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[0] },
        { h3:types[3]+types[2], cost:35, eco:5, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[3] },
        { h3:types[3]+types[2], cost:200, eco:35, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[5] },
        { h3:types[3]+types[2], cost:390, eco:100, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[6] },
        { h3:types[3]+types[2], cost:750, eco:250, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[13] },
        { h3:types[3]+types[2], cost:1300, eco:700, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[14] },
        { h3:types[3]+types[2], cost:2500, eco:1500, type:"autoviews", service: "SERVICE_INSTAGRAM_AUTO_VIEWS", count: counts[15] }
      ],
      story_views: [
        { h3:types[2]+types[4], cost:11, eco:0, type:"story_views", service: "SERVICE_INSTAGRAM_VIEWS_STORY", count: counts[0] },
        { h3:types[2]+types[4], cost:100, eco:10, type:"story_views", service: "SERVICE_INSTAGRAM_VIEWS_STORY", count: counts[3] },
        { h3:types[2]+types[4], cost:450, eco:100, type:"story_views", service: "SERVICE_INSTAGRAM_VIEWS_STORY", count: counts[5] },
        { h3:types[2]+types[4], cost:900, eco:200, type:"story_views", service: "SERVICE_INSTAGRAM_VIEWS_STORY", count: counts[6] }
        // { h3:counts[13]+types[2]+types[4], cost:5, eco:0, type:"story_views"}
        // { h3:counts[14]+types[2]+types[4], cost:5, eco:0, type:"story_views"}
        // { h3:counts[15]+types[2]+types[4], cost:5, eco:0, type:"story_views"}
      ]
      // packs: [
      //   { h3:counts[0]+types[0]+types[5]+counts[7]+types[2], cost:<?php echo $sale7[z1000]*1e3;?>, eco:0, type:"packs"},
      //   { h3:counts[1]+types[0]+types[5]+counts[9]+types[2], cost:<?php echo $sale9[z1000]*1e3;?>, eco:2250, type:"packs"},
      //   { h3:counts[2]+types[0]+types[5]+counts[8]+types[2], cost:<?php echo $sale8[z1000]*1e3;?>, eco:400, type:"packs"},
      //   { h3:counts[3]+types[0]+types[5]+counts[11]+types[2], cost:<?php echo $sale11[z1000]*1e3;?>, eco:4500, type:"packs"},
      //   { h3:counts[4]+types[0]+types[5]+counts[10]+types[2], cost:<?php echo $sale10[z1000]*1e3;?>, eco:4e3, type:"packs"},
      //   { h3:counts[5]+types[0]+types[5]+counts[12]+types[2], cost:<?php echo $sale12[z1000]*1e3;?>, eco:7500, type:"packs"}
      // ]
    }
    return {
      safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      descriptions: {
        likes: [
          { t:parts[0]+parts[2] },    // ВЫСОКОЕ КАЧЕСТВО
          { t:parts[3]+parts[5] },    // МГНОВЕННЫЙ ЗАПУСК
          { t:parts[6] },             // С АВАТАРКАМИ
          { t:parts[7] },             // НЕТ БАНА
          { t:parts[26]+parts[10] }   // ДО 150 ТЫС. В СУТКИ
        ],
        subs: [
          { t:parts[1]+parts[2] },    // ПРЕМИУМ КАЧЕСТВО
          { t:parts[11], b:!0 },      // ГАРАНТИЯ ОТ СПИСАНИЙ
          { t:parts[12] },            // 100% С ФОТО И ПОСТАМИ
          { t:parts[4]+parts[5] },    // БЫСТРЫЙ ЗАПУСК
          { t:parts[7] },             // НЕТ БАНА
          { t:parts[8]+parts[10] }    // ДО 10 ТЫС. В СУТКИ
        ],
        views: [
          { t:parts[0]+parts[2] },    // ВЫСОКОЕ КАЧЕСТВО
          { t:parts[3]+parts[5] },    // МГНОВЕННЫЙ ЗАПУСК
          { t:parts[20] },            // С ОХВАТОМ
          { t:parts[7] },             // НЕТ БАНА
          { t:parts[9]+parts[10] }    // ДО 300 ТЫС. В СУТКИ
        ],
        autolikes: [
          { t:parts[20] },            // С ОХВАТОМ
          { t:parts[0]+parts[2] },    // ВЫСОКОЕ КАЧЕСТВО
          { t:parts[13] },            // АВТОМАТИЧЕСКОЕ ПОСТУПЛЕНИЕ
          { t:parts[14]+parts[16] },  // НА НОВЫЕ ПУБЛИКАЦИИ
          { t:parts[18]+parts[10] }   // ДО 50 ТЫС. В СУТКИ
        ],
        autoviews: [
          { t:parts[13] },            // АВТОМАТИЧЕСКОЕ ПОСТУПЛЕНИЕ
          { t:parts[14]+parts[15] },  // НА НОВЫЕ ВИДЕО
          { t:parts[0]+parts[2] },    // ВЫСОКОЕ КАЧЕСТВО
          { t:parts[17] },            // БЫСТРАЯ СКОРОСТЬ
          { t:parts[19]+parts[10] }   // ДО 850 ТЫС. В СУТКИ
        ],
        story_views: [
          { t:parts[0]+parts[2] },    // ВЫСОКОЕ КАЧЕСТВО
          { t:parts[4]+parts[5] },    // БЫСТРЫЙ ЗАПУСК
          { t:parts[7] },             // НЕТ БАНА
          { t:parts[8]+parts[10] }    // ДО 10 ТЫС. В СУТКИ
        ]
        // packs: [
        //   { t:parts[22]+parts[2] }, // ОТЛИЧНОЕ КАЧЕСТВО
        //   { t:parts[23], b:!0 },    // ЖИВЫЕ РУССКИЕ АККАУНТЫ
        //   { t:parts[12] },          // 100% С ФОТО И ПОСТАМИ
        //   { t:parts[13] },          // АВТОМАТИЧЕСКОЕ ПОСТУПЛЕНИЕ
        //   { t:parts[24] },          // НА 15 ПУБЛИКАЦИЙ В СУТКИ
        //   { t:parts[25] }           // В ТЕЧЕНИЕ 30 ДНЕЙ
        // ]
      },
      sliderTypes: {
        main: {
          deviceTypes: {
            desktop: [
              {
                h2: "РАСКРУТКА В INSTAGRAM",
                class_list: "",
                slides: [
                  [
                    cards.likes[0],
                    cards.subs[0],
                    cards.views[0]
                  ],
                  [
                    cards.likes[1],
                    cards.subs[1],
                    cards.views[1]
                  ],
                  [
                    cards.likes[2],
                    cards.subs[2],
                    cards.views[2]
                  ],
                  [
                    cards.likes[3],
                    cards.subs[3],
                    cards.views[3]
                  ],
                  [
                    cards.likes[4],
                    cards.subs[4],
                    cards.views[4]
                  ],
                  [
                    cards.likes[5],
                    cards.subs[5],
                    cards.views[5]
                  ],
                  [
                    cards.likes[6],
                    cards.subs[6],
                    cards.views[6]
                  ]
                ]
              },
              {
                h2: "РАСКРУТКА В INSTAGRAM",
                class_list: "back back-4",
                slides: [
                  [
                    cards.autoviews[0],
                    cards.autolikes[0],
                    cards.story_views[0]
                  ],
                  [
                    cards.autoviews[1],
                    cards.autolikes[1],
                    cards.story_views[1]
                  ],
                  [
                    cards.autoviews[2],
                    cards.autolikes[2],
                    cards.story_views[2]
                  ],
                  [
                    cards.autoviews[3],
                    cards.autolikes[3],
                    cards.story_views[3]
                  ]
                ]
              }
              // {
              //   h2: "ПАКЕТЫ АВТОУСЛУГ",
              //   class_list: "",
              //   slides: [
              //     [
              //       cards.packs[0],
              //       cards.packs[1],
              //       cards.packs[2]
              //     ],
              //     [
              //       cards.packs[3],
              //       cards.packs[4],
              //       cards.packs[5]
              //     ]
              //   ]
              // }
            ],
            tablet: [
              {
                h2: "НАКРУТКА ПОДПИСЧИКОВ",
                class_list: "",
                slides: [
                  [
                    cards.subs[0],
                    cards.subs[1]
                  ],
                  [
                    cards.subs[2],
                    cards.subs[3]
                  ],
                  [
                    cards.subs[4],
                    cards.subs[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА ЛАЙКОВ И АВТОЛАЙКОВ",
                class_list: "back back-2",
                slides: [
                  [
                    cards.likes[0],
                    cards.autolikes[0]
                  ],
                  [
                    cards.likes[1],
                    cards.autolikes[1]
                  ],
                  [
                    cards.likes[2],
                    cards.autolikes[2]
                  ],
                  [
                    cards.likes[3],
                    cards.autolikes[3]
                  ],
                  [
                    cards.likes[4],
                    cards.autolikes[4]
                  ],
                  [
                    cards.likes[5],
                    cards.autolikes[5]
                  ],
                  [
                    cards.likes[6],
                    cards.autolikes[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА ПРОСМОТРОВ И АВТОПРОСМОТРОВ",
                class_list: "",
                slides: [
                  [
                    cards.views[0],
                    cards.autoviews[0]
                  ],
                  [
                    cards.views[1],
                    cards.autoviews[1]
                  ],
                  [
                    cards.views[2],
                    cards.autoviews[2]
                  ],
                  [
                    cards.views[3],
                    cards.autoviews[3]
                  ],
                  [
                    cards.views[4],
                    cards.autoviews[4]
                  ],
                  [
                    cards.views[5],
                    cards.autoviews[5]
                  ],
                  [
                    cards.views[6],
                    cards.autoviews[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА ПРОСМОТРОВ ИСТОРИЙ",
                class_list: "back back-4",
                slides: [
                  [
                    cards.story_views[0],
                    cards.story_views[1]
                  ],
                  [
                    cards.story_views[2],
                    cards.story_views[3]
                  ]
                ]
              }
            ],
            mobile: [
              {
                h2: "НАКРУТКА ПОДПИСЧИКОВ",
                class_list: "blue",
                slides: [
                  [
                    cards.subs[0]
                  ],
                  [
                    cards.subs[1]
                  ],
                  [
                    cards.subs[2]
                  ],
                  [
                    cards.subs[3]
                  ],
                  [
                    cards.subs[4]
                  ],
                  [
                    cards.subs[5]
                  ],
                  [
                    cards.subs[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА ЛАЙКОВ",
                class_list: "back back-2",
                slides: [
                  [
                    cards.likes[0]
                  ],
                  [
                    cards.likes[1]
                  ],
                  [
                    cards.likes[2]
                  ],
                  [
                    cards.likes[3]
                  ],
                  [
                    cards.likes[4]
                  ],
                  [
                    cards.likes[5]
                  ],
                  [
                    cards.likes[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА ПРОСМОТРОВ",
                class_list: "blue",
                slides: [
                  [
                    cards.views[0]
                  ],
                  [
                    cards.views[1]
                  ],
                  [
                    cards.views[2]
                  ],
                  [
                    cards.views[3]
                  ],
                  [
                    cards.views[4]
                  ],
                  [
                    cards.views[5]
                  ],
                  [
                    cards.views[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА АВТОЛАЙКОВ",
                class_list: "back back-3",
                slides: [
                  [
                    cards.autolikes[0]
                  ],
                  [
                    cards.autolikes[1]
                  ],
                  [
                    cards.autolikes[2]
                  ],
                  [
                    cards.autolikes[3]
                  ],
                  [
                    cards.autolikes[4]
                  ],
                  [
                    cards.autolikes[5]
                  ],
                  [
                    cards.autolikes[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА АВТОПРОСМОТРОВ",
                class_list: "blue",
                slides: [
                  [
                    cards.autoviews[0]
                  ],
                  [
                    cards.autoviews[1]
                  ],
                  [
                    cards.autoviews[2]
                  ],
                  [
                    cards.autoviews[3]
                  ],
                  [
                    cards.autoviews[4]
                  ],
                  [
                    cards.autoviews[5]
                  ],
                  [
                    cards.autoviews[6]
                  ]
                ]
              },
              {
                h2: "НАКРУТКА ПРОСМОТРОВ ИСТОРИЙ",
                class_list: "back back-4",
                slides: [
                  [
                    cards.story_views[0]
                  ],
                  [
                    cards.story_views[1]
                  ],
                  [
                    cards.story_views[2]
                  ],
                  [
                    cards.story_views[3]
                  ]
                ]
              }
            ]
          }
        }
      },
      // [
      //   {
      //     common: [
      //       [
      //         cards.likes[0],
      //         cards.subs[0],
      //         cards.views[0]
      //       ],
      //       [
      //         cards.likes[1],
      //         cards.subs[1],
      //         cards.views[1]
      //       ],
      //       [
      //         cards.likes[2],
      //         cards.subs[2],
      //         cards.views[2]
      //       ],
      //       [
      //         cards.likes[3],
      //         cards.subs[3],
      //         cards.views[3]
      //       ],
      //       [
      //         cards[0][4],
      //         cards[1][4],
      //         cards[2][4]
      //       ],
      //       [
      //         cards[0][5],
      //         cards[1][5],
      //         cards[2][5]
      //       ],
      //       [
      //         cards[0][6],
      //         cards[1][6],
      //         cards[2][6]
      //       ]
      //     ],
      //     likes: [
      //       [
      //         cards[0][0],
      //         cards[0][1],
      //         cards[0][2]
      //       ],
      //       [
      //         cards[0][3],
      //         cards[0][4],
      //         cards[0][6]
      //       ]
      //     ],
      //     subs: [
      //       [
      //         cards[1][0],
      //         cards[1][1],
      //         cards[1][2]
      //       ],
      //       [
      //         cards[1][3],
      //         cards[1][4],
      //         cards[1][6]
      //       ]
      //     ],
      //     views: [
      //       [
      //         cards[2][0],
      //         cards[2][1],
      //         cards[2][2]
      //       ],
      //       [
      //         cards[2][3],
      //         cards[2][4],
      //         cards[2][6]
      //       ]
      //     ],
      //     autolikes: [
      //       [
      //         cards[3][0],
      //         cards[3][1],
      //         cards[3][2]
      //       ],
      //       [
      //         cards[3][3],
      //         cards[3][4],
      //         cards[3][6]
      //       ]
      //     ]
      //   },
      //   {
      //     slides: [
      //       [
      //         cards[4][0],
      //         cards[3][0],
      //         cards[5][0]
      //       ],
      //       [
      //         cards[4][1],
      //         cards[3][1],
      //         cards[5][1]
      //       ],
      //       [
      //         cards[4][2],
      //         cards[3][2],
      //         cards[5][2]
      //       ],
      //       [
      //         cards[4][3],
      //         cards[3][3],
      //         cards[5][3]
      //       ]
      //     ],
      //     likes: [
      //       [
      //         cards[3][0],
      //         cards[3][1],
      //         cards[3][2]
      //       ],
      //       [
      //         cards[3][3],
      //         cards[3][4],
      //         cards[3][6]
      //       ]
      //     ],
      //     views: [
      //       [
      //         cards[4][0],
      //         cards[4][1],
      //         cards[4][2]
      //       ],
      //       [
      //         cards[4][3],
      //         cards[4][4],
      //         cards[4][6]
      //       ]
      //     ],
      //     autolikes: [
      //       [
      //         cards[0][0],
      //         cards[0][1],
      //         cards[0][2]
      //       ],
      //       [
      //         cards[0][3],
      //         cards[0][4],
      //         cards[0][6]
      //       ]
      //     ]
      //   }
      //   // {
      //   //   common: [
      //   //     [
      //   //       cards[6][0],
      //   //       cards[6][1],
      //   //       cards[6][2]
      //   //     ],
      //   //     [
      //   //       cards[6][3],
      //   //       cards[6][4],
      //   //       cards[6][5]
      //   //     ]
      //   //   ]
      //   // }
      // ],
      currentDevice: 'desktop',
      modal: false,
      currentService: {
        id: this.services[0].type,
        count: this.services[0].min
      },
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: true,
              arrows: false,
              infinite: true,
              speed: 900,
              centerMode: true,
              centerPadding: '0px',
            }
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false,
              infinite: true,
              speed: 900,
              centerMode: true,
              centerPadding: '0px',
            }
          }
        ]
      }
    }
  },
  methods:{
    slideNext(index) {
      this.$children[index].next()
    },
    slidePrev(index) {
      this.$children[index].prev()
    },
    goModal(id, count){
      this.currentService = {
        id: id,
        count: count
      }
      this.modal = true
      // this.$router.push(`/order/?service=${ id }&count=${ count }`)
    },
    UnModal(){
      this.modal = false
    },
    onResize(){
      const currentWidth = document.body.clientWidth
      if (currentWidth < 768) {
        this.currentDevice = "mobile"
      }
      else if (currentWidth < 1200) {
        this.currentDevice = "tablet"
      }
      else {
        this.currentDevice = "desktop"
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize)
    this.$nextTick(function(){
      this.onResize()
    })
  },
  destroyed(){
    window.removeEventListener("resize", this.onResize)
  }
}
</script>

<style scoped lang="less">
.slider{
  position: relative;
  z-index: 10;
  #top & .wrap{
    padding: 0;
    @media (max-width: 320px){
      margin-left: 15px;
      margin-right: 15px;
      max-width: 290px;
    }
  }
}
#top #content > #services > section{
  & > h2{
    margin-bottom: 0;
  }
  &.back > h2{
    color: #fff;
  }
}
.next, .prev{
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 300;
  top: 52%;
  margin-top: -50px;
  width: 30px;
  height: 100px;
  color: #009dff;
  font-size: 26px;
  transition: all 0.2s ease;
  .back &{
    color: #fff;
  }
  &:hover{
    opacity: 0.5;
  }
}
.prev{
  left: 0;
}
/* .hooper{
height: auto;
} */
/* .hooper,.hooper-list,.hooper-track,.hooper-slide{
&:focus{
outline:none;
}
} */
.wrap .cards-wrap{
  display: none!important;
}
.wrap .slick-slide .cards-wrap, .wrap .cards-wrap:first-child{
  padding: 45px 0 53px;
  display: flex!important;
  align-items: center;
  justify-content: center;
}
.slick-slider /deep/ .slick-dots{
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    line-height: 0;
    button{
      line-height: 0;
      width: 8px;
      height: 8px;
      margin: 0 3px;
      background: #009dff;
      opacity: .5;
      border-radius: 50%;
      font-size: 0;
      border: 0;
      padding: 0;
      .back &{
        background: #fff;
      }
    }
    &.slick-active button{
      opacity: 1;
    }
  }
}
.card{
  width: 290px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 28px -1px rgba(0,0,0,0.2);
  color: #333;
  padding: 29px 14px;
  display: inline-flex;
  flex-flow: column;
  align-items: center;
  border-radius: 6px;
  font-weight: 700;
  @media (max-width: 320px){
    width: 260px;
  }
  h3{
    font-size: 15px;
    font-weight: 800;
  }
  .price{
    color: #009dff;
    font-size: 50px; /* 70px */
    margin-top: 20px;  /* 24px */
    font-weight: 800;
    @media (max-width: 320px){
      margin-top: 26px;
    }
  }
  .economy{
    margin-top: 20px;
    font-size: 14px;  /* 14px */
    font-weight: 800;
    color: #a0a0a0;
    @media (max-width: 320px){
      margin-top: 14px;
      margin-bottom: -5px;
    }
    #top &.si:before{
      font-family: inherit;
      content: "ЭКОНОМИЯ ";
      font-weight: 800;
    }
  }
  hr{
    border: 0;
    border-top: 1px solid #ddd;
    width: 90%;
    margin-top: 30px;
    margin-bottom: 0;
    @media (max-width: 320px){
      margin-top: 41px;
    }
  }
  ul{
    font-weight: 500;
    margin-top: 40px;
    text-align: left;
    @media (max-width: 320px){
      margin-left: 25px;
    }
    li{
      margin-left: -24px;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: normal;
      font-weight: normal;
      font-family: "GothamPro", Helvetica, Arial, sans-serif;
      &.bold{
        font-weight: bold;
      }
      &:before{
        margin-right: 15px;
      }
      & /deep/ span{
        display: block;
        margin-left: 29px;
      }
    }
  }
  #top & .btn{
    margin-top: 40px;
    font-size: 12px;
    @media (max-width: 320px){
      padding-left: 26px;
      padding-right: 26px;
    }
    &::before{
      font-size: 15px;
      vertical-align: -3px;
    }
    &.si::after{
      font-family: inherit;
      content: "КУПИТЬ СЕЙЧАС";
      font-weight: 700;
    }
  }
}
@media (max-width: 383px){
  /* .next{
  justify-content: flex-end;
}
.prev{
justify-content: flex-start;
} */
.card{
  box-shadow: 0 0 16px -1px rgba(0,0,0,0.2);
}
}
@media (min-width: 768px){
  .next, .prev{
    width: 60px;
    top: 54.4%;
  }
  .card{
    width: 330px;
    &:first-child{
      margin-right: 30px;
    }
  }
}
@media (min-width: 992px){
  .card{
    box-shadow: 0 0 28px -1px rgba(0,0,0,0.2);
  }
}
@media (min-width: 1200px){
  .wrap .slick-slide .cards-wrap, .wrap .cards-wrap:first-child{
    padding: 90px 0 80px;
  }
  .card{
    width: 370px;
    padding: 30px 14px;
    box-shadow: 0 0 16px -1px rgba(0,0,0,0.2);
    .price{
      font-size: 70px;
      margin-top: 25px;
    }
    .economy{
      margin-top: 9px;
    }
    hr{
      width: 80%;
      margin-top: 40px;
    }
    ul{
      margin-top: 39px;
      margin-left: -22px;
      min-height: 162px;
      li{
        font-size: 14px;
        line-height: 25.2px;
        letter-spacing: normal;
      }
    }
    #top & .btn{
      padding: 11px 35px;
      margin-top: 39px;
      font-size: 14px;
      font-weight: 900;
      &::before{
        font-size: 20px;
      }
    }
    &:first-child{
      border-radius: 6px 0 0 6px;
      border-right: 0;
      margin-right: 0;
    }
    &:nth-child(2){
      z-index: 5;
      position: relative;
      border-radius: 6px;
      box-shadow: 0 0 18px rgba(0,0,0,0.2);
      padding: 45px 0;
      ul{
        margin-left: 22px;
        li{
          /* letter-spacing: 0.8px; */
          /* margin-left: 8px; */
          & /deep/ span{
            margin-left: 30px;
          }
        }
      }
    }
    &:last-child{
      border-radius: 0 6px 6px 0;
      border-left: 0;
    }
  }
}
@media screen and (min-width: 1300px){
  .next, .prev{
    width: 100px;
  }
}
</style>
