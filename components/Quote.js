import Player from 'react-audio-player'

const Quote = (props) => (
  <section className={props.transitioning ? 'transitioning' : ''}>
    <div className="message">{props.message}</div>
    <div className="person">— {props.person}</div>
    <div className="company">{props.company}</div>
    <div className="year">
      (Partnered in {props.year})
      <div className="flag">
        <svg viewBox="0 0 64 64" enableBackground="new 0 0 64 64"><path fill="#ed4c5c" d="M47.971,6.609C43.346,3.693,37.871,2,32,2v4.61H47.971z"/><path fill="#fff" d="M32,11.219h21.625c-1.688-1.755-3.584-3.305-5.654-4.61H32V11.219z"/><path fill="#ed4c5c" d="M32,15.829h25.262c-1.061-1.655-2.279-3.198-3.637-4.61H32V15.829z"/><path fill="#fff" d="m32 20.439h27.688c-.674-1.614-1.49-3.153-2.426-4.61h-25.26v4.61"/><path fill="#ed4c5c" d="m32 25.05h29.18c-.377-1.588-.875-3.13-1.494-4.61h-27.688v4.61"/><path fill="#fff" d="m32 29.659h29.9c-.121-1.574-.363-3.113-.719-4.61h-29.18v4.61"/><path fill="#ed4c5c" d="m61.9 29.659h-29.9v2.341h-30c0 .764.037 1.519.094 2.27h59.813c.054-.751.093-1.506.093-2.27 0-.789-.041-1.568-.1-2.341"/><path fill="#fff" d="m2.801 38.879h58.4c.352-1.496.59-3.037.709-4.609h-59.812c.117 1.572.355 3.113.707 4.609"/><path fill="#ed4c5c" d="m4.283 43.488h55.43c.613-1.48 1.107-3.02 1.48-4.609h-58.4c.373 1.588.867 3.129 1.482 4.609"/><path fill="#fff" d="m6.691 48.1h50.617c.928-1.457 1.738-2.996 2.408-4.609h-55.43c.67 1.613 1.479 3.152 2.408 4.609"/><path fill="#ed4c5c" d="m10.305 52.709h43.39c1.35-1.414 2.561-2.957 3.615-4.611h-50.618c1.055 1.654 2.266 3.197 3.614 4.611"/><path fill="#fff" d="m15.916 57.32h32.17c2.053-1.309 3.936-2.857 5.609-4.609h-43.39c1.674 1.752 3.556 3.301 5.611 4.609"/><path fill="#ed4c5c" d="M32,62c5.92,0,11.434-1.723,16.084-4.682H15.916C20.564,60.277,26.08,62,32,62z"/><path fill="#428bc1" d="m16.03 6.609c-2.068 1.305-3.967 2.854-5.654 4.61-1.355 1.412-2.574 2.955-3.637 4.61-.934 1.457-1.75 2.996-2.426 4.61-.617 1.479-1.115 3.02-1.492 4.61-.355 1.497-.598 3.036-.719 4.61-.06.773-.099 1.552-.099 2.341h30v-2.341-4.61-4.61-4.61-4.61-4.61-4.609c-5.873 0-11.346 1.693-15.973 4.609"/><g fill="#fff"><path d="m25 3l.473 1.481h1.527l-1.236.98.476 1.515-1.24-.9-1.236.924.476-1.542-1.24-.977h1.527z"/><path d="m29 9l.473 1.481h1.527l-1.236.98.476 1.515-1.24-.896-1.236.92.476-1.542-1.24-.977h1.527z"/><path d="m21 9l.473 1.481h1.527l-1.236.98.476 1.515-1.24-.896-1.236.92.472-1.542-1.236-.977h1.527z"/><path d="m25 15l.473 1.481h1.527l-1.236.98.476 1.515-1.24-.896-1.236.92.476-1.542-1.24-.977h1.527z"/><path d="m17 15l.473 1.481h1.527l-1.236.98.472 1.515-1.236-.896-1.236.92.472-1.542-1.236-.977h1.527z"/><path d="m9 15l.473 1.481h1.527l-1.236.98.472 1.515-1.236-.896-1.236.92.472-1.542-1.236-.977h1.527z"/><path d="m29 21l.473 1.481h1.527l-1.236.98.476 1.515-1.24-.896-1.236.92.476-1.542-1.24-.977h1.527z"/><path d="m21 21l.473 1.481h1.527l-1.236.98.476 1.515-1.24-.896-1.236.92.472-1.542-1.236-.977h1.527z"/><path d="m13 21l.473 1.481h1.527l-1.236.98.472 1.515-1.236-.896-1.236.92.472-1.542-1.236-.977h1.527z"/><path d="m25 27l.473 1.482h1.527l-1.236.979.476 1.515-1.24-.896-1.236.92.476-1.542-1.24-.976h1.527z"/><path d="m17 27l.473 1.482h1.527l-1.236.979.472 1.515-1.236-.896-1.236.92.472-1.542-1.236-.976h1.527z"/><path d="m9 27l.473 1.482h1.527l-1.236.979.472 1.515-1.236-.896-1.236.92.472-1.542-1.236-.976h1.527z"/><path d="m11.764 13l1.236-.924 1.236.899-.473-1.514 1.237-.98h-1.527l-.473-1.481-.473 1.482h-1.422c-.016.016-.031.03-.047.046l1.178.931-.472 1.541"/><path d="m3.764 25l1.236-.924 1.236.899-.473-1.514 1.237-.98h-1.527l-.473-1.481-.473 1.482h-.976c-.039.115-.08.228-.117.343l.803.633-.473 1.542"/></g></svg>
      </div>
    </div>
    <Player
      src={props.audio}
      ref={props.audioRef}
      onEnded={props.onAudioEnd}
      controls={false}
    />
    <style jsx>
      {`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          animation: ${props.transitionDuration / 1000}s ease fade-in forwards;
        }
        section.transitioning {
          animation: ${props.transitionDuration / 1000}s ease fade-out forwards;
        }
        .message {
          max-width: 980px;
          font-size: 44px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: -1px;
          line-height: 64px;
        }
        .person {
          font-size: 44px;
          font-weight: 400;
          text-align: center;
        }
        .company{
          font-size: 24px;
          font-weight: 900;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .year {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .year .flag {
          width: 24px;
          height: auto;
          margin-left: 20px;
          padding-top: 5px;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          } to {
            opacity: 1;
          }
        }
        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          100%{
            opacity: 0;
          }
        }
      `}
    </style>
  </section>
)

export default Quote