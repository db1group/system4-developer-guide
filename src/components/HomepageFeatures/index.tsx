import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Esse dev guide precisa ser em uma linguagem de fácil entendimento e com muitos exemplos.
      </>
    ),
  },
  {
    title: 'Documento vivo',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Precisamos á todo momento ir atualizando esse documento, com as melhores práticas e acordos 
       dentre o time, aqui é onde vamos nortear toda a qualidade de código que entregamos ao cliente.
      </>
    ),
  },
  {
    title: 'Feito com Docusaurus e markdown',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Esse documento é feito utilizando docusaurus e markdown, para que possamos ter uma documentação
        organizada e de fácil acesso.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
