import React, { useEffect, Fragment } from "react";
import useFetch from "hooks/useFetch";
import Feed from "components/Feed/Feed";
import Pagination from "components/Pagination";
import { getPaginator, limit } from "utils";
import { stringify } from "query-string";
import PopularTags from "components/PopularTags";
import Loading from "components/Loading";
import ErrorMessage from "components/ErrorMessage";
import FeedTogler from "components/FeedTogler";

const GlobalFeed = ({ location, match }) => {
  const { offset, currentPage } = getPaginator(location.search);

  const stringifiedParams = stringify({ limit, offset });

  const apiUrl = `/articles?${stringifiedParams}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  const url = match.url;

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>Medium clone</h1>
          <p>a place to share knowledge</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedTogler />
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
              <Fragment>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={limit}
                  url={url}
                  currentPage={currentPage}
                />
              </Fragment>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
