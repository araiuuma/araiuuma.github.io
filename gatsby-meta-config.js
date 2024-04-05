module.exports = {
  title: `araiuuma.github.io`,
  description: `araiuuma | Dev Blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://araiuuma.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `심우진`,
    bio: {
      role: `개발자`,
      description: ['꾸준히 공부하는', '같이 일하고 싶은', '주 7일 일할 수 있는'],
      thumbnail: 'profile.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/araiuuma`,
      linkedIn: `https://www.linkedin.com/in/woojin-sim-84456b302/`,
      email: `araiuuma@icloud.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2017.03 ~ 2023.08',
        activity: '경상대학교 산림환경자원학과 졸업',
        
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.03.04 ~',
        activity: '한국폴리텍대학 진주캠퍼스 AI소프트웨어과',
        
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.03.20 ~',
        activity: 'ICT멘토링 한이음공모전 참여',
        // links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/araiuuma',
          // demo: 'https://www.zoomkoding.com',
        // },
        
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.04.04 ~',
        activity: '개인 블로그 운영',
        
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.06.18',
        activity: '정보처리기사 취득',
        
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '2024 ICT멘토링 한이음공모전',
        description:
          '2024 ICT멘토링 한이음공모전에 전력관리플랫폼을 주제로 참여하게 되었습니다.',
        techStack: ['Embedded', 'Web-App'],
        thumbnailUrl: 'ict.png',
        links: {
          post: 'https://github.com/araiuuma', // /넣고 md파일 넣을 예정,
          github: 'https://github.com/araiuuma',
          demo: 'https://github.com/araiuuma',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '자녀용 PC 스크린타임 관리 프로그램 : QEAST TO PLAY',
        description:
          '파이썬의 Tkinter와 데이터베이스를 연동하여 자녀가 부모의 미션을 수행하고 보상으로 자유롭게 컴퓨터를 할 수 있는 시간을 얻을 수 있는 PC 사용시간 관리 프로그램을 구현하는 미니 프로젝트 입니다.',
        techStack: ['Python', 'SQLite'],
        thumbnailUrl: 'tkinter.png',
        links: {
          post: 'https://github.com/araiuuma', // /넣고 md파일 넣을 예정,
          github: 'https://github.com/araiuuma',
          demo: 'https://github.com/araiuuma',
        },
      },
    ],
  },
};
