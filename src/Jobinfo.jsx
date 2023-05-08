import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, duties, id, title, order } = jobs[currentItem];
  return (
    <article className="jobs-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties}></Duties>
    </article>
  );
};

export default JobInfo;

// company: 'TOMMY';
// dates: 'December 2015 - Present';
// duties: (3)[
//   ('Tote bag sartorial mlkshk air plant vinyl banjo lu…ch neutra. Hammock photo booth live-edge disrupt.',
//   'Post-ironic selvage chambray sartorial freegan med… toast street art cloud bread live-edge heirloom.',
//   'Butcher drinking vinegar franzen authentic messeng…ffee franzen cloud bread tilde vegan flexitarian.')
// ];
// id: 'recAGJfiU4CeaV0HL';
// order: 3;
// title: 'Full Stack Web Developer';
