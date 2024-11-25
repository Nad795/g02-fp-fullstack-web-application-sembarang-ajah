import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My Website</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    margin: 0
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0
  },
  navItem: {
    marginLeft: '20px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;