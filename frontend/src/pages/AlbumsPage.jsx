import React, { useEffect, useState } from 'react';
import AlbumsTable from '../components/albums/AlbumsTable';
// import AlbumAddForm from '../components/albums/AlbumAddForm';
// import AlbumDeleteForm from '../components/albums/AlbumDeleteForm';
// import AlbumUpdateForm from '../components/albums/AlbumUpdateForm';
// import Modal from '../components/Modal';
import Axios from 'axios';

// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function AlbumsPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // set state variables for modal components
    // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(false);

    // send a GET request to view all Items
    const getAlbums = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/albums');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getAlbums();
    }, [])

    // open the edit modal with the selected Item
    // const openEditModal = (item) => {
    //     setSelectedItem(item);
    //     setIsEditModalOpen(true);
    // }

    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Albums</h2>
                    </div>

                    <div className="card-header-right">
                        {/*<button*/}
                        {/*    className="add-icon"*/}
                        {/*    onClick={() => setIsAddModalOpen(true)}>*/}
                        {/*    <AddOutlinedIcon />ADD*/}
                        {/*</button>*/}
                        {/*<button*/}
                        {/*    className="delete-icon"*/}
                        {/*    onClick={() => setIsDeleteModalOpen(true)}>*/}
                        {/*    <DeleteOutlineOutlinedIcon />DELETE*/}
                        {/*</button>*/}
                    </div>

                </div>

                <AlbumsTable data={data}/>

                {/*<ItemTable data={data} onEdit={openEditModal} />*/}
            </div>

            {/*<Modal*/}
            {/*    isOpen={isAddModalOpen}*/}
            {/*    onClose={() => setIsAddModalOpen(false)}>*/}
            {/*    <ItemAddForm*/}
            {/*        onAdd={() => { getItems(); setIsAddModalOpen(false); }} />*/}
            {/*</Modal>*/}

            {/*<Modal*/}
            {/*    isOpen={isDeleteModalOpen}*/}
            {/*    onClose={() => setIsDeleteModalOpen(false)}>*/}
            {/*    <ItemDeleteForm*/}
            {/*        data={data}*/}
            {/*        onDelete={() => { getItems(); setIsDeleteModalOpen(false); }} />*/}
            {/*</Modal>*/}

            {/*<Modal*/}
            {/*    isOpen={isEditModalOpen}*/}
            {/*    onClose={() => setIsEditModalOpen(false)}>*/}
            {/*    <ItemUpdateForm*/}
            {/*        selectedItem={selectedItem}*/}
            {/*        onUpdate={() => { getItems(); setIsEditModalOpen(false); }} />*/}
            {/*</Modal>*/}

        </div>
    );
}

export default AlbumsPage;