/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Front-End',
    image: '/img/001.png',
    description: (
      <>
        <li>具備 Angular 大型專案開發經驗</li>
        <li>透過 RxJS 撰寫非同步操作</li>
        <li>熟悉 React.js / Styled Components</li>
        <li>熟悉 Material / Bootstrap UI 框架</li>
        <li>熟悉 CSS Flexbox 排版工具</li>
      </>
    ),
  },
  {
    title: 'Work Flow & Others',
    image: '/img/003.png',
    description: (
      <>
        <li>熟悉 Git 及版本控制流程</li>
        <li>具備 HyBrid App 開發經驗</li>
        <li>瞭解 SQL Injection / XSS/ CSRF 及如何防備</li>
        <li>熟悉 RESTful API 規範</li>
        <li>具備 AWS / Heroku / Netlify 部署經驗</li>
      </>
    ),
  },
  {
    title: 'Cat & Japaholic',
    image: '/img/beer_ru.jpg',
    description: (
      <>
        <li>家裡有養隻貓叫做<a href="https://www.instagram.com/beeru_ru/"> Beeru</a></li>
        <li>透過自學通過 JLPT N1，還是個動漫宅</li>
        <li>最喜歡的動畫是銀之匙，日劇是 Unnatural</li>
        <li>曾赴日打工度假一年</li>
        <li>曾為了看舞台劇實現東京一日特攻</li>
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
