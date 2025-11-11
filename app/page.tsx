"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Link from "next/link";

// Images
import img01 from "@/assets/images/home/home_01.jpg";
import img02 from "@/assets/images/home/home_02.jpg";
import img02B from "@/assets/images/home/home_02B.jpg";
import img03 from "@/assets/images/home/home_03.jpg";
import img04 from "@/assets/images/home/home_04.jpg";
import img05 from "@/assets/images/home/home_05.jpg";
import img06 from "@/assets/images/home/home_06.jpg";
import img07 from "@/assets/images/home/home_07.jpg";
import img08 from "@/assets/images/home/home_08.jpg";
import closeIcon from "@/assets/images/close.png";

import { useMenu } from "@/context/MenuContext";

function Home() {
  const [stories, setStories] = useState<any[]>([]);
  const [handiz, setHandiz] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [openPortfolio, setOpenPortfolio] = useState<any>(null);
  const [visibleCount, setVisibleCount] = useState(16);
  const pageSize = 16;
  const [loadingStories, setLoadingStories] = useState(true);
  const [loadingHandiz, setLoadingHandiz] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const { openMenu } = useMenu();

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stories`, {
          cache: "no-store",
        });
        const data = await res.json();
        setStories(data.stories ? [data.stories[0]] : []);
      } finally {
        setLoadingStories(false);
      }
    }
    fetchStories();
  }, []);

  useEffect(() => {
    async function fetchHandiz() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/handiz`, {
          cache: "no-store",
        });
        const data = await res.json();
        setHandiz(data.handiz ? [data.handiz[0]] : []);
      } finally {
        setLoadingHandiz(false);
      }
    }
    fetchHandiz();
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      const projects_res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`,
        { cache: "no-store" }
      );
      const projects_data = await projects_res.json();
      setProjects(
        (projects_data.projects || []).sort((a, b) => a.order - b.order)
      );
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
          cache: "no-store",
        });
        const data = await res.json();
        setContacts(data.contacts ? [data.contacts[0]] : []);
      } finally {
        setLoadingContacts(false);
      }
    }
    fetchContacts();
  }, []);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
          cache: "no-store",
        });
        const data = await res.json();
        setCourses(data.courses ? [data.courses[0]] : []);
      } finally {
        setLoadingCourses(false);
      }
    }
    fetchCourses();
  }, []);

  const handleOpenPopup = (item: any) => {
    setOpenPortfolio(item);
  };

  const handleClosePopup = () => {
    setOpenPortfolio(null);
  };

  function isVideo(url: string) {
    return /\.(mp4|webm|ogg)$/i.test(url);
  }

  return (
    <>
      <main className="page-background">
        <div id="content" className="site-content">
          <div className="content-holder center-relative content-1170">
            <div id="portfolio-wrapper">
              <div className="our-grid">
                {/* STORIES */}
                {loadingStories ? (
                  <div className="our-grid-item d-1x1 animate">
                    <div className="item-link skeleton-box" />
                  </div>
                ) : stories.length > 0 ? (
                  stories.map((story) => (
                    <motion.div
                      key={story._id}
                      className="our-grid-item d-1x1 animate"
                      initial={{ opacity: 0, transform: `translateY(50px)` }}
                      whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                      viewport={{ once: true }}
                    >
                      <Link className="item-link" href="/story">
                        {isVideo(story.thumbnailUrl) ? (
                          <video
                            src={story.thumbnailUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={story.thumbnailUrl || img02.src}
                            alt={story.title}
                            style={{ objectFit: "cover" }}
                          />
                        )}

                        <div className="portfolio-text-holder">
                          <p className="portfolio-title">{story.title}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div className="our-grid-item d-1x1 animate">
                    <Link className="item-link" href="/story">
                      <img src={img01.src} alt="" />
                      <div className="portfolio-text-holder">
                        <p className="portfolio-title">STORY</p>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* HANDIZ */}
                {loadingHandiz ? (
                  <div className="our-grid-item d-1x1 animate">
                    <div className="item-link skeleton-box" />
                  </div>
                ) : handiz.length > 0 ? (
                  handiz.map((h) => (
                    <motion.div
                      key={h._id}
                      className="our-grid-item d-1x1 animate"
                      initial={{ opacity: 0, transform: `translateY(50px)` }}
                      whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                      viewport={{ once: true }}
                    >
                      <Link className="item-link" href="https://handiz.org/">
                        {isVideo(h.thumbnailUrl) ? (
                          <video
                            src={h.thumbnailUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={h.thumbnailUrl || img02.src}
                            alt={h.title}
                            style={{ objectFit: "cover" }}
                          />
                        )}
                        <div className="portfolio-text-holder">
                          <p className="portfolio-title">{h.title}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div className="our-grid-item d-1x1 animate">
                    <Link className="item-link" href="https://handiz.org/">
                      <img src={img01.src} alt="" />
                      <div className="portfolio-text-holder">
                        <p className="portfolio-title">HANDIZ</p>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {loadingContacts ? (
                  <div className="our-grid-item d-2x1 animate">
                    <div className="item-link skeleton-box" />
                  </div>
                ) : contacts.length > 0 ? (
                  contacts.map((contact) => (
                    <motion.div
                      key={contact._id}
                      className="our-grid-item d-2x1 animate"
                      initial={{ opacity: 0, transform: `translateY(50px)` }}
                      whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                      viewport={{ once: true }}
                    >
                      <a className="item-link" onClick={openMenu}>
                        {isVideo(contact.thumbnailUrl) ? (
                          <video
                            src={contact.thumbnailUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={contact.thumbnailUrl || img02.src}
                            alt={""}
                            style={{ objectFit: "cover" }}
                          />
                        )}

                        <div className="portfolio-text-holder">
                          <p className="portfolio-title">CONTACT US</p>
                        </div>
                      </a>
                    </motion.div>
                  ))
                ) : (
                  <motion.div className="our-grid-item d-2x1 animate">
                    <a className="item-link" onClick={openMenu}>
                      <img src={img02.src} alt={""} />
                      <div className="portfolio-text-holder">
                        <p className="portfolio-title">CONTACT US</p>
                      </div>
                    </a>
                  </motion.div>
                )}

                {loadingCourses ? (
                  <div className="our-grid-item d-2x1 animate">
                    <div className="item-link skeleton-box" />
                  </div>
                ) : courses.length > 0 ? (
                  courses.map((course) => (
                    <motion.div
                      key={course._id}
                      className="our-grid-item d-2x1 animate"
                      initial={{ opacity: 0, transform: `translateY(50px)` }}
                      whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                      viewport={{ once: true }}
                    >
                      <Link
                        className="item-link"
                        href="https://handiz.org/d5render/"
                      >
                        {isVideo(course.thumbnailUrl) ? (
                          <video
                            src={course.thumbnailUrl}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={course.thumbnailUrl || img04.src}
                            alt=""
                            style={{ objectFit: "cover" }}
                          />
                        )}

                        <div className="portfolio-text-holder">
                          <p className="portfolio-title">HANDIZ COURSE</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div className="our-grid-item d-2x1 animate">
                    <Link
                      className="item-link"
                      href="https://handiz.org/d5render/"
                    >
                      <img src={img04.src} alt="" />
                      <div className="portfolio-text-holder">
                        <p className="portfolio-title">HANDIZ COURSE</p>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* PROJECTS replacing: ART, OFFICE, MODEL, MOCKUP */}
                {/* PROJECTS with pagination */}
                {projects.length > 0 &&
                  projects.slice(0, visibleCount).map((proj) => (
                    <motion.div
                      key={proj._id}
                      className="our-grid-item d-1x1 animate"
                      initial={{ opacity: 0, transform: `translateY(50px)` }}
                      whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                      viewport={{ once: true }}
                    >
                      <a
                        className="item-link"
                        onClick={() => handleOpenPopup(proj)}
                      >
                        <img
                          src={proj.imageUrl}
                          alt="project image"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="portfolio-text-holder">
                          <p className="portfolio-title">PROJECT</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}

                {/* LOAD MORE BUTTON */}
                {visibleCount < projects.length && (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "30px",
                    }}
                  >
                    <button
                      style={{
                        padding: "10px 24px",
                        backgroundColor: "#111827",
                        color: "#ffffff",
                        borderRadius: "9999px",
                        fontSize: "14px",
                        letterSpacing: "0.4px",
                        border: "2px solid white", // ✅ Add this
                        cursor: "pointer",
                        boxShadow: "0 6px 18px rgba(16,24,40,0.18)",
                        transition:
                          "transform .15s ease, box-shadow .15s ease, background-color .15s ease",
                      }}
                      onMouseEnter={(e) => {
                        const t = e.currentTarget as HTMLButtonElement;
                        t.style.transform = "translateY(-3px)";
                        t.style.boxShadow = "0 10px 30px rgba(16,24,40,0.25)";
                      }}
                      onMouseLeave={(e) => {
                        const t = e.currentTarget as HTMLButtonElement;
                        t.style.transform = "translateY(0)";
                        t.style.boxShadow = "0 6px 18px rgba(16,24,40,0.18)";
                      }}
                      onClick={() => setVisibleCount((c) => c + pageSize)}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* POPUP FOR PROJECT IMAGES */}
      <Popup
        open={!!openPortfolio}
        closeOnDocumentClick
        onClose={handleClosePopup}
        modal
      >
        <div className="my-popup">
          <div
            className="close-popup-btn"
            role="button"
            onClick={handleClosePopup}
          >
            <img src={closeIcon.src} alt="close icon" />
          </div>

          {openPortfolio && (
            <div className="popup-image-box">
              <img
                src={openPortfolio.imageUrl}
                alt="project image"
                style={{ width: "100%" }}
              />
            </div>
          )}
        </div>
      </Popup>
    </>
  );
}

export default Home;
