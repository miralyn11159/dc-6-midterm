function Schedules({ schedules }) {
  console.log(schedules);
  return (
    <div className="col-md-11 overflow-auto bg-success">
      <h1 className="text-white text-center">School Venues</h1>
      <table className="table table-striped text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course no.</th>
            <th scope="col">Description</th>
            <th scope="col">Schedule</th>
            <th scope="col">Teacher</th>
          </tr>
        </thead>
        <tbody>
          {schedules?.map((sched, index) => (
            <tr key={index}>
              <td>{sched.id}</td>
              <td>{sched.course_no}</td>
              <td>{sched.description}</td>
              <td>{sched.schedule}</td>
              <td>{sched.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Schedules;
