type JobTableRowProps = {
    company: string;
    jobTitle: string;
    datePosted: string;
    dateApplied: string;
    status: string;
    
}

function JobRow({ company, jobTitle, datePosted, dateApplied, status }: JobTableRowProps) {
  return (
    <tr>
      <td>{company}</td>
      <td>{jobTitle}</td>
      <td>{datePosted}</td>
      <td>{dateApplied}</td>
      <td>{status}</td>
    </tr>
  );
}
export default JobRow;