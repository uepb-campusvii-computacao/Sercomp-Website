import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./Timeline.module.css";

function EventItem({
  title,
  time,
  location,
  participants,
  timeStr,
  eventIndex,
}) {

  const shouldAlignParticipantImageRight = () => {
    return eventIndex % 2 == 0
  }

  const decideParticipantsAlignment = () => {
    return shouldAlignParticipantImageRight() ? styles.blockInfoTimelineRight : styles.blockInfoTimelineLeft
  }

  return (
    <li>
      <h3 className={styles.title}>{title}</h3>
      <p>
        <i className="uil uil-clock">{time}</i>
        <br />
        <i className="uil uil-map-marker">{location}</i>
      </p>
      {participants &&
        participants.map((participant, index) => (
          <div key={index}
            className={`
              ${styles.blockInfoTimeline} 
              ${decideParticipantsAlignment()} 
              ${styles.participantWrapper} 
              ${shouldAlignParticipantImageRight() ? '' : styles.alignLeft}`
            }
          >
            <p>{participant.name}</p>
            <img src={participant.photo} alt={participant.name} 
              style={{ 
                marginRight: shouldAlignParticipantImageRight() ? '12px' : '0', 
                marginLeft: shouldAlignParticipantImageRight() ? '0' : '12px' 
              }} 
            />
          </div>
        ))}
      <span className={styles.circle}></span>
      <span className={styles.date}>{timeStr}</span>
    </li>
  );
}

EventItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  timeStr: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  eventIndex: PropTypes.number.isRequired,
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ),
};

function TabsContent({ events }) {
  useEffect(() => {
    const tabs = document.querySelectorAll(`.${styles.tabsToggle}`);
    const contents = document.querySelectorAll(`.${styles.tabsContent}`);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        contents.forEach((content) => {
          content.classList.remove(styles.isActive);
        });
        tabs.forEach((tab) => {
          tab.classList.remove(styles.isActive);
        });
        contents[index].classList.add(styles.isActive);
        tabs[index].classList.add(styles.isActive);
      });
    });

    // Selecionando o primeiro item por padrão
    tabs[0].classList.add(styles.isActive);
    contents[0].classList.add(styles.isActive);

    return () => {
      tabs.forEach((tab, index) => {
        tab.removeEventListener("click", () => {
          contents.forEach((content) => {
            content.classList.remove(styles.isActive);
          });
          tabs.forEach((tab) => {
            tab.classList.remove(styles.isActive);
          });
          contents[index].classList.add(styles.isActive);
          tabs[index].classList.add(styles.isActive);
        });
      });
    };
  }, []);

  return (
    <div className={styles.tabsContent}>
      <div className={styles.timelineMain}>
        <div className={styles.timelineContainer}>
          <ul>
            {events.map((event, index) => (
              <EventItem key={index} {...event} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

TabsContent.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      timeStr: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      eventIndex: PropTypes.number.isRequired,
      participants: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          photo: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

function Timeline({ timelines }) {
  return (
    <section className={`${styles.timelineMain} event-timelines`}>
      <h1 className={styles.heading}>
        Acompanhe nossa <strong>Programação</strong>
      </h1>
      <div className={`container ${styles.tabs}`}>
        <div className={styles.tabsHead}>
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className={`${styles.tabsToggle} ${index === 0 ? styles.isActive : ""
                }`}
            >
              <span className={styles.tabsName}>{timeline.date}</span>
              <p>{timeline.day}</p>
            </div>
          ))}
        </div>
        {timelines.map((timeline, index) => {
          const eventsWithIndex = timeline.events.map((event, eventIndex) => ({
            ...event,
            eventIndex,
          }));
          return <TabsContent key={index} events={eventsWithIndex} />;
        })}
      </div>
    </section>
  );
}

Timeline.propTypes = {
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.node.isRequired,
      day: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          timeStr: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          participants: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              photo: PropTypes.string.isRequired,
            })
          ),
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Timeline;
