import { Injectable } from '@angular/core';
import { MainDescription } from './models/main-description.interface';
import { of, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor() {}

  getData(): Observable<MainDescription> {
    return of(
      {
      name: 'Álvaro Quirós',
      description:
        'Disfrutando como Desarrollador de Software desde hace 10 años. Siempre muy cerca de la Web, ' +
        'hace algo más de 5 años decidí apostar por Javascript con NodeJS y Angular como mis herramientas principales. ' +
        'Frontend Lead en Coderty, organizador de Angular Almería y AlmeríaJS, speaker y organizador de NGSpain. Viajero inquieto ' +
        'y amante de los animales.',
      position: 'Frontend Lead Coderty',
      profilePic: {
        src: 'assets/profile.jpg',
        alt: 'Foto de perfil'
      },
      socialLinks: [
        {
          icon: 'fa-svg fa-twitter',
          link: 'https://twitter.com/aloDev'
        },
        {
          icon: 'fa-svg fa-github',
          link: 'https://github.com/alo'
        },
        {
          icon: 'fa-svg fa-linkedin',
          link: 'https://www.linkedin.com/in/alodev/'
        },
        {
          icon: 'fa-svg fa-instagram',
          link: 'https://www.instagram.com/alo360/',
          advice: true
        }
      ],
      projects: [
        {
          title: 'Coderty',
          subtitle: 'Yes, we do!',
          desc:
            'CODERTY es una empresa de desarrollo de software. Es la respuesta tecnológica a todo aquello que imaginas, ' +
            'ideas o proyectas. Creamos soluciones a medida adaptando las últimas tecnologías a tus necesidades. ' +
            'WE <b>#ENJOY</b> SOFTWARE!',
          imgSrc: 'assets/coderty-logo.png',
          imgAlt: 'Logo Coderty',
          socialLinks: [
            {
              icon: 'fa-svg fa-earth',
              link: 'http://coderty.com'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/coderty'
            },
            {
              icon: 'fa-svg fa-linkedin',
              link: 'https://www.linkedin.com/company/coderty/'
            },
            {
              icon: 'fa-svg fa-instagram',
              link: 'https://www.instagram.com/coderty/'
            }
          ]
        },
        {
          title: 'Runnerty',
          desc:
            'Herramienta de software libre escrita en NodeJS que te permite gestionar y planificar tus procesos. ' +
            'Céntrate en la lógica de negocio y olvídate de gestionar dependencias entre procesos, jobs, gestión de ' +
            'errores o notificaciones.',
          subtitle: 'Process Orchestrator',
          imgSrc: 'assets/runnerty-logo2.png',
          imgAlt: 'Logo runnerty',
          socialLinks: [
            {
              icon: 'fa-svg fa-earth',
              link: 'http://runnerty.io'
            },
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/aloDev'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/alo'
            }
          ]
        },
        {
          title: 'NGSpain',
          subtitle: 'Madrid. October 19-20, 2019',
          desc:
            'Una conferencia Angular sin ánimo de lucro y dirigida por la comunidad. Los organizadores son muy activos dentro ' +
            'de la comunidad Angular. El objetivo es crear un evento acogedor que esté abierto para todos los que deseen asistir.',
          imgSrc: 'assets/ngspain.png',
          imgAlt: 'Logo NGSpain',
          socialLinks: [
            {
              icon: 'fa-svg fa-earth',
              link: 'https://ngspain.com'
            },
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/ngspain'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/ngspain'
            }
          ]
        },
        {
          title: 'AlmeríaJS',
          desc:
            'Grupo local de desarrolladores web. Cualquier framework Javascript (de los muchos que hay) es válido. ' +
            'No solo hablamos de los frameworks en sí, sino cualquier proyecto de sorftware libre (OSS) desarrollado con JS! ' +
            'Y cerveza, la verdad.',
          imgSrc: 'assets/almeriajs.png',
          subtitle: 'Angular Almeria friends',
          imgAlt: 'Logo AlmeriaJS',
          socialLinks: [
            {
              icon: 'fa-svg fa-twitter',
              link: 'https://twitter.com/almeriajs'
            },
            {
              icon: 'fa-svg fa-github',
              link: 'https://github.com/almeriajs'
            },
            {
              icon: 'fa-svg fa-meetup',
              link: 'https://www.meetup.com/almeriajs/'
            }
          ]
        }
      ],
      title: 'Álvaro Quirós',
      metas: [
        {
          name: 'author',
          content: 'Álvaro Quirós'
        },
        {
          name: 'keywords',
          content: 'angular, almeria, seo, friendly, desarrollo, web, angularjs'
        },
        {
          name: 'description',
          content: 'Frontend lead en Coderty, donde Angular ocupa un espacio central. Speaker, organizer & mentor. '
        },
        {
          name: 'copyright',
          content: 'Álvaro Quirós'
        },
        {
          property: 'og:title',
          content: 'Álvaro Quirós'
        },
        {
          property: 'og:description',
          content: 'Frontend lead en Coderty, donde Angular ocupa un espacio central. Speaker, organizer & mentor. '
        },
        {
          property: 'og:image',
          content: 'https://alo.ninja/assets/alo.jpeg'
        },
        {
          property: 'og:url',
          content: 'https://alo.ninja'
        },
        {
          property: 'og:site_name',
          content: 'alo.ninja'
        },
        {
          name: 'twitter:title',
          content: 'Álvaro Quirós'
        },
        {
          name: 'twitter:description',
          content: 'Frontend lead en Coderty, donde Angular ocupa un espacio central. Speaker, organizer & mentor. '
        },
        {
          name: 'twitter:image',
          content: 'https://alo.ninja/assets/alo.jpeg'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
    );
  }

  getAsyncData(): Observable<any> {
    return of({ testaso: 'test' });
  }
}
