import React, {useState} from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Pagination from '../Pagination';
import {calculatePagination} from '../../utils/paginationUtils';

function SongsTable({ data, onEdit, itemsPerPage }) {

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
                    <th>Song ID</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Album</th>
                    <th>Featuring</th>
                    <th>Genres</th>
                    <th>Edit</th>
                </tr>
                </thead>

                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.songId}>
                        <td>{d.songId}</td>
                        <td>{d.songTitle}</td>
                        <td>{d.songDuration}</td>
                        <td>{d.albumTitle}</td>
                        <td>{d.featuredArtist}</td>
                        <td>{d.songGenres}</td>
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

export default SongsTable;