import { Link } from '@tanstack/react-router';

export function Nav () {

  return (
      <nav>
        <ul>
            <Link to="/"><a href="/">Home</a></Link>
            <Link to="/apply"><a href="/apply">Apply</a></Link>
        </ul>
      </nav>
  );
}
