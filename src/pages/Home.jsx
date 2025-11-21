import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let [news, setNews] = useState(null);
  let [source, setSource] = useState(null);
  let[query,setQuery] = useState("");
  console.log(query);

  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/searchNews?q=${query}`);
  }

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_2cafb4a6443e43d5aab6c02ea5fdbca9&country=in&language=en,hi,gu&category=business&timezone=Asia/Kolkata"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setNews(data["results"]);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/sources?apikey=pub_2cafb4a6443e43d5aab6c02ea5fdbca9"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setSource(data["results"]);
      });
  }, []);

  return (
    <div>
      <div>
        {/* Main Wrap Start */}
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
                      <div className="col-5 text-right">
                         <form onSubmit={handleSubmit} className="search-form d-lg-inline float-right position-relative mr-30 d-none" >
                  <input
                    onChange={(e)=>{
                      setQuery(e.target.value)
                    }}
                    type="search"
                    className="search_field p-1"
                    placeholder="Search"
                  />
                  
                </form>
                      </div>
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
                                          <a href="single.html">
                                            {value.title}
                                          </a>
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
                  <div className="col-lg-4 col-md-12 sidebar-right">
                    {/*Post aside style 2*/}
                    <div className="sidebar-widget">
                      <div className="widget-header mb-30">
                        <h5 className="widget-title">
                          Top <span>Trending</span>
                        </h5>
                      </div>
                      {news ? (
                        <>
                          {news.map((value) => {
                            return (
                              <div className="post-aside-style-2">
                                <ul className="list-post">
                                  <li className="mb-30 wow fadeIn animated">
                                    <div className="d-flex">
                                      <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                        <a
                                          className="color-white"
                                          href="single.html"
                                        >
                                          <img src={value.image_url} alt />
                                        </a>
                                      </div>
                                      <div className="post-content media-body">
                                        <h6 className="post-title mb-10 text-limit-2-row">
                                          <a href="single.html">
                                            {value.title}
                                          </a>
                                        </h6>
                                        <div className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                          <span className="post-by">
                                            By{" "}
                                            <a href="author.html">
                                              {value.source_name}
                                            </a>
                                          </span>
                                          <span className="post-on">
                                            4m ago
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <h1>Loading....</h1>
                        </>
                      )}
                    </div>
                    <div className="sidebar-widget mb-30 mt-4">
                      <div className="widget-top-auhor border-radius-10 p-20 bg-white">
                        <div className="widget-header widget-header-style-1 position-relative mb-15">
                          <div class="widget-header position-relative mb-30">
                            <div class="row">
                              <div class="col-7">
                                <h4 class="widget-title mb-0">
                                  Top <span>Sources</span>
                                </h4>
                              </div>
                              <div class="col-5 text-right">
                                <h6 class="font-medium pr-15">
                                  <a
                                    class="text-muted font-small"
                                    href="/sources"
                                  >
                                    View all
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        {source ? (
                          <>
                            {source.map((value) => {
                              return (
                                <a
                                  className="red-tooltip active"
                                  href={value.url}
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title
                                  data-original-title="Emma - 1034 posts"
                                >
                                  <img src={value.icon} alt />
                                </a>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <h1>Loading ..</h1>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
