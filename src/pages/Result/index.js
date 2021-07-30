import React from "react";
//  import api from "../../services/api";

import NaviBar from "../../components/NaviBar";

import "./styles.css";

function Gender() {
  //   useEffect(() => {
  //   api.get("api/Sign/index").then((response) => {
  //   });
  // }, []);

  return (
    <div className="Result-container">
      <NaviBar />
      <h2>Results</h2>
      <div className="result-name">
        <p>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis
          at tellus. Pellentesque in ipsum id orci porta dapibus. Cras ultricies
          ligula sed magna dictum porta. Vivamus suscipit tortor eget felis
          porttitor volutpat.
        </p>
      </div>
      <div className="result-generation">
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </p>
      </div>
      <div className="result-sign">
        <p>
          Sed porttitor lectus nibh. Proin eget tortor risus. Curabitur non
          nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Quisque
          velit nisi, pretium ut lacinia in, elementum id enim.
        </p>
      </div>
    </div>
  );
}

export default Gender;
