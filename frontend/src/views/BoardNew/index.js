import React, { useContext } from "react";
import { AiFillCamera } from "react-icons/ai";
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import Axios from 'axios';


const { NewBoardContainer, Header, WriteContainer, WriteSubContainer, SubmitBtn, Column, Divider, ColumnTitle, SubmitBtnDisabled } = require('./styles')

export const BoardNew = ({ sendPost }) => {
    
    let depart = sessionStorage.getItem("depart")
    let why = sessionStorage.getItem("why")
    let time
    let time_index = sessionStorage.getItem("time")

    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState(depart);

    if (!depart) depart = 'None'
    if (!why) why = 'None'

    const [content, setContent] = React.useState(
    );
    const [article, setArticle] = React.useState([]);
    function sendPost() {
        Axios.post("http://localhost:3001/board", {
            title: title,
            content: content,
            category: category,
        }).then(() => {
            setArticle([
            ...article,
            {
                title: title,
                content: content,
                category: category,
            },
            ]);
        });
    };


    let button;
    const handleTitle = (event) => { setTitle(event.target.value); };
    const handleContent = (event) => { setContent(event.target.value); };
    const handleCategoryChange = (event) => { setCategory(event.target.value); };

    if (title == '' || category == '') button = <SubmitBtnDisabled>Submit</SubmitBtnDisabled>
    else button = <SubmitBtn onClick={() => sendPost(title, content, category)}>Submit</SubmitBtn >

    return (
        <NewBoardContainer>
            <Header>Post</Header>

            <WriteContainer>
                <ColumnTitle>
                    <TextField
                        fullWidth
                        defaultValue={title}
                        variant="standard"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitle}
                    />
                </ColumnTitle>
                <Divider />
                <FormControl sx={{ minWidth: 300, textAlign: "left", marginLeft: 2, marginRight: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        label="Select a category"
                        displayEmpty
                        onChange={handleCategoryChange}>
                        <MenuItem value={1}>Announcement</MenuItem>
                        <MenuItem value={2}>Report</MenuItem>
                        <MenuItem value={3}>Reference</MenuItem>
                    </Select>
                </FormControl>

                <WriteSubContainer>
                    {/* <Column>
                        <AiFillCamera style={{color: '#000', fontSize: '20px', alignItems:'left'}}></AiFillCamera>
                    </Column>

                    <Divider /> */}

                    <TextField
                        rows={20}
                        multiline
                        fullWidth
                        variant="standard"
                        placeholder="Write Contents..."
                        value={content}
                        onChange={handleContent}
                    />

                </WriteSubContainer>
                <Divider />
                {button}

            </WriteContainer>

        </NewBoardContainer>

    );
}