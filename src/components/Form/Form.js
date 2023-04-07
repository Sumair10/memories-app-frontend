import React, { useState ,useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch , useSelector } from 'react-redux'
import { createPost ,updatePost } from "../../actions/posts";

// GET CURRENT ID OF POST

const Form = ({currentId , setCurrentId}) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find(p =>p._id === currentId) : null);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
   if(post) setPostData(post)
   console.log({post})
  }, [post])
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId){

      dispatch(updatePost( currentId, postData));
    }
    else{
      dispatch(createPost(postData));
    }


  clear()
  };
  const clear =()=>{
    setCurrentId(null)
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  }

  return (
    <Paper sx={{padding:4}}>
      <form
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField
        sx={{
          marginTop:2
        }}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          sx={{
            marginTop:2
          }}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={{
            marginTop:2
          }}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          sx={{
            marginTop:2
          }}
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div style={{ width: "97%", margin: "10px 0" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>

        <Button
          sx={{ marginBottom: 1 }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >Submit</Button>
         <Button
         
          variant="contained"
          color="error"
          size="small"
          onClick={clear}
          fullWidth
        >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
