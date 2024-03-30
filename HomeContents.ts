import React from 'react'


const HomeContents = {
  en: {
    header: {
      name : "Bio",
      title: "Hello there, I'm Vladislav, Front-End Engineer",
      ProfLife: ["I'm Front-End Developer.",
        " Currently studying in Moscow State Technological University, majoring in applied informatics.",
        " Learning to write clean code and create a user-friendly interfaces."
      ],
      LearnExp: {
        name: "LearnExp",
        Start: [
          'Started with studying vanilla js + css(scss) + React.'
        ],
        Time: [
          "Studied module bundlers like webpack, vite. Working with server(Node.js(Expess), axios)."
        ],
        Current: [
          "Start Using Next.js and create full-functionality apps."
        ]
      }
    }
  },
  ru: {
    header: {
      name : "Биография",
      title: "Привет всем, меня зовут Владислав, и я front-end разработчик",
      ProfLife: ["Я front-end разработчик.",
        " Сейчас учусь в Московском Технологическом Университете, на специальности прикладная информатика.",
        " Учусь писать чистый код, а также создавать удобные для пользователя интерфейсы."
      ],
      LearnExp: {
        name : "Учебный процесс",
        Start: [
          'Начал обучение с ванильного js + css(scss) + React.'
        ],
        Time: [
          "Изучил сборщики по типу webpack, vite. Работал с сервером(Node.js(Expess), axios)."
        ],
        Current: [
          "Начал использовать NextJs и создавать полно-функциональные веб-приложения."
        ]
      }
    }
  }
};

export default HomeContents;