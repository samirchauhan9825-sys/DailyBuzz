import React from 'react'

function Contact() {
  return (
    <div>
<main className="position-relative">
  <div className="container">
    <div className="entry-header entry-header-2 mb-50 mt-50 text-center">
      <div className="thumb-overlay img-hover-slide border-radius-5 position-relative" style={{backgroundImage: 'url(assets/imgs/news-24.jpg)'}}>
        <div className="position-midded">
          <div className="entry-meta meta-0 font-small mb-30">
            <a href="category.html"><span className="post-cat bg-success color-white">Get In Touch</span></a>
          </div>
          <h1 className="post-title mb-30 text-white">
            Contact Us
          </h1>
          <div className="entry-meta meta-1 font-x-small color-grey text-uppercase text-white">
            <span className="mr-5">
              <ion-icon name="planet" />
            </span>
            <span className="mr-15">alithemes.com</span>
            <span className="ml-15 mr-5">
              <ion-icon name="call" />
            </span>
            <span>(+01) 234 567 89</span>
          </div>
        </div>
      </div>
    </div>
    {/*end entry header*/}
    <div className="row mb-50">
      <div className="col-lg-2 d-none d-lg-block" />
      <div className="col-lg-8 col-md-12">
        <div className="single-social-share single-sidebar-share mt-30">
          <ul>
            <li><a className="social-icon facebook-icon text-xs-center" target="_blank" href="#"><i className="ti-facebook" /></a></li>
            <li><a className="social-icon twitter-icon text-xs-center" target="_blank" href="#"><i className="ti-twitter-alt" /></a></li>
            <li><a className="social-icon pinterest-icon text-xs-center" target="_blank" href="#"><i className="ti-pinterest" /></a></li>
            <li><a className="social-icon instagram-icon text-xs-center" target="_blank" href="#"><i className="ti-instagram" /></a></li>
            <li><a className="social-icon linkedin-icon text-xs-center" target="_blank" href="#"><i className="ti-linkedin" /></a></li>
            <li><a className="social-icon email-icon text-xs-center" target="_blank" href="#"><i className="ti-email" /></a></li>
          </ul>
        </div>
        <div className="single-excerpt">
          <p className="font-large">We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers.
            We are passionate team with the mission for achieving the perfection in web design.
            All designs are made by love with pixel perfect design and excellent coding quality. Speed, security and SEO friendly alway in our mind.</p>
          <hr className="wp-block-separator is-style-wide" />
          <p><span className="mr-5">
              <ion-icon name="location-outline" />
            </span><strong>Address</strong>: Lorem 142 Str., 2352, Ipsum, State, USA</p>
          <p><span className="mr-5">
              <ion-icon name="home-outline" />
            </span><strong>Our website</strong>: https://alithemes.com</p>
          <p><span className="mr-5">
              <ion-icon name="planet-outline" />
            </span><strong>Support center</strong>: https://alithemes.ticksy.com</p>
        </div>
        <div className="entry-main-content mt-50">
          <h3>Advertise</h3>
          <hr className="wp-block-separator is-style-wide" />
          <p>Please contact us directly at ads@NewsViral.com. For large or unique campaigns please email sale@NewsViral.com for requests-for-proposal and additional pricing information. </p>
          <h1 className="mt-30">Get in touch</h1>
          <hr className="wp-block-separator is-style-wide" />
          <form className="form-contact comment_form" action="#" id="commentForm">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="website" id="website" type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Message" defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="button button-contactForm">Send message</button>
            </div>
          </form>
        </div>
        <div className="entry-bottom mt-50 mb-30">
          <div className="overflow-hidden mt-30">
            <div className="single-social-share float-left">
              <ul className="d-inline-block list-inline">
                <li className="list-inline-item"><span className="font-small text-muted"><i className="ti-sharethis mr-5" />Share: </span></li>
                <li className="list-inline-item"><a className="social-icon facebook-icon text-xs-center" target="_blank" href="#"><i className="ti-facebook" /></a></li>
                <li className="list-inline-item"><a className="social-icon twitter-icon text-xs-center" target="_blank" href="#"><i className="ti-twitter-alt" /></a></li>
                <li className="list-inline-item"><a className="social-icon pinterest-icon text-xs-center" target="_blank" href="#"><i className="ti-pinterest" /></a></li>
                <li className="list-inline-item"><a className="social-icon instagram-icon text-xs-center" target="_blank" href="#"><i className="ti-instagram" /></a></li>
                <li className="list-inline-item"><a className="social-icon linkedin-icon text-xs-center" target="_blank" href="#"><i className="ti-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End row*/}
    <div className="row">
      <div className="col-12 text-center mb-50">
        <a href="#">
          <img className="d-inline border-radius-10" src="assets/imgs/ads.jpg" alt />
        </a>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Contact