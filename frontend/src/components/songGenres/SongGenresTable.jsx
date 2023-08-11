import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function SongGenresTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Song Genre ID</th>
                <th>Song ID</th>
                <th>Genre ID</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.songGenreId}>
                    <td>{d.songGenreId}</td>
                    <td>{d.songTitle}</td>
                    <td>{d.genreName}</td>
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

export default SongGenresTable;