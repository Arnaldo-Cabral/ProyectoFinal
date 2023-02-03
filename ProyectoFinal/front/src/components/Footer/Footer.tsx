import cx from 'classnames/bind';

const Footer = () => {
  return (
    <footer className={cx('bg-dark', 'py-3', 'text-white', 'text-center')}>
      2022 | Coded by{' '}
      <a
        href="https://google.com.ar/"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        &copy; Ar Cabral
      </a>
    </footer>
  );
};

export default Footer;
