"use client";
//import { Link } from "react-router-dom"
import React, { useState } from "react";
import Image from "next/image";
import ProjectjSlide from "./ProjectjSlide";
import SwiperInfoProjects from "./SwiperInfoProjects";

export default function CardList({ articles }) {
  const [showInfo, setShowInfo] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  function handleShowInfo(article) {
    setCurrentArticle(article);
    setShowInfo(true);
  }

  function handleHideInfo() {
    setCurrentArticle(null);
    setShowInfo(false);
  }

  return (
    <>
      <div className="cardList">
        {articles.map((article) => (
          <div className="cardList-container" key={article.id}>
            <Image src={article.images[0]} alt={article.tittle} />

            <div className="cardList-container-capa">
              <div className="cardList-text">
                <h2>{article.tittle}</h2>
                <p>{article.category}</p>
              </div>

              <div
                className="cardList-button"
                onClick={() => handleShowInfo(article)}
              >
                LEARN MORE
              </div>
            </div>
          </div>
        ))}

        {showInfo && (
          <div className="cardList-info">
            <div
              className="cardList-info-carousel"
              style={{ background: currentArticle.color }}
            >
              <SwiperInfoProjects data={currentArticle.images} />
            </div>
            <div className="cardList-info-container">
              <div  className="cardList-info-title-container">
                <h2>{currentArticle.tittle}</h2>               
                <span>{currentArticle.date}</span>
              </div>
              <span>{currentArticle.developer}</span>
              <span>STACK: {currentArticle.stack}</span>
              <p>{currentArticle.description}</p>
              <div className="cardList-info-container-buttons">
                <a
                  className="cardList-a"
                  href={currentArticle.url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <i className="ri-share-box-line"></i>
                  <p>VIEW SITE</p>
                </a>
                {currentArticle.urlGihub && (
                  <a
                    className="cardList-a"
                    href={currentArticle.urlGihub}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <i className="ri-github-line"></i>
                    <p>VIEW REPOSITORY</p>
                  </a>
                )}

                <button onClick={handleHideInfo}>
                  <i className="ri-close-line"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <ProjectjSlide articles={articles} />
    </>
  );
}
