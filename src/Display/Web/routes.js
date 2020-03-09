import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RandomManga from "./Pages/RandomManga/RandomManga";
import Test from "./Test";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/SignUp";
import Viewer from "./Pages/Viewer/Viewer";
import ContactForm from "./Pages/ContactForm/ContactForm";
import Favorites from "./Pages/Favorites/Favorites";
import MangaDetail from "./Pages/MangaDetail/MangaDetail";
import MangaList from "./Pages/MangaList/MangaList";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import RecentManga from "./Pages/Recents/Recents";
import HotManga from "./Pages/HotManga.js/HotManga";

const WebRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/random-manga/" component={RandomManga} />
      <Route path="/contact-us/" component={ContactForm} />
      <Route path="/favorites/" component={Favorites} />
      <Route path="/test/:searchParams" component={Test} />
      <Route path="/login/" component={Login} />
      <Route path="/password-reset/" component={PasswordReset} />
      <Route path="/recently-read/" component={RecentManga} />
      <Route path="/signup/" component={SignUp} />
      <Route path="/hot-manga/" component={HotManga} />
      <Route path="/manga/:manga/:chapter/" component={Viewer} />
      <Route exact path="/manga/:manga/" component={MangaDetail} />
      <Route path="/manga/" component={MangaList} />
    </Switch>
  );
};

export default WebRouter;
