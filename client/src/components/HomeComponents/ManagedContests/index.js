import React from 'react';
import CONSTANTS from '../../../constants';
import articles from './managedContests.json';
import styles from './ManagedContests.module.scss';

const ManagedContests = () => {
  const showArticle = ({ img, alt, heading, content }, i) => (
    <article className={styles.card} key={i}>
      <div className={styles.headingWrap}>
        <img
          alt={alt}
          className={styles.img}
          src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`}
        />
        <h3 className={styles.heading}>{heading}</h3>
      </div>
      <p className={styles.content}>{content}</p>
    </article>
  )
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Managed Contests</h2>
      <h3 className={styles.subtitle}>A Naming Agency Experience (minus the Agency-level price tag)</h3>
      <p className={styles.description}>Our hybrid-solution partners you with a trained Squadhelp branding consultant who will guide your crowdsourcing process step-by-step to get the best results possible.</p>
      <div className={styles.cardContainer}>{articles.map(showArticle)}</div>
      <button className={styles.button}>learn more about managed contests</button>
    </section>
  );
}

export default ManagedContests;
