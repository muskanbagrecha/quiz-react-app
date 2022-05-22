export function User(props) {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      ></path>
    </svg>
  );
}

export function Moon(props) {
  return (
    <svg width="1.25em" height="1.25em" viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z"
      ></path>
    </svg>
  );
}

export function Sun(props) {
  return (
    <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79l1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41l1.79-1.79zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79l-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41l-1.79 1.8z"
      ></path>
    </svg>
  );
}

export function Success(props) {
  return (
    <svg width="1.4em" height="1.4em" viewBox="0 0 36 36" {...props}>
      <path
        fill="currentColor"
        d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.45 10.63L15.31 25.76L7.55 18a1.4 1.4 0 0 1 2-2l5.78 5.78l11.14-11.13a1.4 1.4 0 1 1 2 2Z"
        className="clr-i-solid clr-i-solid-path-1"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

export function Danger(props) {
  return (
    <svg width="1.4em" height="1.4em" viewBox="-2 -3 24 24" {...props}>
      <path
        fill="currentColor"
        d="m12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096zM10 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1z"
      ></path>
    </svg>
  );
}

export function Info(props) {
  return (
    <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      ></path>
    </svg>
  );
}

export function Warning(props) {
  return (
    <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M1 21h22L12 2L1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
      ></path>
    </svg>
  );
}

export function Cancel(props) {
  return (
    <svg width="1.4em" height="1.4em" viewBox="0 0 15 15" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function OpenEye(props) {
  return (
    <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
      ></path>
    </svg>
  );
}

export function CloseEye(props) {
  return (
    <svg width="1.25em" height="1.25em" viewBox="0 0 512 512" {...props}>
      <path
        d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function Check(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
      ></path>
    </svg>
  );
}

export function Cross(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
