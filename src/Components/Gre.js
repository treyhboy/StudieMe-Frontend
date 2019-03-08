import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92%;
  width: 100%;
`;
const InputParent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  height: 60%;
  width: 35%; 
  border: solid 1px #f8f8f8;
  border-radius: 1rem;
  background-color: white;
`;
const Input = styled.input`
  height: 5rem;
  width: 50%;
  border: none;
  display:${props=>props.display2||"flex"}
  outline: none;
  font-size: 2rem;
  border-bottom: solid 1px gray;
  color: gray;
`;
const EnterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 14rem;
  color: white;
  font-weight: 200;
  background-color: #24d89b;
  border: solid 1px #24d89b;
  &:hover {
    background-color: white;
    color: #24d89b;
  }
  font-size: 1.8rem;
  border-radius: 3rem;
`;

const InputFile = styled.input`
      font-family:lato;
      width: 1px;
      height: 1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;

      & + label {
      border-radius:1rem;
      max-width: 100%;
      font-size: 2rem;
      /* 20px */
      font-weight: 200;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      padding: .8rem 5.5rem;
      /* 10px 20px */
      color: #24D89B;
      border: 2px solid currentColor;
      }

      & + label svg {
              width: 1em;
              height: 1em;
              vertical-align: middle;
              fill: currentColor;
              margin-top: -0.25em;
              /* 4px */
              margin-right: 0.25em;
              /* 4px */
          }

  }
`
;

const InputCatagory = styled.select`
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 50%;
  color: gray;
  display:${props=>props.display||"flex"}
box-shadow: none;
border: none;
border-bottom: solid 1px gray;
background-color: transparent;
outline: none;

@media(max-width: 800px){
margin:1rem 0px;
}
`;
class Gre extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedFile: null,
            loaded: 0,
            text: "",
            degree:"Select Degree",
            display:"none",
            display2:"none",
            category:"",
            placeholder:""
        };
        this.handleDeg = this.handleDeg.bind(this)

    }


  componentDidMount() {
    (function(e, t, n) {
      var r = e.querySelectorAll("html")[0];
      r.className = r.className.replace(/(^|\s)no-js(\s|$)/, "$1js$2");
    })(document, window, 0);

    (function(document, window, index) {
      var inputs = document.querySelectorAll(".inputfile");
      Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
          labelVal = label.innerHTML;

        input.addEventListener("change", function(e) {
          var fileName = "";
          if (this.files && this.files.length > 1)
            fileName = (
              this.getAttribute("data-multiple-caption") || ""
            ).replace("{count}", this.files.length);
          else fileName = e.target.value.split("\\").pop();

          if (fileName) label.querySelector("span").innerHTML = fileName;
          else label.innerHTML = labelVal;
        });

        input.addEventListener("focus", function() {
          input.classList.add("has-focus");
        });
        input.addEventListener("blur", function() {
          input.classList.remove("has-focus");
        });
      });
    })(document, window, 0);
  }

  handleDeg = event => {
      console.log(event.target.value)
      if(event.target.value==="M Tech")
      {
          this.setState({degree:event.target.value,display:"flex",display2:"flex",placeholder:"Enter Gate Score"})
      }
      else if(event.target.value==="MSc(Australia)")
      {
          this.setState({degree:event.target.value,display:"none",display2:"none",placeholder:""})
      }
      else
      {
          this.setState({degree:event.target.value,display:"none",display2:"flex",placeholder:"Enter Gre Score"})
      }
      this.props.changeMode(event.target.value)
      console.log(this.state)

  }

  render() {
    return (
      <Content>
        <InputParent>
                <InputCatagory placeholder={"Select Degree"} value={this.state.degree} id={"Deg"} onChange={this.handleDeg}>
                    <option value={"Select Degree"}>Select Degree</option>
                    <option value={"M Tech"}>M Tech</option>
                    <option value={"MSc(Australia)"}>MSc(Australia)</option>
                    <option value={"MSc(USA)"}>MSc(USA)</option>
                </InputCatagory>
          <Input
            placeholder={this.state.placeholder}
            value={this.props.gre}
            onChange={this.props.handlegre}
            display2={this.state.display2}
          />
            <InputCatagory placeholder={"Select Category"} value={this.props.category} id={"Cat"} onChange={this.props.handleCat} display={this.state.display}>
                <option value={"Select Category"}>Select Category</option>
                <option value={"General"}>General</option>
                <option value={"ST"}>ST</option>
                <option value={"SC"}>SC</option>
                <option value={"OBC"}>OBC</option>
                <option value={"Gen-PwD"}>PWD</option>
            </InputCatagory>
            <InputFile
                type="file"
                id="file-2"
                className="inputfile inputfile-2"
                onChange={this.props.handleselectedFile}
            />
            <label htmlFor="file-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                >
                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>
                <span>Choose a file&hellip;</span>
            </label>
          <EnterButton onClick={this.props.handleclick}>Send</EnterButton>
        </InputParent>
      </Content>
    );
  }
}

export default Gre;

// const express = require("express");
// const app = express();
// const upload = require("express-fileupload");
// const extract = require("pdf-text-extract");
// const path = require("path");
// const cors = require("cors");

// app.use(cors());
// app.use(upload());

// app.post("/upload", (req, res) => {
//   if (req.files) {
//     console.log(req.files);
//     let file = req.files.file;
//     let filename = req.files.file.name;
//     file.mv("./upload/" + filename, err => {
//       if (err) {
//         console.log("err", err);
//         res.send("error occured", err);
//       } else {
//         console.log("Done!");
//         console.log("file", file);
//         console.log("filename", filename);
//         let filePath = path.join(__dirname, "upload/" + filename);
//         extract(filePath, { splitPages: false }, function(err, text) {
//           if (err) {
//             console.dir(err);
//             return;
//           }
//           console.dir(text);
//           res.send(text);
//         });
//       }
//     });
//   }
// });

// app.listen(5000, () => {
//   console.log("listening on 5000");
// });

// handleUpload = () => {
//     const data = new FormData();
//     data.append("file", this.state.selectedFile, this.state.selectedFile.name);
//     axios
//         .post("http://localhost:5000/upload", data, {
//             onUploadProgress: ProgressEvent => {
//                 this.setState({
//                     loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
//                 });
//             }
//         })
//         .then(res => {
//             window.console.log(res.data[0]);
//             this.setState({ text: res.data[0] });
//         });
// };
