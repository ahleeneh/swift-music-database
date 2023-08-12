import React, { useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Pagination from '../Pagination';
import {calculatePagination} from '../../utils/paginationUtils';

function AlbumsTable({data, onEdit, itemsPerPage}) {

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
                    <th>Album ID</th>
                    <th>Album Title</th>
                    <th>Release Date</th>
                    <th>Description</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.albumId}>
                        <td>{d.albumId}</td>
                        <td>{d.albumTitle}</td>
                        <td>{d.releaseDate}</td>
                        <td>{d.description}</td>
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

export default AlbumsTable;