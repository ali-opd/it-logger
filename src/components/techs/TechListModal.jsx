import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techAction';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/techs');
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  // if (loading || techs === null) return <PreLoader />;

  return (
    <>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <ul className="collection">
            {!loading &&
              techs !== null &&
              techs.map((tech) => (
                // <li key={tech.id} className="collection-item">
                //   {tech.firstName}
                // </li>
                <TechItem key={tech.id} tech={tech} />
              ))}
          </ul>
        </div>
      </div>
      {/* <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && techs.length === 0 ? <p className="center">No Logs to show...</p> : techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
      </ul> */}
    </>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
