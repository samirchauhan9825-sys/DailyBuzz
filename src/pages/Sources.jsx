import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Sources() {
  let [source, setSource] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/sources?apikey=pub_bd60b7e5ec9a4abab33aa27dcc4edb3c"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSource(data["results"]);
      });
  }, []);

  console.log(source);

  return (
    <>
      <div className="container">
        <h2 className="mb-4 rounded-pill">
          <h3 class="widget-title mb-0 text-center my-5">
            Top <span>Sources</span>
          </h3>
        </h2>
        <Table className="bg-white " hover size="sm">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Sources Name</th>
              <th>Total Articles</th>
              <th>Website Link</th>
            </tr>
          </thead>
          <tbody>
            {source ? (
              <>
                {source.map((value) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={value.icon}
                          style={{ height: "30px", width: "30px" }}
                          alt=""
                        />
                      </td>
                      <td>{value.name}</td>
                      <td>{value.total_article}</td>
                      <td>
                        <a href={value.url}>Visit us</a>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>Loading details...</>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Sources;
