import React, {useState} from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Pagination from '../Pagination';
import {calculatePagination} from '../../utils/paginationUtils';

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    }
    return text;
}

function LyricsTable({data, onEdit, itemsPerPage}) {

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
                    <th>Lyric ID</th>
                    <th>Song ID</th>
                    <th>Lyrics</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((d) => (
                    <tr key={d.lyricId}>
                        <td>{d.lyricId}</td>
                        <td>{d.songTitle}</td>
                        <td style={{whiteSpace: 'pre-line'}}>{truncateText(d.lyricsText, 100)}</td>
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

export default LyricsTable;