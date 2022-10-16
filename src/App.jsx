import { useEffect, useState } from "react";
import Schedules from "./Schedules";

function App() {
  const [venues, setVenues] = useState(null);
  const [schedules, setSchedules] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => {
        return res.json();
      })
      .then((data) => setVenues(data.venues))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://sis.materdeicollege.com/api/venues/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => setSchedules(data.schedules))
      .catch((err) => console.log(err));
  }, [id]);
  const passID = (id) => {
    setId(id);
  };

  return (
    <div className="d-flex" style={{ overflowX: "hidden" }}>
      <div className="col-md-4 vh-100 overflow-auto bg-info bg-gradient">
        <h1 className="text-white text-center">School Venues</h1>
        {venues && (
          <table class="table table-striped text-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Building</th>
                <th scope="col">Capacity</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((venue, index) => (
                <tr key={index} onClick={() => passID(venue.id)}>
                  <td>{venue.id}</td>
                  <td>{venue.building}</td>
                  <td>{venue.capacity}</td>
                  <td>{venue.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="col-md-9 vh-100 overflow-auto">
        {schedules && <Schedules schedules={schedules} />}
      </div>
    </div>
  );
}

export default App;
