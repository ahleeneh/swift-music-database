import React, {useState} from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Pagination from '../Pagination';
import {calculatePagination} from '../../utils/paginationUtils';

function SongGenresTable({data, onEdit, itemsPerPage}) {

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
                    <th>Song Genre ID</th>
                    <th>Song ID</th>
                    <th>Genre ID</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.songGenreId}>
                        <td>{d.songGenreId}</td>
                        <td>{d.songTitle}</td>
                        <td>{d.genreName}</td>
                        <td>
                            <button className="edit-icon" onClick={() => onEdit(d)}>
                                <EditOutlinedIcon/>
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

export default SongGenresTable;