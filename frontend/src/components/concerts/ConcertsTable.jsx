import React, {useState} from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Pagination from '../Pagination';
import {calculatePagination} from '../../utils/paginationUtils';

function ConcertsTable({data, onEdit, itemsPerPage}) {

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
                    <th>Concert ID</th>
                    <th>Name</th>
                    <th>Venue</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Tour ID</th>
                    <th>Setlist ID</th>

                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.concertId}>
                        <td>{d.concertId}</td>
                        <td>{d.concertName}</td>
                        <td>{d.concertVenue}</td>
                        <td>{d.concertLocation}</td>
                        <td>{d.concertDate}</td>
                        <td>{d.tourName}</td>
                        <td>{d.setlistName}</td>
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

export default ConcertsTable;