import React, { Component } from 'react';
import Layout from '../components/Layout';
import GradientBar from '../components/GradientBar';
import Subtitle from '../components/Subtitle';

class Article extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showPopup: false
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup () {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render () {
    return (
      <>
        <Layout title="Article" showPopup={this.state.showPopup} togglePopup={this.togglePopup}>
          <GradientBar>
            <div className="wrapper">
              <ul className="menu">
                <li><a>HOME</a></li>
                <li><a onClick={this.togglePopup}>CONTACT ME</a></li>
              </ul>
            </div>
          </GradientBar>

          <div className="article-content">
            <div className="wrapper">
              <h2>This is article title</h2>
              <span className="date">Published: 2019-01-31</span>

              <img src="/static/myimage.jpg" alt="myimage"/>

              <div className="article-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales diam at leo ultricies feugiat. Integer augue ipsum, faucibus in ultricies non, ornare eu urna. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pretium justo eu ex aliquet, at ultricies enim semper. Aliquam ac elit at ante eleifend faucibus a non quam. Donec aliquet venenatis augue. Suspendisse at erat placerat, egestas magna id, dignissim nulla. Nulla at neque tempus, porta eros mattis, ullamcorper neque.</p>
                <p>Integer dapibus, arcu vitae porta posuere, neque augue rutrum mi, eu malesuada lacus leo id lorem. Vestibulum interdum elit non arcu luctus, a euismod tortor lacinia. Pellentesque pellentesque mi ut nunc blandit, non porttitor nisl auctor. Nulla et sapien sit amet diam ullamcorper sodales sit amet eu nisl. Fusce imperdiet gravida ante, pulvinar pretium justo gravida non. Curabitur scelerisque massa nec interdum dapibus. Etiam tristique sodales risus, at efficitur justo bibendum et. Suspendisse sit amet est neque. Mauris at luctus urna. Donec vitae elementum mi.</p>
              </div>
            </div>
          </div>
        </Layout>

        <style jsx>{`
          .article-content h2 {
            margin-top: 50px;
            margin-bottom: 20px;
            font-size: 32px;
          }

          .article-content .date {
            font-size: 12px;
            color: #212121;
            display: block;
            margin-bottom: 50px;
          }

          .article-content img {
            max-width: 100%;
          }

          .article-body {
            margin: 40px 0;
          }

          .article-body p {
            margin: 0 auto;
            margin-bottom: 20px;
            line-height: 25px;
            width: 80%;
            color: #212121;
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
          }
  
          .menu li a:hover {
            opacity: 1;
          }

          @media all and (max-width: 1200px) {
            .wrapper {
              padding: 0 20px;
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
        `}</style>
      </>
    )
  }
}

export default Article;
