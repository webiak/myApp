import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  const url = 'https://sk-sk.facebook.com/slovensky.skauting/'
  const twit = 'https://twitter.com/skauti'
  const insta = 'https://www.instagram.com/slovensky.skauting/'
  const yt = 'https://m.youtube.com/user/skautsk/videos'
  const slsk = 'https://www.skauting.sk/' //momentalne nefunguje
  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <a href={slsk} className='social-logo'>
              SLSK
            </a>
          </div>
          <small className='website-rights'>SLSK © 2022</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href={url}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href={insta}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link youtube'
              href={yt}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='social-icon-link twitter'
              href={twit}
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;