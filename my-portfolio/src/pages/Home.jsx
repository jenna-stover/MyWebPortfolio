import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Resume from "../assets/my-resume.pdf";
import cardBackgroundOne from '../assets/card-bkg1.jpg';
import cardBackgroundTwo from '../assets/card-bkg2.jpg';
import cardBackgroundThree from '../assets/card-bkg3.jpg';
import cardBackgroundFour from '../assets/card-bkg4.jpg';
import SplitText from '../components/SplitText';

const PANELS = [
  {
    key: 'projects',
    title: 'Projects',
    subtitle: 'Explore my latest work',
    bg: cardBackgroundTwo,
    to: '/projects',
  },
  {
    key: 'about',
    title: 'About Me',
    subtitle: 'Learn more about who I am',
    bg: cardBackgroundThree,
    to: '/about-me',
  },
  {
    key: 'resume',
    title: 'Resume',
    subtitle: 'Check out my professional experience',
    bg: cardBackgroundOne,
    href: Resume,
  },
  {
    key: 'contact',
    title: 'Contact',
    subtitle: 'Send me any inquiries/feedback you have',
    bg: cardBackgroundFour,
    to: '/contact-me',
  },
];

const EXPAND_DURATION = 650;

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const [expanding, setExpanding] = useState(null);
  const navigate = useNavigate();
  const navigatingRef = useRef(false);

  const handleClick = (panel, index) => (event) => {
    if (panel.href || navigatingRef.current) return;
    event.preventDefault();
    navigatingRef.current = true;
    setExpanding(index);
    setTimeout(() => {
      navigate(panel.to, { viewTransition: true });
    }, EXPAND_DURATION);
  };

  return (
    <div className="home-page">
      <div className="home-title">
        <SplitText
          text="Jenna Stover's Web Portfolio"
          className="welcome-text"
          delay={40}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
      </div>

      <div className="panel-row">
        {PANELS.map((panel, index) => {
          const isHovered = hovered === index;
          const isExpanding = expanding === index;
          const isDimmed = expanding !== null && !isExpanding;
          const Tag = panel.href ? 'a' : 'button';
          const linkProps = panel.href
            ? { href: panel.href, target: '_blank', rel: 'noopener noreferrer' }
            : { type: 'button' };

          return (
            <Tag
              key={panel.key}
              className={[
                'panel',
                isHovered && 'hovered',
                isExpanding && 'expanding',
                isDimmed && 'dimmed',
              ].filter(Boolean).join(' ')}
              style={{ backgroundImage: `url(${panel.bg})` }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(index)}
              onBlur={() => setHovered(null)}
              onClick={handleClick(panel, index)}
              {...linkProps}
            >
              <span className="panel-overlay" />
              <span className="panel-content">
                <span className="panel-title">{panel.title}</span>
                <span className="panel-subtitle">{panel.subtitle}</span>
              </span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
