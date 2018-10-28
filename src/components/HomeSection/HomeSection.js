import React from 'react';
import styles from './HomeSection.module.css';

const HomeSection = (props) => {
  return (
    <section>
      <article id={styles.article}>
        <h1>Send money and make purchases at approved merchants</h1>
        <button>Sign Up with Facebook</button>
        <p>We'll never post without your permission.</p>
        <p>or with your email address</p>
      </article>
    </section>
  );
};

export default HomeSection;