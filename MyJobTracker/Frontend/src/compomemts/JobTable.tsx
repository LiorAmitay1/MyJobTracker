import JobRow from './JobRow';


function JobTable(){
    return (
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Job Title</th>
                    <th>Date Posted</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {/* Example rows, replace with dynamic data */}
                <JobRow 
                    company="Tech Corp" 
                    jobTitle="Software Engineer" 
                    datePosted="2023-10-01" 
                    dateApplied="2023-10-05" 
                    status="Applied" 
                />
                <JobRow 
                    company="Biz Solutions" 
                    jobTitle="Data Analyst" 
                    datePosted="2023-09-15" 
                    dateApplied="2023-09-20" 
                    status="Interview Scheduled" 
                />
            </tbody>
        </table>
    );
}

export default JobTable;
