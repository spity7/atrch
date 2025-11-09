// Images
import aboutImg from "@/assets/images/about.jpg";

// ------------

async function Story() {
  const stories_res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/stories`,
    {
      cache: "no-store",
    }
  );
  const { stories } = await stories_res.json();
  const story = stories?.[0]; // first story in DB

  if (!story) {
    return <p>No story found.</p>;
  }

  return (
    <main className="page-background">
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1170">
          <h1 className="entry-title page-title center-text">
            {story.title}
            {/* <br /> */}
            {/* and I’m designer &amp; photographer */}
            <br />
          </h1>

          <img
            className="page-featured-image"
            src={story.galleryUrl}
            alt={story.title}
          />

          <div className="one_half">
            <ul className="timeline-holder">
              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">{story.pOne}</div>
                {/* <div className="timeline-event-date">2015</div> */}
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">{story.pTwo}</div>
                {/* <div className="timeline-event-date">2017</div> */}
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">{story.pThree}</div>
                {/* <div className="timeline-event-date">2018</div> */}
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">{story.pFour}</div>
                {/* <div className="timeline-event-date">2020</div> */}
              </li>

              <li className="timeline-event">
                <span className="timeline-circle"></span>
                <div className="timeline-event-content">{story.pFive}</div>
                {/* <div className="timeline-event-date">2025</div> */}
              </li>
            </ul>
          </div>

          <div className="one_half last">
            <div dangerouslySetInnerHTML={{ __html: story.description }}></div>
          </div>

          <div className="clear"></div>

          <div className="social-holder center-text top-60">
            {/* <a className="social-text" href="https://www.twitter.com/">
              TWITTER
            </a> */}
            <a
              className="social-text"
              href="https://www.instagram.com/ahmadalatrch/"
            >
              INSTAGRAM
            </a>
            <a
              className="social-text"
              href="https://www.linkedin.com/in/ahmad-alatrash-52b271104/"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Story;
