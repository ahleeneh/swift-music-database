import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function ConcertsTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Concert ID</th>
                <th>Name</th>
                <th>Venue</th>
                <th>Location</th>
                <th>Date</th>
                <th>Tour ID</th>
                <th>Setlist ID</th>

                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.concertId}>
                    <td>{d.concertId}</td>
                    <td>{d.concertName}</td>
                    <td>{d.concertVenue}</td>
                    <td>{d.concertLocation}</td>
                    <td>{d.concertDateTime}</td>
                    <td>{d.tourName}</td>
                    <td>{d.setlistName}</td>
                    {/*<td>*/}
                    {/*    <button className="edit-icon" onClick={() => onEdit(d)}>*/}
                    {/*        <EditOutlinedIcon />*/}
                    {/*    </button>*/}
                    {/*</td>*/}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default ConcertsTable;