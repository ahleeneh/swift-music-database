import React from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';

function SetlistsTable({ data, onView, onEdit }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Setlist ID</th>
                <th>Name</th>
                <th>View Setlist</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.setlistId}>
                    <td>{d.setlistId}</td>
                    <td>{d.setlistName}</td>
                    <td>
                        <button className="edit-icon" onClick={() => onView(d)}>
                            <PageviewRoundedIcon />
                        </button>
                    </td>
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

export default SetlistsTable;