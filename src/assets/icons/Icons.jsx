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
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z"></path></svg>
  )
}


export function Sun(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79l1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41l1.79-1.79zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79l-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41l-1.79 1.8z"></path></svg>
  )
}