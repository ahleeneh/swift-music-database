import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function LyricsTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Lyric ID</th>
                <th>Song ID</th>
                <th>Lyrics</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.lyricId}>
                    <td>{d.lyricId}</td>
                    <td>{d.songId}</td>
                    <td>{d.lyricsText}</td>
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

export default LyricsTable;