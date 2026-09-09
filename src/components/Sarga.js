import React from "react";

const sargaFaqs = [
  {
    question: "What does Sarga Bodywork feel like?",
    answer:
      "Sarga feels deep, fluid, and grounding. Instead of sharp pressure, you’ll feel long, slow, anchored strokes that your body can actually soften into. Many clients describe it as “melting,” “lengthening,” or “deep without discomfort.”",
  },
  {
    question: "Why do you use your feet?",
    answer:
      "Barefoot work allows for broader, more stable contact that feels deep without being painful. The feet create sustained pressure that helps fascia unwind, hydrate, and reorganize. It’s depth your body can trust — not force it has to brace against.",
  },
  {
    question: "Is Sarga painful?",
    answer:
      "No. Sarga is designed to be deep without pain. Because the pressure is broad and grounded, your nervous system stays calm, allowing the tissue to release instead of tightening or guarding.",
  },
  {
    question: "How is Sarga different from deep tissue massage?",
    answer:
      "Traditional deep tissue often relies on force, pushing, or pointed pressure. Sarga uses slow, anchored, barefoot strokes that work with the fascia rather than against it. The result is deep therapeutic change without the “push through it” discomfort.",
  },
  {
    question: "Do you only use Sarga in your sessions?",
    answer:
      "Sarga is the foundation of my work, but sessions may also include myofascial release, sports massage, cupping, IASTM, or assisted stretch therapy. Whether you choose bodywork, stretch-only, or a hybrid session, Sarga’s principles guide the entire experience.",
  },
  {
    question: "What should I wear for a Sarga session?",
    answer:
      "For bodywork sessions, you’ll undress to your comfort level and be draped appropriately. For stretch-only or hybrid sessions, comfortable athletic clothing is best so you can move freely.",
  },
  {
    question: "Is Sarga safe for everyone?",
    answer:
      "Most clients tolerate Sarga extremely well because the pressure is slow, broad, and controlled. If you have specific medical conditions, injuries, or concerns, we’ll discuss them before your session and adjust accordingly.",
  },
  {
    question: "Can Sarga help with chronic tension or mobility issues?",
    answer:
      "Yes. Sarga’s slow, sustained pressure helps hydrate fascia, improve slide-and-glide, and unwind long-held patterns. Clients often notice improved mobility, reduced tension, and a greater sense of connection in their body.",
  },
  {
    question: "Is Sarga good for athletes?",
    answer:
      "Absolutely. The work supports recovery, mobility, and performance by addressing fascial restrictions and improving movement quality. Many athletes prefer Sarga because it’s deep, effective, and doesn’t leave them feeling beat up.",
  },
  {
    question: "How will I feel afterward?",
    answer:
      "Most clients feel grounded, lengthened, and more connected to their body. Some feel deeply relaxed; others feel energized and spacious. The changes tend to unfold over the next 24–48 hours as the fascia continues to reorganize.",
  },
];

export default class Sarga extends React.Component {
  render() {
    return (
      <>
        <div className="Sarga">
          <section className="sarga-hero">
            <svg
              className="sarga-botanical sarga-botanical-left"
              viewBox="0 0 260 130"
              aria-hidden="true"
            >
              <path d="M0 115C65 94 120 56 205 20" />
              <path d="M48 96C29 76 29 53 39 31C57 49 61 70 48 96Z" />
              <path d="M86 76C72 52 76 30 91 11C104 34 102 56 86 76Z" />
              <path d="M122 58C112 37 120 18 139 4C145 27 139 45 122 58Z" />
              <path d="M72 84C81 61 100 50 124 50C114 72 96 84 72 84Z" />
              <path d="M114 63C130 43 151 38 174 44C159 62 139 70 114 63Z" />
              <path d="M157 42C173 25 193 22 215 30C198 47 179 51 157 42Z" />
            </svg>

            <div className="sarga-hero-content">
              <h1>Sarga Bodywork</h1>

              <div className="sarga-title-accent" aria-hidden="true" />

              <p>
                A grounded, barefoot approach to deep, therapeutic,
                fascia-focused bodywork.
              </p>
            </div>

            <svg
              className="sarga-botanical sarga-botanical-right"
              viewBox="0 0 260 130"
              aria-hidden="true"
            >
              <path d="M0 115C65 94 120 56 205 20" />
              <path d="M48 96C29 76 29 53 39 31C57 49 61 70 48 96Z" />
              <path d="M86 76C72 52 76 30 91 11C104 34 102 56 86 76Z" />
              <path d="M122 58C112 37 120 18 139 4C145 27 139 45 122 58Z" />
              <path d="M72 84C81 61 100 50 124 50C114 72 96 84 72 84Z" />
              <path d="M114 63C130 43 151 38 174 44C159 62 139 70 114 63Z" />
              <path d="M157 42C173 25 193 22 215 30C198 47 179 51 157 42Z" />
            </svg>
          </section>

          <div className="row">
            <div className="card card-session mb-3">
              <div className="card-header">Why Barefoot Works?</div>
              <div className="card-body">
                <p className="card-text">
                  Barefoot pressure isn’t just a stylistic choice — it’s
                  biomechanically intelligent.
                  <br></br>
                  <br></br>
                  Using the feet allows for:
                  <ul>
                    <li>
                      <b>Broader contact</b> that feels deep without being sharp
                    </li>
                    <li>
                      <b>Grounded stability</b> that helps your body relax
                      instead of brace
                    </li>
                    <li>
                      <b>Sustained pressure</b> that encourages fascia to unwind
                    </li>
                    <li>
                      <b>Fluid movement</b> that follows the body’s natural
                      lines of tension
                    </li>
                  </ul>
                  <br></br>
                  The specially designed Sarga strap provides anchored leverage,
                  allowing each stroke to be slow, controlled, and deeply
                  connected.
                  <br></br>
                  <br></br>
                  This means you receive deep therapeutic work without the pain
                  or force often associated with traditional deep tissue
                  massage.
                </p>
              </div>
            </div>

            <div className="card card-session mb-3">
              <div className="card-header">How Sarga Supports Your Fascia</div>
              <div className="card-body">
                <p className="card-text">
                  Your fascia is a continuous, intelligent network of connective
                  tissue that influences how you move, feel, and function.
                  Sarga’s barefoot approach works directly with this system by:
                  <br></br>
                  <br></br>
                  <ul>
                    <li>
                      Creating <b>shear</b> to help fascial layers rehydrate and
                      reorganize
                    </li>
                    <li>
                      Applying <b>compression</b> that encourages tissue
                      pliability
                    </li>
                    <li>
                      Using <b>directional tension</b> that follows natural
                      fascial lines
                    </li>
                    <li>
                      Supporting the <b>nervous system</b> in shifting from
                      protection to release
                    </li>
                  </ul>
                  <br></br>
                  <br></br>
                  The result is bodywork that feels deep, connected, and
                  integrative — not forceful or painful.
                </p>
              </div>
            </div>

            <div className="card card-session mb-3">
              <div className="card-header">What does Sarga Feel Like?</div>
              <div className="card-body">
                <p className="card-text">
                  Clients often describe Sarga as:
                  <br></br>
                  <br></br>
                  <ul>
                    <li>Deep but gentle</li>
                    <li>Melting, grounding, stabilizing</li>
                    <li>Slow and soothing</li>
                    <li>A sense of “my body can trust this”</li>
                    <li>A feeling of being lengthened and unwound</li>
                  </ul>
                  <br></br>
                  <br></br>
                  It’s depth without strain. Pressure without pain. Movement
                  without force.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card card-session mb-3">
              <div className="card-header">
                Why Sarga Is the Foundation of My Work?
              </div>
              <div className="card-body">
                <p className="card-text">
                  At Restore, Sarga isn’t just one modality — it’s the basis of
                  how I work.
                  <br></br>
                  <br></br>
                  Its principles of grounded contact, fluid movement, and
                  fascial engagement shape every session, whether you choose:
                  <ul>
                    <li>Bodywork</li>
                    <li>Stretch‑only sessions </li>
                    <li>Hybrid sessions </li>
                  </ul>
                  <br></br>
                  <br></br>
                  Sarga gives me the ability to work deeply, therapeutically,
                  and effectively while keeping your body relaxed, safe, and
                  receptive.
                </p>
              </div>
            </div>

            <div className="card card-session mb-3">
              <div className="card-header">
                Who Benefits from Sarga Bodywork?
              </div>
              <div className="card-body">
                <p className="card-text">
                  Sarga is ideal for clients who want:
                  <br></br>
                  <ul>
                    <li>Deep work without pain</li>
                    <li>Relief from chronic tension patterns</li>
                    <li>Better mobility and movement quality</li>
                    <li>Support for athletic recovery</li>
                    <li>A more connected sense of their body</li>
                    <li>
                      A grounded, calming experience that still creates change
                    </li>
                  </ul>
                  <br></br>
                  <br></br>
                  If you’ve ever braced, tightened, or “pushed through”
                  traditional deep tissue work, Sarga offers a completely
                  different experience.
                </p>
              </div>
            </div>

            <div className="card card-session mb-3">
              <div className="card-header">Sarga in Every Session</div>
              <div className="card-body">
                <p className="card-text">
                  Whether you’re receiving bodywork, stretch therapy, or a
                  hybrid session, Sarga’s principles guide the treatment. Each
                  session is booked by time and fully customized to what your
                  body needs that day.
                </p>
              </div>
            </div>
          </div>

          <section className="sarga-faq-section">
            <div className="sarga-faq-heading">
              <span className="sarga-faq-label">Questions &amp; Answers</span>
              <h2>Sarga Bodywork FAQ</h2>
              <div className="sarga-faq-accent" aria-hidden="true" />
            </div>

            <div className="sarga-faq-list">
              {sargaFaqs.map((faq, index) => (
                <details className="sarga-faq-item" key={faq.question}>
                  <summary>
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question">{faq.question}</span>

                    <span className="faq-toggle" aria-hidden="true" />
                  </summary>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}
