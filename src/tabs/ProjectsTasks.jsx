import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const ProjectsTasks = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch('https://olhasheliakina.github.io/cms-app_backendless/data/projectsData.json')
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data.projectsTasks);
      })
      .catch((error) => {
        console.error('Error has occured while fetching data:', error);
      });
  }, []);
  return (
    <section className='section is-medium'>
      <h3 className='title has-text-centered'>Projects Tasks</h3>
      <ol>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={classNames('has-text-dark',{
              'has-text-success': project.status === 'Completed',
              'has-background-warning': project.status === 'In Progress',
            })}
          >
            <li key={project.id}>
              <span className='mx-6'>{project.name}</span>
              <span>{project.status}</span>
              <span className='mx-6'>{project.projectName}</span>
            </li>
          </div>
        ))}
      </ol>
    </section>
  );
};

export default ProjectsTasks;