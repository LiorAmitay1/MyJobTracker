import { useEffect, useState } from 'react';

type Job = {
  company: string;
  position: string;
  datePosted: string;
  dateApplied: string;
  status: string;
};

function JobTable() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Failed to fetch jobs:", err));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Date Posted</th>
          <th>Date Applied</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index}>
            <td>{job.company}</td>
            <td>{job.position}</td>
            <td>{job.datePosted}</td>
            <td>{job.dateApplied}</td>
            <td>{job.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobTable;
