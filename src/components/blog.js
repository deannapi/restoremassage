import React from "react";
import water_pitcher from "../images/water_pitcher.jpg";
import backcup from "../images/backcup.jpg";
import reasons from "../images/massage_reasons.webp";
import backcup2 from "../images/backcup2.jpg";
import headaches from "../images/headaches.webp";
import vacation from "../images/vacation.jpg";
import magnesium from "../images/magnesium-addons.webp";
import mg_12 from "../images/mg_12.png";

export default class Blog extends React.Component {
  render() {
    return (
      <>
        <div className="blog">
          <h2>My Blog</h2>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card">
                  <img className="card-img" src={water_pitcher} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title">
                      Why you should drink more water after a massage
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal1"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <img className="card-img" src={backcup} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title">
                      How to get the most out of your massage sessions
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal2"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <img className="card-img" src={backcup2} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Why you should get a massage</h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal3"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <img className="card-img" src={headaches} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title">
                      Headaches are not an aspirin deficiency. Try massage
                      therapy!
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal4"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <img className="card-img" src={vacation} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title" style={{color:"#173519"}}>
                      Need vacation relaxation? Magnesium can help!
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal5"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <img className="card-img" src={magnesium} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title">
                      Add magnesium to your next session
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal6"
                    >
                      Continue Reading
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card">
                  <img className="card-img" src={mg_12} alt="" />
                  <div className="card-img-overlay">
                    <h5 className="card-title" style={{color:"#173519"}}>
                      Magnesium: The Missing Link For Vibrant Health
                    </h5>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#blogModal7"
                    >
                      <a
                        href="https://dopeminerals.com/wp-content/uploads/2019/04/Mag-Book.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{color:"white"}}
                      >
                        Continue Reading
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CAROUSEL BUTTONS */}
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* END OF CAROUSEL */}

          {/* Modal 1*/}
          <div
            className="modal fade"
            id="blogModal1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Do you know WHY your massage therapist tells you to drink
                    water after your massage?
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    More than HALF of our bodies are made up of water.
                    <br></br>
                    <br></br>Isn't that crazy? When you get a massage,
                    regardless of what type (deep tissue, sports, relaxation),
                    the fluids in your body drain and circulate even more.
                    Massage breaks up scar tissue and creates movement of
                    lymphatic fluid. In order to get those toxins and just plain
                    yucky stuff out of our body it needs to be flushed out. Some
                    may think they drink enough water daily, but we always
                    recommend you increase your daily intake by just a few
                    bottles of water to ensure drainage of all those excess
                    fluids. <br></br>
                    <br></br>So drink up, folks!
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL 2 */}
          <div
            className="modal fade"
            id="blogModal2"
            tabIndex="-2"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Here's a few ways to ensure you get the most out of your
                    massage...
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    <b>Before Your Session</b>
                    <br></br>
                    HYDRATE!
                    <br></br>
                    <br></br>
                    Hydration is one of the most important and simplest ways you
                    can make sure you feel recovered and improved from your
                    session.
                    <br></br> Try to drink at least a few glasses within the
                    hours leading up to your appointment. This will keep you
                    from feeling any dizziness, nausea, or headaches once you
                    get up from the massage table after your session. Although,
                    these symptoms are not a common thing with my clients, it
                    will still only benefit you more so than not. <br></br>And
                    as always, hydrate AFTER your massage. If your massage is
                    mostly deep tissue work you definitely need to flush out any
                    of the ubiquitous "toxins". After bodywork, your system is
                    ready to eliminate toxins that have been worked out of your
                    muscles via skin, kidneys, and digestive processes. The more
                    water in your system, the quicker your body will eliminate
                    waste.
                    <br></br>
                    <br></br>
                    <b>During Your Session</b>
                    <br></br>FILL OUT YOUR INTAKE FORMS!
                    <br></br>
                    <br></br>
                    Too often I see clients rush to their appointment and then
                    rush filling out their intake forms to hurry and get to the
                    massage part of the session - most of the time leaving
                    questions blank. Here at Restore Massage I always space
                    enough time in between clients (especially first time
                    clients) to allow for proper assessment and to keep you from
                    feeling rushed. Although, I do ask questions there may be
                    things I don't ask specifically about your health history if
                    they're not already noted on the information you provided
                    that could play an important role into your current health
                    status. Try to think back to any surgeries, illnesses,
                    accidents or even minor issues you've had in the past. Even
                    if its something you think won't pertain to current issues
                    mention it anyway. Many times I see clients leave out
                    information that could have made a difference to my approach
                    and treatment to your pain. Don't forget, your therapist is
                    there for YOU!
                    <br></br>
                    <br></br>
                    DON'T BE TOO SHY TO ASK QUESTIONS!
                    <br></br>
                    As a therapist who practices various modalities and
                    techniques I often get clients who have never had a massage
                    at all or maybe just haven't had things like cupping
                    therapy, stretching etc. <br></br>Don't be afraid to ask the
                    W's (who, what, when, why). Your therapist has a reason as
                    to why they believe a certain treatment is the best approach
                    to your pain and therefore should be able to explain all of
                    that to give you a better understanding of what to expect.
                    <br></br>
                    Asking questions only lets us know that you care about your
                    progress just as much as we do. And it also gives us a
                    chance to drop some knowledge bombs when we can!
                    <br></br>
                    <br></br>
                    <b>After Your Session</b>
                    <br></br>
                    SELF CARE ROUTINE
                    <br></br>
                    Ask your therapist about any maintenance you can do at home
                    to prolong the effects of your massage. I personally like to
                    suggest stretches, self massage ( like using a tennis ball),
                    foam rolling etc. to my clients. I will show them and also
                    have them do the movement to ensure they understand how its
                    done. Although, I would love to see my clients back every
                    day, I know that is not a realistic expectation. So in that
                    case I show them an at home routine they can do in between
                    visits to keep pain and symptoms to a minimum.
                    <br></br>
                    AND AS ALWAYS, MAKE TIME FOR YOURSELF
                    <br></br>
                    <br></br>I know we all get lost in our busy lives but its
                    always important to allow yourself time to recover. I try to
                    encourage my clients to book their next session before they
                    leave their current visit to help them stay on a routine
                    basis for their sessions. For some that means once a month
                    and for others it could be every week until we can get their
                    pain to a minimum. If your days are too hectic to schedule
                    that far in advance, make sure you sign up for an email list
                    to receive notifications of availability.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 3*/}
          <div
            className="modal fade"
            id="blogModal3"
            tabIndex="-3"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Everyone deserves regular massages and here's why!
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img className="card-img" src={reasons} alt="" />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 4*/}
          <div
            className="modal fade"
            id="blogModal4"
            tabIndex="-4"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    A massage can do more than just relaxation!
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Headaches can be caused from many different things such as
                    neck tension, jaw issues (TMJ, teeth grinding/clenching),
                    sinus issues, forward shoulder posture, stress etc.{" "}
                    <br></br> Here at Restore we use a variety of modalities to
                    treat headaches to ensure relief.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 5*/}
          <div
            className="modal fade"
            id="blogModal5"
            tabIndex="-5"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Need a vacation? But can't find the time? Try increasing
                    your magnesium!
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Dope Minerals created an incredibly concentrated magnesium
                    body cream (now available with CBD!). Our specially
                    formulated, organic products are made with the highest
                    quality, pure magnesium chloride oil. <br></br>Fresh ocean
                    breezes, the soothing sound of the ocean and soaking in
                    magnesium-rich water: that’s how you create pure, blissful
                    relaxation. Studies show that people who live near the beach
                    report being healthier, less stressed and more relaxed.
                    That’s because the ocean is full of magnesium chloride, an
                    easy to absorb, fast acting type of magnesium. <br></br>Like
                    over 65% of Americans, you might be deficient in magnesium,
                    an incredibly important mineral. While we can’t always
                    escape to the ocean, magnesium can help you relieve tension
                    and melt away stress.
                    <br></br>
                    <br></br>
                    Despite the fact that magnesium deficiency is becoming a
                    terrible heath issue, it is actually a pretty simple problem
                    to fix. One of the easiest ways to get more magnesium into
                    the body is through the skin. We are able to absorb it
                    faster when we bypass the digestive system. <br></br>Need a
                    vacation but can’t find the time? Try upping your magnesium
                    levels in order to feel more relaxed and renewed. Magnesium
                    can help relieve tension and reduce stress: similar to
                    spending a few days at the beach. <br></br>An easy way to
                    boost your magnesium is to eat a diet rich in this
                    relaxation-boosting mineral. Foods such as green leafy
                    vegetables, pumpkin seeds and avocados are all loaded with
                    magnesium.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 6*/}
          <div
            className="modal fade"
            id="blogModal6"
            tabIndex="-6"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Add magnesium to your session!
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Dope Minerals magnesium cream is a great addition to any
                    session! <br></br> Many of you have already heard me rant
                    about the benefits of magnesium and Dope Minerals products
                    and now you have the opportunity to the complimentary treat.
                    I always have a sample of cream to compliment any session.
                    In addition to your treatment, magnesium cream can aid with
                    the decrease of inflammation, pain, muscle cramping, anxiety
                    and many other issues. Just ask your therapist during your
                    next session for the add-on to experience the benefits of
                    magnesium.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
