import React, { Component } from 'react';
import Layout from '../components/Layout';
import GradientBar from '../components/GradientBar';
import Subtitle from '../components/Subtitle';
import PortfolioCard from '../components/PortfolioCard';
import ArticleCard from '../components/ArticleCard';
import Link from 'next/link'

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showPopup: false,
      showBlog: false
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup () {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  scroll (elementId) {
    const element = window.document.querySelector(`#${elementId}`);
    element.scrollIntoView({
      behavior: "smooth"
    });
  }

  //<li><a onClick={this.togglePopup}>CONTACT ME</a></li>

  render () {
    return (
      <>
        <Layout title="José Iván Sandoya" showPopup={this.state.showPopup} togglePopup={this.togglePopup}>
          <div className="header">
            <div className="wrapper">
              <div className="item text">
                <div>
                  <h1>JOSE <span>SANDOYA</span></h1>
                  <h2>Software Engineer</h2>
  
                  <p>Seven years of progressive experience.
                  Looking for permanently learning about new tools and techniques. I consider myself an active fan of trending technologies like machine learning, IoT and mobile.</p>
  
                  <div className="social">
                    <Link href="https://www.linkedin.com/in/joseivansandoya/">
                      <a target="_blank"><img src="/static/in.svg" alt="LinkedIn" /></a>
                    </Link>
                    <Link href="https://github.com/joseivansandoya">
                      <a target="_blank"><img src="/static/gh.svg" alt="GitHub" /></a>
                    </Link>
                    <Link href="https://twitter.com/joseivansandoya">
                      <a target="_blank"><img src="/static/tw.svg" alt="Twitter" /></a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item photo">
                <img src="/static/jose-ivan-sandoya.jpg" alt="Jose Ivan Sandoya" />
              </div>
            </div>
          </div>
  
          <GradientBar>
            <div className="wrapper">
              <ul className="menu">
                <li>
                  <Link href="mailto:jisandoya@gmail.com">
                    <a target="_blank">CONTACT ME</a>
                  </Link>
                </li>
                <li><a onClick={() => this.scroll('portfolio')}>PORTFOLIO</a></li>
                {this.state.showBlog &&
                  <li><a onClick={() => this.scroll('blog')}>BLOG</a></li>
                }
              </ul>
            </div>
          </GradientBar>
  
          <div className="portfolio" id="portfolio">
            <div className="wrapper">
              <Subtitle
                content="PORTFOLIO"
                complementaryText="These are my last projects"
                titleColor="#FFFFFF"
              />
  
              <div className="collection">
                <PortfolioCard 
                  image="/static/react-native.jpg"
                  link="https://github.com/joseivansandoya/drpie"
                  title="Doctor Pie Ecuador (mobile application)"
                  stack="React | React Native | LAMP"
                />
                <PortfolioCard 
                  image="/static/react.jpg"
                  link="https://github.com/joseivansandoya/styled"
                  title="Styled components practical POC"
                  stack="React | Styled Components"
                />
                <PortfolioCard 
                  image="/static/graphql.jpg"
                  link="https://github.com/joseivansandoya/server-graphql"
                  title="GraphQL practical exercise"
                  stack="Node.js | GraphQL"
                />
              </div>
            </div>
          </div>
          
          {this.state.showBlog &&
            <div className="blog" id="blog">
              <div className="wrapper">
                <Subtitle
                  content="BLOG"
                  complementaryText="Lorem ipsum dolor sit amet"
                  titleColor="#212121"
                />
    
                <div className="collection">
                  <ArticleCard />
                  <ArticleCard />
                  <ArticleCard />
                </div>
              </div>
            </div>
          }
        </Layout>
  
        <style jsx>{`
          .header .wrapper {
            display: flex;
            flex-wrap: nowrap
          }
  
          .item {
            width: 50%;
          }
  
          .item.text {
            align-self: center;
          }
  
          .item.text h1 {
            font-weight: normal;
            font-size: 38px;
          }
  
          .item.text h1 span {
            font-weight: bold;
          }
  
          .item.text h2 {
            font-weight: lighter;
            color: #212121;
            margin-top: 10px;
            margin-bottom: 40px;
          }
  
          .item.text p {
            color: #212121;
            width: 80%;
            line-height: 21px;
          }
  
          .social {
            margin-top: 20px;
          }
  
          .social a {
            margin-right: 10px;
          }
  
          .social img {
            width: 22px;
          }
  
          .item img {
            max-width: 100%;
            position: relative;
            top: 3px;
          }
  
          .menu {
            list-style: none;
            display: flex;
            width: 100%;
            padding: 30px 0;
          }
  
          .menu li {
            flex-grow: 1;
            text-align: center;
          }
  
          .menu li a {
            color: #FFFFFF;
            cursor: pointer;
            opacity: 0.8;
            text-decoration: none;
          }
  
          .menu li a:hover {
            opacity: 1;
          }
  
          .portfolio {
            background-color: #282828;
          }
  
          .portfolio .wrapper {
            padding-top: 30px;
            padding-bottom: 30px;
          }
  
          .blog {
            background-color: #ededed;
            padding-bottom: 40px;
          }
  
          .portfolio .collection, .blog .collection {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 20px;
          }
          
          .blog .wrapper {
            padding-top: 30px;
            padding-bottom: 30px;
          }
  
          @media all and (max-width: 1200px) {
            .wrapper {
              padding: 0 20px;
            }
  
            .item.text p {
              width: 90%;
            }
          }
  
          @media all and (max-width: 720px) {
            .item.text p {
              width: 100%;
            }
          }
  
          @media all and (max-width: 680px) {
            .wrapper {
              flex-direction: column;
            }
  
            .item {
              width: 100%;
            }
  
            .item.text {
              text-align: center;
              padding-top: 40px;
            }
          }
  
          @media all and (max-width: 420px) {
            .menu {
              display: block;
              padding: 15px 0 !important;
            }
  
            .menu li {
              margin: 15px 0;
            }
          }
  
          @media all and (max-width: 340px) {
            .collection {
              grid-template-columns: auto;
            }
  
            .collection .horizontal-card {
              height: auto !important;
            }
  
            .horizontal-card .image {
              display: none;
            }
  
            .horizontal-card .description {
              width: 100%;
            }
          }
        `}</style>
      </>
    )
  }
}

export default Index;
