import { Link } from '@tanstack/react-router';

export function Nav () {

  return (
      <nav>
        <ul>
            <Link to="/"><a href="/">Home</a></Link>
            <Link to="/about"><a href="/about">About</a></Link>
        </ul>
      </nav>
  );
}
