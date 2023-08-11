import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function SongsTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Song ID</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Album</th>
                <th>Featuring</th>
                <th>Genres</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.songId}>
                    <td>{d.songId}</td>
                    <td>{d.songTitle}</td>
                    <td>{d.songDuration}</td>
                    <td>{d.albumTitle}</td>
                    <td>{d.featuredArtist}</td>
                    <td>{d.songGenres}</td>
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

export default SongsTable;