/* eslint-disable no-unused-vars */
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Button } from "../../../shared";
import "./EventsCard.scss";

const EventsCard = ({ event }) => {
  return (
    <div className="eventcard_container">
      <div className="eventcard_parent">
        <img
          src={event.coverImage}
          alt=""
        />

        <div className="eventcard_body">
          <p>{event.name}</p>

          <div className="eventcard_datetime">
            <span>
              <CiLocationOn
                style={{
                  opacity: "1",
                }}
              />{" "}
              {/* Kolkata Police Head Quarter Lalbazar */}
              {event.address}
            </span>
            <span>
              <CiCalendar /> {event.startDate}
            </span>
            <span>
              <CiClock2 /> {event.startTime}
            </span>
          </div>

          <div className="eventcard_datetime_mobile">
            <div>
              <span>
                <CiLocationOn
                  style={{
                    opacity: "1",
                  }}
                />{" "}
                Kolkata Police Head Quarter Lalbazar
              </span>
            </div>

            <div>
              <CiCalendar />
              <span>Tues, 12th Feb at 07:45 PM</span>
            </div>
          </div>

          <div className="eventcard_ctadiv">
            <Button>Attend</Button>
            <div className="eventcard_sharebutton">
              <IoShareSocialOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="eventcard_ctadiv_mobile">
        <Button>Attend</Button>
        <div className="eventcard_sharebutton">
          <IoShareSocialOutline />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
