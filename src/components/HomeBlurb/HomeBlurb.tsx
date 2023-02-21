import Link from "next/link";

import "./HomeBlurb.scss";

const HomeBlurb: React.FC = () => (
  <div className="home-blurb">
    <div>
      <p>
        <span>Hi! I&apos;m Lucas Engel,</span> a software engineer based in
        Ontario, Canada
      </p>
      <p>
        Feel free to check my <Link href="resume">resume</Link>.
      </p>
    </div>
    <div className="frame">
      <img src="/lucas-engel.jpg" alt="Lucas Engel" />
    </div>
  </div>
);

export default HomeBlurb;
