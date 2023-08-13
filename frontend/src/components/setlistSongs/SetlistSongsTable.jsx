import React, {useState} from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {calculatePagination} from '../../utils/paginationUtils';
import Pagination from "../Pagination";

function SetlistSongsTable({data, onEdit, itemsPerPage}) {

    const [currentPage, setCurrentPage] = useState(1);

    const {currentItems, totalPages} = calculatePagination(currentPage, itemsPerPage, data);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Setlist Song ID</th>
                    <th>Setlist ID</th>
                    <th>Song ID</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.setlistSongId}>
                        <td>{d.setlistSongId}</td>
                        <td>{d.setlistName}</td>
                        <td>{d.songTitle}</td>
                        <td>
                            <button className="edit-icon" onClick={() => onEdit(d)}>
                                <EditRoundedIcon/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </>
    )
}

export default SetlistSongsTable;