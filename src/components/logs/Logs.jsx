import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const dispatch = useDispatch();
  // const { logs, loading } = useSelector((state) => state.log);

  useEffect(() => {
    getLogs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading || logs === null) return <PreLoader />;

  return (
    <>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? <p className="center">No Logs to show...</p> : logs.map((log) => <LogItem key={log.id} log={log} />)}
      </ul>
    </>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);

// export default Logs;
