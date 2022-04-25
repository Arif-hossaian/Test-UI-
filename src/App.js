import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutCourses from './components/About-Our-Courses/AboutCourses';
import Banner from './components/Banner';
import ExploreCourses from './components/Explore-courses/ExploreCourses';
import Footer from './components/Footer/Footer';
import JoinWIthUs from './components/Join-with-Us/JoinWIthUs';
import KeySupporters from './components/Key-supporters/KeySupporters';
import BlogsAndNewsSection from './components/LatestBlogs-News/BlogsAndNewsSection';
import { Navbar } from './components/Navbar/Navbar';
import TopCategories from './components/Top-categories/TopCategories';
import TotalCourses from './components/Total-courses/TotalCourses';
import OfferByUs from './components/What-we-offer/OfferByUs';
import ChoosingUs from './components/Why-choose-us/ChoosingUs';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Banner />
        <OfferByUs />
        <AboutCourses />
        <TopCategories />
        <ExploreCourses />
        <ChoosingUs />
        <TotalCourses />
        <JoinWIthUs />
        <BlogsAndNewsSection />
        <KeySupporters />
        <Footer />
        <Routes>{/* <Route path="*" element={<ErrorPage />} /> */}</Routes>
      </Router>
    </div>
  );
};

export default App;
