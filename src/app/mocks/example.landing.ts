import { Landing } from 'ts2landing';

export const exampleLanding: Landing = {
  id: 'landing',
  intro: {
    title: {
      size: '75px',
      textAlign: 'center',
      text: 'TS2LANDING',
    },
    subtitle: {
      size: '45px',
      textAlign: 'center',
      text: 'Transforming an object to a Landing Page.',
    },
    display: 'basic',
    animation: 'TitleZoom',
    linkButton: {
      link: 'https://www.npmjs.com/package/ts2landing',
      text: {
        size: '15px',
        textAlign: 'center',
        text: 'NPM',
      },
    },
    logo: {
      height: '200px',
      width: '200px',
      padding: {
        bottom: '10px',
        left: '10px',
        right: '10px',
        top: '10px',
      },
      margin: {
        bottom: '10px',
        left: '10px',
        right: '10px',
        top: '10px',
      },
      url: 'https://avatars.githubusercontent.com/u/100232264?v=4',
    },
    padding: {
      bottom: '10px',
      left: '10px',
      right: '10px',
      top: '10px',
    },
  },
  content: [
    {
      id: 'content',
      align: 'center',
      // title: {
      //   size: '45px',
      //   textAlign: 'center',
      //   text: 'Easy to implement',
      // },
      // subtitle: {
      //   size: '25px',
      //   textAlign: 'center',
      //   text: 'Just an object',
      // },
      scrollFadeInEffect: true,
      text: {
        size: '35px',
        textAlign: 'start',
        text: 'Transform a customizable object to a basic Landing Page.',
      },
      // image: {
      //   height: '200px',
      //   width: '200px',
      //   imagePosition: 'right',
      //   url: 'https://avatars.githubusercontent.com/u/100232264?v=4',
      //   padding: {
      //     left: '20px'
      //   }
      // },
      padding: {
        all: '30px',
      },
      subcontent: {
        direction: 'row',
        gap: '100px',
        padding: {
          all: '30px',
        },
        content: [
          {
            id: 'subcontent',
            align: 'center',
            title: {
              size: '45px',
              textAlign: 'center',
              text: 'Easy to implement',
            },
            subtitle: {
              size: '25px',
              textAlign: 'center',
              text: 'Avoid coding HTML and CSS',
            },
            scrollFadeInEffect: true,
            image: {
              height: '150px',
              width: '250px',
              imagePosition: 'right',
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png',
              padding: {
                left: '50px'
              }
            },
            padding: {
              all: '50px'
            }
          },
          {
            id: 'content',
            align: 'center',
            title: {
              size: '45px',
              textAlign: 'center',
              text: 'Created by Hector Granell',
            },
            subtitle: {
              size: '25px',
              textAlign: 'center',
              text: 'Just for fun ;)',
            },
            scrollFadeInEffect: true,
            // text: {
            //   size: '15px',
            //   textAlign: 'start',
            //   text: '',
            // },
            image: {
              height: '100px',
              width: '100px',
              imagePosition: 'right',
              url: 'https://avatars.githubusercontent.com/u/100232264?v=4',
              padding: {
                right: '40px',
                left: '40px'
              }  
            },
            padding: {
              all: '50px'
            }
          },
        ],
      },
    },
    {
      id: 'content',
      align: 'center',
      scrollFadeInEffect: true,
      title: {
        size: '55px',
        textAlign: 'start',
        text: 'More coming soon...',
      },
      text: {
        size: '25px',
        textAlign: 'start',
        text: 'Animations, more settings, component injection, lists, videos...',
      },
      padding: {
        top: '150px',
      },
      margin: {
        bottom: '150px'
      }
    }
  ],
};
