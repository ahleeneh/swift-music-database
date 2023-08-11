import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function SetlistSongsTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Setlist Song ID</th>
                <th>Setlist ID</th>
                <th>Song ID</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.setlistSongId}>
                    <td>{d.setlistSongId}</td>
                    <td>{d.setlistName}</td>
                    <td>{d.songTitle}</td>
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

export default SetlistSongsTable;