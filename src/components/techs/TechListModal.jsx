import { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <ul className="collection">
            {!loading &&
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

export default TechListModal;
