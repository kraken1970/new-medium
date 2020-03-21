import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFeed from "pages/GlobalFeed";
import Article from "pages/Article";
import Authentication from "pages/Authentication";
import TagFeed from "pages/TagFeed";
import YourFeed from "pages/YourFeed";
import CreateArticle from "pages/CreateArticle";
import EditArtice from "pages/EditArtice";
import Settings from "pages/Settings";
import UserProfile from "pages/UserProfile";

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />
      <Route path="/settings" component={Settings} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArtice} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
