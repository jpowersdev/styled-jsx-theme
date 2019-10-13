import { themeValues } from '../styles/Theme';

const ContactForm = () => {
  return (
    <>
      <form id='contact-form' className='fullwidth'>
        <label form='contact-form'>
          <h3>Ask Us Your Questions</h3>
        </label>
        <input placeholder='Name' name='name' />
        <input placeholder='Email' name='name' />
        <input placeholder='Message' name='name' />
        <input type='submit' value='submit' />
      </form>
      <style jsx>{`
        form {
          background: ${themeValues.colorBgAlt};
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-template-rows: 8ch 2ch;
          justify-content: center;
          align-items: center;
          grid-gap: 2ch;
          padding: 1em 0 3em;
        }
        label {
          text-align: center;
          grid-column: 1 / -1;
        }
        input {
          padding: 5px 10px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

function Test() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <figure>
                <img src='/static/favicon.ico' alt='logo' />
              </figure>
            </li>
            <li>
              <a href='#'>Page</a>
            </li>
            <li>
              <a href='#'>Page</a>
            </li>
            <li>
              <a href='#'>Page</a>
            </li>
            <li>
              <a href='#'>Page</a>
            </li>
            <li>
              <a href='#'>Page</a>
            </li>
          </ul>
        </nav>
        <h1>Page Heading</h1>
      </header>
      <aside>
        <h3>Table of Contents</h3>
        <nav>
          <ul>
            <li>
              <a href='#article-1'>Article One</a>
            </li>
            <li>
              <a href='#article-2'>Article Two</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <section>
          <h2>Section Heading</h2>
          <article id='article-1'>
            <h3>Article One</h3>
            <p>
              Praesent nec erat rutrum, malesuada libero in, tempus tortor.
              Aliquam eget cursus libero, non imperdiet odio. Phasellus
              vulputate urna at velit ultrices interdum. Aliquam auctor rhoncus
              bibendum. Sed et lacus sit amet tellus consectetur consectetur et
              eleifend dui. <strong>Morbi</strong> rhoncus justo ac massa
              ornare, eu ornare ligula auctor. Mauris vestibulum aliquam tellus
              at tempus.
            </p>
            <figure>
              <figcaption>List</figcaption>
              <ul>
                <li>List Item</li>
                <li>List Item</li>
                <li>List Item</li>
              </ul>
            </figure>
            <p>
              Aliquam mattis lacus mi, sit amet condimentum lectus laoreet nec.
              Nullam in sodales massa. Praesent et mauris lobortis, tempor nulla
              at, feugiat quam. Sed quis porttitor orci. Morbi est ipsum,
              sollicitudin a quam et, varius convallis risus. Maecenas eu diam
              ac nunc pellentesque feugiat nec quis sapien. Ut tincidunt tortor
              a lorem condimentum, consectetur interdum ex ornare. Curabitur
              accumsan nunc massa, at semper ipsum luctus eu.
            </p>
          </article>
          <article id='article-2'>
            <h3>Article Two</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              ipsum interdum, rhoncus nunc quis, maximus est. Ut et aliquet
              enim, sed fringilla velit. Pellentesque purus orci, sollicitudin
              eu gravida vitae, finibus sed tellus. Quisque turpis odio, dapibus
              nec condimentum ac, molestie ac dui. Proin tincidunt massa et
              convallis porta. In ut tristique urna. Curabitur ligula ex,
              volutpat eu orci vitae, suscipit mattis ipsum. Etiam eu sem sit
              amet ipsum blandit tristique vel at ante. Donec nisl nisl, egestas
              ac lacus ac, auctor venenatis nibh. Nam scelerisque, massa vitae
              bibendum congue, est dolor tristique mauris, sed ultricies turpis
              magna at ligula. Nullam in tellus metus. Quisque nec fermentum
              metus. Aliquam id lacus id erat malesuada convallis. Nam eu massa
              pellentesque, imperdiet lorem vitae, tempus arcu. Phasellus
              laoreet, augue sit amet sagittis varius, tortor diam elementum
              felis, ac rhoncus ante orci ut enim.
            </p>
            <p>
              Donec efficitur erat ac enim lacinia, ut interdum purus ultricies.
              In sagittis tristique sodales. Vivamus bibendum velit sit amet
              massa lacinia, vel tempor quam pretium. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Phasellus tristique dui lobortis urna porta, ac pharetra erat
              scelerisque. Nunc eu nunc diam. Sed eget tellus tincidunt sapien
              finibus tempus ac sit amet risus. Praesent dignissim posuere lacus
              in aliquam.
            </p>
          </article>
        </section>
      </main>

      <ContactForm />
      <footer>
        <figure>
          <img src='/static/favicon.ico' alt='logo' />
        </figure>
        <article>
          <h4>Company Address</h4>
          <ul>
            <li>888 999 1234</li>
            <li>
              300 Creek Road <br /> West Plains NJ
            </li>
          </ul>
        </article>
        <article>
          <h4>Company Address</h4>
          <ul>
            <li>888 999 1234</li>
            <li>
              300 Creek Road <br /> West Plains NJ
            </li>
          </ul>
        </article>
      </footer>
      <style jsx>{`
        :global(#__next) {
          max-width: 140ch;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 35ch auto;
          grid-auto-rows: auto;
          grid-template-areas: 'header header' 'aside main' '. .' 'footer footer';
        }
        header {
          grid-area: header;
          text-align: center;
        }
        header > nav > ul {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        aside > nav > ul {
          padding-left: 0;
        }
        aside {
          grid-area: aside;
          padding: 2ch;
        }
        main {
          grid-area: main;
          padding: 2ch;
        }
        footer {
          grid-area: footer;
          display: flex;
          justify-content: space-around;
        }
        header figure,
        footer figure {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .spacer {
          height: 200px;
          margin: 2em 0;
          background: ${themeValues.colorBgAlt};
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
}
export default Test;
