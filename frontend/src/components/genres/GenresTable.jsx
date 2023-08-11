import React from 'react';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function GenresTable({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Genre ID</th>
                <th>Name</th>
                {/*<th>Edit</th>*/}
            </tr>
            </thead>
            <tbody>
            {data.map((d) => (
                <tr key={d.genreId}>
                    <td>{d.genreId}</td>
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

export default GenresTable;