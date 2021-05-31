import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fun',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: <>If it isn't fun, it isn't worth doing. We want everyone to have fun the whole time they're here.</>,
  },
  {
    title: 'Active',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Kids have fun when they are being active.  Practices and games will keep the kids active physically and mentally.
      </>
    ),
  },
  {
    title: 'Engaged',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>Fun + Active = Engaged.  In order to learn, you have to be engaged and that's the goal for our season.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
