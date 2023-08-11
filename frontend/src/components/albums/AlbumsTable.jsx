import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function AlbumsTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Album ID</th>
                <th>Album Title</th>
                <th>Release Date</th>
                <th>Description</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.albumId}>
                    <td>{d.albumId}</td>
                    <td>{d.albumTitle}</td>
                    <td>{d.releaseDate}</td>
                    <td>{d.description}</td>
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

export default AlbumsTable;