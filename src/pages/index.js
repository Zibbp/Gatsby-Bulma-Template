import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />
      <section class='hero is-info is-large'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>Large title</h1>
            <h2 class='subtitle'>Large subtitle</h2>
          </div>
        </div>
      </section>
      <div className='container'>
        <div class='tile is-ancestor'>
          <div class='tile is-vertical is-8'>
            <div class='tile'>
              <div class='tile is-parent is-vertical'>
                <article class='tile is-child notification is-primary'>
                  <p class='title'>Vertical...</p>
                  <p class='subtitle'>Top tile</p>
                </article>
                <article class='tile is-child notification is-warning'>
                  <p class='title'>...tiles</p>
                  <p class='subtitle'>Bottom tile</p>
                </article>
              </div>
              <div class='tile is-parent'>
                <article class='tile is-child notification is-info'>
                  <p class='title'>Middle tile</p>
                  <p class='subtitle'>With an image</p>
                  <figure class='image is-4by3'>
                    <img src='https://bulma.io/images/placeholders/640x480.png' />
                  </figure>
                </article>
              </div>
            </div>
            <div class='tile is-parent'>
              <article class='tile is-child notification is-danger'>
                <p class='title'>Wide tile</p>
                <p class='subtitle'>Aligned with the right tile</p>
                <div class='content'></div>
              </article>
            </div>
          </div>
          <div class='tile is-parent'>
            <article class='tile is-child notification is-success'>
              <div class='content'>
                <p class='title'>Tall tile</p>
                <p class='subtitle'>With even more content</p>
                <div class='content'></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
