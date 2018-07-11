import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return {
      description: `Web Developer desde que conocí los “encantos” de JQuery. Frontend lead en Coderty, proyecto que desde hace unos años es mi vida y mi oficina, y donde Angular ocupa un espacio central, abarcando proyectos de todo tipo de envergadura.
      Amante del deporte, los animales y las comunidades de aprendizaje en la que poder aportar y obtener conocimiento. Organizador de Angular Almería y AlmeríaJS.
      Habitante de Almería por necesidad vital y paisaje lunar, aunque viajante inquieto para poder comparar.`,
      position: 'Frontend Lead Coderty',
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
          desc: `CODERTY es una empresa de desarrollo de software. Es la respuesta tecnológica a todo aquello que imaginas, ideas o proyectas. Creamos soluciones a medida adaptando las últimas tecnologías a tus necesidades. WE ENJOY SOFTWARE!`,
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
          desc: `Herramienta de software libre escrita en NodeJS que te permite gestionar y planificar tus procesos. Céntrate en la lógica de negocio y olvídate de gestionar dependencias entre procesos, jobs, gestión de errores o notificaciones.`,
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
          title: 'AlmeríaJS',
          desc: `Grupo local de desarrolladores web. Cualquier framework Javascript (de los muchos que hay) es válido. No solo hablamos de los frameworks en sí, sino cualquier proyecto de sorftware libre (OSS) desarrollado con JS!`,
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
      meta: [
        {
          name: 'author',
          content: 'Álvaro Quirós'
        },
        {
          name: 'keywords',
          content: 'angular, almeria, seo, friendly, desarrollo, web'
        },
        {
          name: 'description',
          content:
            'Frontend lead en Coderty, donde Angular ocupa un espacio central. Quién soy y cómo he llegado hasta aquí es importante para saber de qué manera podemos colaborar. Implementar Angular en proyectos grandes y colaborar con otros equipos de desarrollo es lo que más me apasiona!'
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
          content:
            'Frontend lead en Coderty, donde Angular ocupa un espacio central. Quién soy y cómo he llegado hasta aquí es importante para saber de qué manera podemos colaborar. Implementar Angular en proyectos grandes y colaborar con otros equipos de desarrollo es lo que más me apasiona!'
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
          content:
            'Frontend lead en Coderty, donde Angular ocupa un espacio central. Quién soy y cómo he llegado hasta aquí es importante para saber de qué manera podemos colaborar. Implementar Angular en proyectos grandes y colaborar con otros equipos de desarrollo es lo que más me apasiona!'
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
    };
  }
}
