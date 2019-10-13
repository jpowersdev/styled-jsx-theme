import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/NextHead';
import Navigation from '../components/Navigation';
import { themeValues } from '../styles/Theme';

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title='Home' />
      <Navigation />

      <div className='hero'>
        <h1 className='title'>Welcome to Next!</h1>
        <p className='description'>
          To get started, edit the <code>pages/index.js</code> or{' '}
          <code>pages/api/date.js</code> files, then save to reload.
        </p>

        <p className='row date'>
          The date is:&nbsp;{' '}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
            <span className='loading'></span>
          )}
        </p>

        <div className='row'>
          <a href='//github.com/zeit/next.js#setup' className='card'>
            <h4>Getting Started &rarr;</h4>
            <p>Learn more about Next.js on GitHub and in their examples.</p>
          </a>

          <a
            href='//github.com/zeit/next.js/tree/master/examples'
            className='card'
          >
            <h4>Examples &rarr;</h4>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>

          <a href='//github.com/zeit/next.js' className='card'>
            <h4>Create Next App &rarr;</h4>
            <p>Was this tool helpful? Let us know how we can improve it!</p>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          text-align: center;
        }
        .row {
          display: flex;
          justify-content: space-between;
        }
        .row.date {
          justify-content: center;
        }
        .card {
          text-align: left;
          display: block;
          border: 1px solid ${themeValues.colorFade};
          margin: 20px auto 40px;
          padding: 0px 24px 24px;
          max-width: 25%;
        }
      `}</style>
    </div>
  );
};

export default Home;
