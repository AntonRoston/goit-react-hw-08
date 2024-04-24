import DocumentTitle from '../components/DocumentTitle';
// import css from './Home.module.css'
const styles = {
  container: {
    paddingTop: '350px',
    paddingRight: '80px',
    // minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 500,
    fontSize: 80,
    textAlign: 'center',
  },
  span: {
    color: '#ffff00',
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Your Contacts, <br/><span style={styles.span}>Your World,</span> <br /> Connected.</h1>
      </div>
    </>
  );
}
