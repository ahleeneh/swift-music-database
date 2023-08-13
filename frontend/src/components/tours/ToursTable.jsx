import React from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function ToursTable({ data, onEdit }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Tour ID</th>
                <th>Tour Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Description</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.tourId}>
                    <td>{d.tourId}</td>
                    <td>{d.tourName}</td>
                    <td>{d.tourStartDate}</td>
                    <td>{d.tourEndDate}</td>
                    <td>{d.tourDescription}</td>
                    <td>
                        <button className="edit-icon" onClick={() => onEdit(d)}>
                            <EditRoundedIcon />
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default ToursTable;