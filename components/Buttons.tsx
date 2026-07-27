import Link from 'next/link';
import styles from './Buttons.module.css';
import Button from './ui/Button/Button';

export default function Buttons() {
  return (
    <div className={styles.container}>
      <Button
        size="small"
        className={styles.button}
        onClick={() =>
          globalThis.window.open(
            'https://swipeit.com/product/1218/tete-a-tete',
            '_blank'
          )
        }
      >
        Buy a gift card
      </Button>

      <Link
        passHref={true}
        scroll={false}
        href={{
          pathname: '/',
          query: { id: 'services' }
        }}
      >
        <a>
          <Button variant="secondary" fullWidth size="small">
            See other services
          </Button>
        </a>
      </Link>
    </div>
  );
}
