import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/roadmap">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Free resources and a roadmap to learn Machine Learning and Artificial Intelligence in 2025">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>📚 Learn</h3>
                </div>
                <div className="card__body">
                  <p>Comprehensive AI/ML roadmap with courses, books, and tutorials for all skill levels.</p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>🛠️ Build</h3>
                </div>
                <div className="card__body">
                  <p>Hands-on projects from beginner to advanced levels with real-world applications.</p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>💼 Career</h3>
                </div>
                <div className="card__body">
                  <p>Interview prep resources, certifications, and career guidance for AI/ML roles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
