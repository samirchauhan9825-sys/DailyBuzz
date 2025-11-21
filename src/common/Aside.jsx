import React from 'react'

function Aside() {
  return (
    <>
  {/*Offcanvas sidebar*/}
<aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar position-right">
  <button className="off-canvas-close"><i className="ti-close" /></button>
  <div className="sidebar-inner">
    {/*Search*/}
    <div className="siderbar-widget mb-50 mt-30">
      <form action="#" method="get" className="search-form position-relative">
        <input type="text" className="search_field" placeholder="Search" defaultValue name="s" />
        <span className="search-icon"><i className="ti-search mr-5" /></span>
      </form>
    </div>
    {/*lastest post*/}
    <div className="sidebar-widget mb-50">
      <div className="widget-header mb-30">
        <h5 className="widget-title">Top <span>Trending</span></h5>
      </div>
      <div className="post-aside-style-2">
        <ul className="list-post">
          <li className="mb-30 wow fadeIn animated">
            <div className="d-flex">
              <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/thumbnail-2.jpg" alt />
                </a>
              </div>
              <div className="post-content media-body">
                <h6 className="post-title mb-10 text-limit-2-row"><a href="single.html">Vancouver woman finds pictures and videos of herself online</a></h6>
                <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                  <span className="post-by">By <a href="author.html">K. Marry</a></span>
                  <span className="post-on">4m ago</span>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-30 wow fadeIn animated">
            <div className="d-flex">
              <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/thumbnail-3.jpg" alt />
                </a>
              </div>
              <div className="post-content media-body">
                <h6 className="post-title mb-10 text-limit-2-row"><a href="single.html">4 Things Emotionally Intelligent People Don’t Do</a></h6>
                <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                  <span className="post-by">By <a href="author.html">Mr. John</a></span>
                  <span className="post-on">3h ago</span>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-30 wow fadeIn animated">
            <div className="d-flex">
              <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/thumbnail-5.jpg" alt />
                </a>
              </div>
              <div className="post-content media-body">
                <h6 className="post-title mb-10 text-limit-2-row"><a href="single.html">Reflections from a Token Black Friend</a></h6>
                <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                  <span className="post-by">By <a href="author.html">Kenedy</a></span>
                  <span className="post-on">4h ago</span>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-30 wow fadeIn animated">
            <div className="d-flex">
              <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/thumbnail-7.jpg" alt />
                </a>
              </div>
              <div className="post-content media-body">
                <h6 className="post-title mb-10 text-limit-2-row"><a href="single.html">How to Identify a Smart Person in 3 Minutes</a></h6>
                <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                  <span className="post-by">By <a href="author.html">Steven</a></span>
                  <span className="post-on">5h ago</span>
                </div>
              </div>
            </div>
          </li>
          <li className="wow fadeIn animated">
            <div className="d-flex">
              <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                <a className="color-white" href="single.html">
                  <img src="assets/imgs/thumbnail-8.jpg" alt />
                </a>
              </div>
              <div className="post-content media-body">
                <h6 className="post-title mb-10 text-limit-2-row"><a href="single.html">Blackface Minstrel Songs Don’t Belong in Children’s Music Class</a></h6>
                <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                  <span className="post-by">By <a href="author.html">J.Smith</a></span>
                  <span className="post-on">5h30 ago</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/*Categories*/}
    <div className="sidebar-widget widget_tag_cloud mb-50">
      <div className="widget-header tags-close mb-20">
        <h5 className="widget-title mt-5">Tags Cloud</h5>
      </div>
      <div className="tagcloud">
        <a href="category.html">Beauty</a>
        <a href="category.html">Book</a>
        <a href="category.html">Design</a>
        <a href="category.html">Fashion</a>
        <a href="category.html">Lifestyle</a>
        <a href="category.html">Travel</a>
        <a href="category.html">Science</a>
        <a href="category.html">Health</a>
        <a href="category.html">Sports</a>
        <a href="category.html">Arts</a>
        <a href="category.html">Books</a>
        <a href="category.html">Style</a>
      </div>
    </div>
    {/*Ads*/}
    <div className="sidebar-widget widget-ads mb-30">
      <div className="widget-header tags-close mb-20">
        <h5 className="widget-title mt-5">Your Ads Here</h5>
      </div>
      <a href="assets/imgs/news-1.jpg" className="play-video" data-animate="zoomIn" data-duration="1.5s" data-delay="0.1s">
        <img className="border-radius-10" src="assets/imgs/ads-1.jpg" alt />
      </a>
    </div>
  </div>
</aside>

    </>
  )
}

export default Aside