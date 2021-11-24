import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Quick and Fast',
    Svg: require('../../static/img/undraw_fast_loading.svg').default,
    description: (
      <>
        This documentation is built with Docusaurus, thus allowing it to perform faster than most documentation sites.
      </>
    ),
  },
  {
    title: 'Open Source on GitHub',
    Svg: require('../../static/img/undraw_version_control_re_mg66.svg').default,
    description: (
      <>
        The documentation is completely open source, and is licensed under the MIT License. Thus allowing anyone to view and contribute to the docs
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Svg: require('../../static/img/undraw_react_y-7-wq.svg').default,
    description: (
      <>
        The documentation is powered by Docusaurus, which is built on React.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
