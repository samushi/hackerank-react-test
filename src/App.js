import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState(articles);

  const handledUpvote = () => {
    return articles.sort((a, b) => {
      return a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0;
    });
  };

  const handledRecent = () => {
    return articles.sort((a, b) => {
      return a.date > b.date ? -1 : b.date > a.date ? 1 : 0;
    });
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => setSortedArticles(true)}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => setSortedArticles(false)}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles ? handledUpvote() : handledRecent()} />
    </div>
  );
}

export default App;
