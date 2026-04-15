import styles from './HandyInfo.module.css';

const infoItems = [
  {
    image: 'blowdry',
    alt: 'Schedule blowdry',
    text: 'Schedule blowdry along with your color appoitment.',
  },
  {
    image: 'baby',
    alt: 'Children',
    text: 'Kids must be under adult supervision at all times.',
  },
  {
    image: 'phone-contact',
    alt: 'Contact',
    text: 'To schedule, change or cancel your appointmet please call us at 617-559-0660.',
  },
  {
    image: 'schedule',
    alt: 'Schedule',
    text: 'Cancellations less than 24 hours in advance may result in a fee.',
  },
  {
    image: 'payment',
    alt: 'Payment',
    text: (
      <>
        We accept all major credit cards.
        <br />
        (regretfully gratuity cannot be charged to the credit card).
      </>
    ),
  },
];

export default function HandyInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Handy info</h2>
        <div className={styles.grid}>
          {infoItems.map((item) => (
            <>
              <picture className={styles.icon}>
                <source type="image/webp" srcSet={`${item.image}.webp`} />
                <source type="image/png" srcSet={`${item.image}.png`} />
                <img src={`${item.image}.png`} alt={item.alt} />
              </picture>
              <p className={styles.text}>{item.text}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
