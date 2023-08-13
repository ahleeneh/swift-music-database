import React, {useState} from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Pagination from '../Pagination';
import {calculatePagination} from '../../utils/paginationUtils';

function GenresTable({data, onEdit, itemsPerPage}) {

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
                    <th>Genre ID</th>
                    <th>Name</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.genreId}>
                        <td>{d.genreId}</td>
                        <td>{d.genreName}</td>
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

export default GenresTable;