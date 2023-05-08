import { useEffect, useState } from 'react';
import JobInfo from './Jobinfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJobs(data);
    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  {
    return (
      <section className="jobs-center">
        {/* {button container} */}
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        {/* {job info} */}
        <JobInfo jobs={jobs} currentItem={currentItem}></JobInfo>
      </section>
    );
  }
};
export default App;
