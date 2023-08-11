import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function SetlistsTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Setlist ID</th>
                <th>Name</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.setlistId}>
                    <td>{d.setlistId}</td>
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

export default SetlistsTable;