import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import IconButton from '../ui/IconButton/IconButton';
import ChevronLeft from '../ui/icons/ChevronLeft';
import ChevronRight from '../ui/icons/ChevronRight';
import TeamMember from './TeamMember';
import styles from './Team.module.css';
import members from 'constants/members';

const SLIDES_PER_VIEW = 3;
const SLIDE_WIDTH = 272;

export default function Team() {
  const totalPages = Math.max(1, Math.ceil(members.length / SLIDES_PER_VIEW));
  const maxStartIndex = Math.max(0, members.length - SLIDES_PER_VIEW);
  const [page, setPage] = useState(0);

  const next = () => setPage(p => (p + 1) % totalPages);
  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);

  const startIndex = Math.min(page * SLIDES_PER_VIEW, maxStartIndex);
  const trackOffset = startIndex * SLIDE_WIDTH;

  return (
    <div className={styles.container}>
      <SectionTitle>Meet our team</SectionTitle>
      <div className={styles.teamWrapper}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            We&apos;ve been serving the Newton area since 1999 and have a
            pristine reputation for our highly trained stylists who continually
            upgrade their skills. By using the very best products on the market
            and staying tuned in to the latest developments in our industry,
            we&apos;re able to offer you an always modern beauty experience.
            Whether you&apos;re here to maintain your look or receive a beauty
            transformation, you can do it all at Tête-à-Tête.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <IconButton
            onClick={prev}
            ariaLabel="Previous team member"
            className={`${styles.navArrow} ${styles.navArrowLeft}`}
          >
            <ChevronLeft />
          </IconButton>
          <div className={styles.carouselContainer}>
            <div
              className={styles.track}
              style={
                {
                  '--track-offset': `-${trackOffset}px`
                } as React.CSSProperties
              }
            >
              {members.map(member => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  title={member.title}
                  description={member.description}
                  photo={member.photo}
                  link={member.link}
                />
              ))}
            </div>
          </div>
          <IconButton
            onClick={next}
            ariaLabel="Next team member"
            className={`${styles.navArrow} ${styles.navArrowRight}`}
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
