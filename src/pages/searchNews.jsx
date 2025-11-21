import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Searchnews() {
  let [news, setNews] = useState(null);

  let query = useLocation().search.split("=")[1];
  console.log(query);

  async function Fetchnews() {
    try {
     let news = await(await fetch(`https://newsdata.io/api/1/latest?apikey=pub_0de9cdf285ff49e18a8defccf648bb54&q=${query}&country=in,pk&language=hi,en&timezone=Asia/Kolkata`)).json()

      setNews(news["results"]);
    } catch (e) {
      console.log("error", e);
    }
  }
  useEffect(() => {
    Fetchnews();
  });
  console.log(news);
  return (
    <div>
      <main className="position-relative">
        <div className="container">
          <div className="row">
            {/* sidebar-left */}
            <div className="sidebar-widget widget_categories border-radius-10 bg-white mb-30">
              <div className="widget-header position-relative mb-15">
                <h5 className="widget-title">
                  <strong>Categories</strong>
                </h5>
              </div>
              <ul className="font-small text-muted">
                <li className="cat-item cat-item-3">
                  <Link to={"/Newsbycategorie/business"}>Business</Link>
                </li>
                <li className="cat-item cat-item-4">
                  <Link to={"/Newsbycategorie/crime"}>Crime</Link>
                </li>
                <li className="cat-item cat-item-5">
                  <Link to={"/Newsbycategorie/domestic"}>Domestic</Link>
                </li>
                <li className="cat-item cat-item-6">
                  <Link to={"/Newsbycategorie/education"}>Education</Link>
                </li>
                <li className="cat-item cat-item-7">
                  <Link to={"/Newsbycategorie/entertainment"}>
                    Entertainment
                  </Link>
                </li>
                <li className="cat-item cat-item-2">
                  <Link to={"/Newsbycategorie/environment"}>Environment</Link>
                </li>
                <li className="cat-item cat-item-2">
                  <Link to={"/Newsbycategorie/food"}>Food</Link>
                </li>
                <li className="cat-item cat-item-2">
                  <Link to={"/Newsbycategorie/health"}>Health</Link>
                </li>
                <li className="cat-item cat-item-2">
                  <Link to={"/Newsbycategorie/lifestyle"}>Lifestyle</Link>
                </li>
                <li className="cat-item cat-item-3">
                  <Link to={"/Newsbycategorie/other"}>Other</Link>
                </li>
                <li className="cat-item cat-item-4">
                  <Link to={"/Newsbycategorie/politics"}>Politics</Link>
                </li>
                <li className="cat-item cat-item-5">
                  <Link to={"/Newsbycategorie/science"}>Science</Link>
                </li>
                <li className="cat-item cat-item-6">
                  <Link to={"/Newsbycategorie/sports"}>Sports</Link>
                </li>
                <li className="cat-item cat-item-7">
                  <Link to={"/Newsbycategorie/technology"}>Technology</Link>
                </li>
                <li className="cat-item cat-item-2">
                  <Link to={"/Newsbycategorie/top"}>Top</Link>
                </li>
              </ul>
            </div>
            {/* main content */}
            <div className="col-lg-10 col-md-9 order-1 order-md-2">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-7">
                      <h4 className="widget-title mb-0">
                        Latest <span>Posts</span>
                      </h4>
                    </div>
                    <div className="col-5 text-right"></div>
                  </div>
                  <div className="loop-list-style-1">
                    {news ? (
                      <>
                        {news.map((value, index) => {
                          return (
                            <>
                              <a href={value.link}>
                                <article className="p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                  <div className="d-flex">
                                    <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                      <a
                                        className="color-white"
                                        href="single.html"
                                      >
                                        <img
                                          className="border-radius-15"
                                          src={value.image_url}
                                          style={{ width: "250px" }}
                                          alt
                                        />
                                      </a>
                                    </div>
                                    <div className="post-content media-body">
                                      <div className="entry-meta mb-15 mt-10">
                                        <a
                                          className="entry-meta meta-2"
                                          href="category.html"
                                        >
                                          <span className="post-in text-danger font-x-small">
                                            {value.category}
                                          </span>
                                        </a>
                                      </div>
                                      <h5 className="post-title mb-15 text-limit-2-row">
                                        <a href="single.html">{value.title}</a>
                                      </h5>
                                      <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                        <span className="post-by">
                                          By{" "}
                                          <a href={value.source_url}>
                                            <img
                                              src={value.source_icon}
                                              style={{
                                                width: "30px",
                                                height: "10px",
                                                marginLeft: "8px",
                                                marginRight: "10px",
                                              }}
                                            />
                                            {value.source_name}
                                          </a>
                                        </span>
                                        <span className="post-on">
                                          {value.pubDate}
                                        </span>
                                        <span className="time-reading"></span>
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </a>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <h1>Loading</h1>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Searchnews;
