import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import Button from '../ui/Button/Button';
import Accordion from '../ui/Accordion/Accordion';
import styles from './HairdreamsLanding.module.css';

const BOOKING_URL = 'https://login.meevo.com/teteatete/ob?locationId=106145';

const HERO_IMAGE =
  'https://res.cloudinary.com/dyj6lkekg/image/upload/v1784919198/tete/hairdreams_hero.jpg';
const BEFORE_IMAGE =
  'https://res.cloudinary.com/dyj6lkekg/image/upload/v1711816297/tete/hairdreams1.jpg';
const AFTER_IMAGE =
  'https://res.cloudinary.com/dyj6lkekg/image/upload/v1711816297/tete/hairdreams2.jpg';
const KATYA_IMAGE =
  'https://res.cloudinary.com/dyj6lkekg/image/upload/v1710806144/tete/kate_new.jpg';

const bestFor = [
  'Women whose hair has become thinner, finer, or flatter over the years',
  'Anyone noticing a widening part, sparse edges, or bald patches',
  'Post-partum, menopausal, or stress-related shedding',
  'Thinning after illness, medication, or a strict diet',
  'Naturally fine hair that never holds volume or length',
  'Clients who want more length or fullness without waiting to grow it out'
];

const problems = [
  'Thinning hair and a visibly widening part',
  'Flat, lifeless hair with no body',
  'Short, fine hair that will not grow past a certain point',
  'Scalp showing through at the crown or hairline',
  'Damage and breakage from bleaching, heat, or over-styling',
  'Loss of confidence about how your hair looks'
];

const benefits = [
  {
    title: 'Looks and feels completely natural',
    text: 'Premium, 100% real human hair is matched to your color and texture so no one can tell the difference.'
  },
  {
    title: 'Gentle, no-glue application',
    text: 'MicroLines attach at the roots without glue, heat, or chemicals, so your own hair stays protected.'
  },
  {
    title: 'Instant volume and length',
    text: 'Walk out the same day with the fuller, longer hair you have been missing — no waiting to grow it out.'
  },
  {
    title: 'Built to last',
    text: 'High-quality hair holds up to washing, styling, and daily life for many months with simple care.'
  },
  {
    title: 'Fully customized',
    text: 'Every application is tailored to your hair loss pattern, lifestyle, and the look you want.'
  },
  {
    title: 'Trusted worldwide',
    text: 'Hairdreams technology from Austria is used by partner salons in over 60 countries.'
  }
];

const stats = [
  { value: '60+', label: 'Countries with partner salons' },
  { value: 'Millions', label: 'Of clients served worldwide' },
  { value: '100%', label: 'Premium real human hair' },
  { value: 'Austria', label: 'Where Hairdreams is made' }
];

const faqs = [
  {
    q: 'Will Hairdreams damage my own hair?',
    a: 'No. MicroLines are attached at the roots without glue, heat, or chemicals. When applied and maintained by a trained specialist, your natural hair stays protected.'
  },
  {
    q: 'Does it look natural?',
    a: 'Yes. We use premium, 100% real human hair carefully matched to your color and texture. Once styled, it blends seamlessly with your own hair.'
  },
  {
    q: 'How long does it last?',
    a: 'With proper care, Hairdreams typically lasts several months before a maintenance visit. The exact timing depends on your hair growth and lifestyle.'
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on how much hair you need and the result you want. That is exactly what we determine together during your free consultation.'
  },
  {
    q: 'Can I wash, style, and color it?',
    a: 'Yes. You can wash, blow-dry, and style your hair as usual. Katya will walk you through simple at-home care to keep it looking its best.'
  },
  {
    q: 'What happens at the free consultation?',
    a: 'Katya assesses your hair, listens to your goals, explains your options, and gives you a clear plan and estimate — with no obligation.'
  }
];

const testimonials = [
  {
    text: 'My hair had gotten so thin I stopped wearing it down. After Hairdreams with Katya I finally feel like myself again — it looks completely natural.',
    author: 'Elena R.'
  },
  {
    text: 'I was nervous it would look fake or damage my hair. It did neither. The consultation was honest and I left knowing exactly what to expect.',
    author: 'Diane M.'
  },
  {
    text: 'Katya matched the color perfectly. My friends just think I grew it out. Best decision I have made for my hair in years.',
    author: 'Priya S.'
  }
];

export default function HairdreamsLanding() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Hairdreams by Katya</p>
          <h1 className={styles.heroTitle}>
            Fuller, longer, natural-looking hair — starting today
          </h1>
          <p className={styles.heroText}>
            If your hair has become thinner or you have always wished for more
            length and volume, Hairdreams is a gentle, proven solution. Book
            your <strong>free, no-obligation consultation</strong> with Katya
            and find out what is possible for your hair.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            <Button>Book a free consultation</Button>
          </a>
          <p className={styles.heroNote}>
            No pressure. Just honest advice from a certified specialist.
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image
            layout="fill"
            objectFit="cover"
            priority
            src={HERO_IMAGE}
            alt="Hairdreams result at Tête-à-Tête"
          />
        </div>
      </section>

      {/* What is Hairdreams */}
      <section className={styles.section}>
        <SectionTitle>What is Hairdreams?</SectionTitle>
        <div className={styles.prose}>
          <p>
            Hairdreams is the international leader in premium hair extensions
            and hair thickening. It uses 100% real, high-quality human hair to
            add volume and length — or to gently fill in areas where your own
            hair has become thin.
          </p>
          <p>
            The signature <strong>MicroLines</strong> method attaches fine,
            natural strands close to the roots without glue, heat, or chemicals.
            The result blends invisibly with your own hair and feels completely
            like your own.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className={styles.sectionAlt}>
        <SectionTitle>Who is it for?</SectionTitle>
        <ul className={styles.checkList}>
          {bestFor.map(item => (
            <li key={item} className={styles.checkItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Problems it solves */}
      <section className={styles.section}>
        <SectionTitle>Problems Hairdreams solves</SectionTitle>
        <div className={styles.problemGrid}>
          {problems.map(problem => (
            <div key={problem} className={styles.problemCard}>
              {problem}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.sectionAlt}>
        <SectionTitle>The main benefits</SectionTitle>
        <div className={styles.benefitGrid}>
          {benefits.map(benefit => (
            <div key={benefit.title} className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before & after */}
      <section className={styles.section}>
        <SectionTitle>Before &amp; after</SectionTitle>
        <div className={styles.beforeAfter}>
          <figure className={styles.baFigure}>
            <Image
              width={600}
              height={800}
              src={BEFORE_IMAGE}
              alt="Hair before Hairdreams"
            />
            <figcaption className={styles.baCaption}>Before</figcaption>
          </figure>
          <figure className={styles.baFigure}>
            <Image
              width={600}
              height={800}
              src={AFTER_IMAGE}
              alt="Hair after Hairdreams"
            />
            <figcaption className={styles.baCaption}>After</figcaption>
          </figure>
        </div>
        <p className={styles.baNote}>
          Real Hairdreams work by Katya at Tête-à-Tête. Your results are
          tailored to your own hair during your consultation.
        </p>
      </section>

      {/* Specialist */}
      <section className={styles.sectionAlt}>
        <SectionTitle>Meet your specialist</SectionTitle>
        <div className={styles.specialist}>
          <div className={styles.specialistPhoto}>
            <Image
              width={600}
              height={740}
              src={KATYA_IMAGE}
              alt="Katya Bababekov, Hairdreams specialist"
            />
          </div>
          <div className={styles.specialistInfo}>
            <h3 className={styles.specialistName}>Katya Bababekov</h3>
            <p className={styles.specialistRole}>
              Owner &amp; certified Hairdreams specialist
            </p>
            <p>
              Katya provides the exclusive service of applying Hairdreams
              MicroLines at Tête-à-Tête. She specializes in fine-hair solutions
              and has a unique talent for finding the most natural, flattering
              result for every client.
            </p>
            <p>
              At your consultation she will assess your hair, listen carefully
              to your goals, and design a plan that fits your look and your
              lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className={styles.trustBand}>
        {stats.map(stat => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <SectionTitle>What clients say</SectionTitle>
        <div className={styles.testimonialGrid}>
          {testimonials.map(t => (
            <blockquote key={t.author} className={styles.testimonial}>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <footer className={styles.testimonialAuthor}>— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.sectionAlt}>
        <SectionTitle>Common questions</SectionTitle>
        <div className={styles.faq}>
          {faqs.map(faq => (
            <Accordion
              key={faq.q}
              title={<h5 className={styles.faqQuestion}>{faq.q}</h5>}
            >
              <p className={styles.faqAnswer}>{faq.a}</p>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className={styles.finalCta}>
        <h2 className={styles.finalTitle}>Ready to love your hair again?</h2>
        <p className={styles.finalText}>
          Your free consultation with Katya is the first step. No obligation —
          just a clear, honest look at what Hairdreams can do for you.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaLink}
        >
          <Button>Book a free consultation</Button>
        </a>
        <Link href="/haircare" passHref>
          <a className={styles.backLink}>See all hair services</a>
        </Link>
      </section>
    </div>
  );
}
