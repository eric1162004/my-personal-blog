import React, { Component } from 'react'
import { CirclePicker  } from 'react-color';

class TextEditor extends Component {
    state = {
        content:'',
        fontColor: '',
        fontSize: 1,
        colorPickerDisplay: false,
        fontSizePickerDisplay: false,
        colorSelection: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", '#000000', '#FFFFFF'],
    }

    iFrameOn = (e) => {
        e.target.contentWindow.document.designMode = 'On';

        const TextEditorBody = document.querySelector('#richTextField').contentWindow.document.body;

        document.getElementById("richTextField").contentWindow.document.body.innerHTML = '<span style="font-size:20px;">Add Content Here...</span>';

        TextEditorBody.addEventListener('input', ()=>{
            const content = TextEditorBody.innerHTML;
            this.props.handleEditorInput(content);
        })
    }

    iBold = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('bold', false, null);
    }
    iUnderline = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('underline', false, null);
    }
    iItalic = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('italic', false, null);
    }
    insertOrderedList = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('insertOrderedList', false, null);
    }
    insertUnorderedList = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('insertUnorderedList', false, null);
    }
    justifyCenter = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('justifyCenter', false, null);
    }
    justifyLeft = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('justifyLeft', false, null);
    }
    justifyRight = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('justifyRight', false, null);
    }
    selectAll = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('selectAll', false, null);
    }
    strikethrough = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('strikethrough', false, null);
    }
    subscript = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('subscript', false, null);
    }
    superscript = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('superscript', false, null);
    }
    undo = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('undo', false, null);
    }
    createLink = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('createLink', false, null);
    }
    insertHorizontalRule = (e) => {
        e.preventDefault();
        document.querySelector('#richTextField').contentWindow.document.execCommand('insertHorizontalRule', false, null);
    }
    foreColor = () => {
        const colorValue = this.state.fontColor;
        document.querySelector('#richTextField').contentWindow.document.execCommand('foreColor', false, colorValue);
    }
    fontSize = () => {
        const fontSize = this.state.fontSize;
        document.querySelector('#richTextField').contentWindow.document.execCommand('fontSize', false, fontSize);
    }

    setFontSize = (e) =>{
        e.preventDefault();

        const fontSize = e.target.value;

        this.setState({
            ...this.state,
            fontSize,
        }, this.fontSize);
    }

    toggleFontColorBtn = (e) =>{
        e.preventDefault();
        
        this.setState({
            ...this.state,
            colorPickerDisplay: !this.state.colorPickerDisplay,
        }, ()=>{
            this.state.colorPickerDisplay ? (
                document.querySelector('.circlePicker').style.display = 'block'
            ): (
                document.querySelector('.circlePicker').style.display = 'none'
            )
        })
    }

    handleChangeComplete = (color) => {
        this.setState({ 
            ...this.state,
            fontColor: color.hex 
        }, this.foreColor);
    };    

    toggleFontSizeBtn = (e) =>{
        e.preventDefault();
        
        this.setState({
            ...this.state,
            fontSizePickerDisplay: !this.state.fontSizePickerDisplay,
        }, ()=>{
            this.state.fontSizePickerDisplay ? (
                document.querySelector('.fontSizePicker').style.display = 'block'
            ): (
                document.querySelector('.fontSizePicker').style.display = 'none'
            )
        })
    }

    fontSizeSelection = ()=>{
        const numbers = [1, 2, 3, 4, 5, 6, 7];

        const listItems = numbers.map((number) =>
          <button onClick={(e)=>this.setFontSize(e)} value={number} key={number}>{number}</button>
        );

        return listItems;
    }

    render() {
        return (
            <div className='text-editor'>
                    <div id='select-bar'>
                        <button onClick={(e)=>this.iBold(e)} ><i className="material-icons">format_bold</i></button>
                        <button onClick={(e)=>this.iUnderline(e)}><i className="material-icons">format_underlined</i></button>
                        <button onClick={(e)=>this.iItalic(e)}><i className="material-icons">format_italic</i></button>
                        <button onClick={(e)=>this.strikethrough(e)}><i className="material-icons">format_strikethrough</i></button>
                        <button onClick={(e)=>this.insertUnorderedList(e)}><i className="material-icons">format_list_bulleted</i></button>
                        <button onClick={(e)=>this.insertOrderedList(e)}><i className="material-icons">format_list_numbered</i></button>
                        <button onClick={(e)=>this.justifyLeft(e)}><i className="material-icons">format_align_left</i></button>
                        <button onClick={(e)=>this.justifyCenter(e)}><i className="material-icons">format_align_center</i></button>
                        <button onClick={(e)=>this.justifyRight(e)}><i className="material-icons">format_align_right</i></button>
                        <button onClick={(e)=>this.selectAll(e)}><i className="material-icons">select_all</i></button>
                        <button onClick={(e)=>this.undo(e)}><i className="material-icons">undo</i></button>
                        <button onClick={(e)=>this.createLink(e)}><i className="material-icons">link</i></button>
                        <button onClick={(e)=>this.insertHorizontalRule(e)}><i className="material-icons">border_horizontal</i></button>
                        <button className='fa-btn' onClick={(e)=>this.subscript(e)}><i className="fas fa-subscript"></i></button>
                        <button className='fa-btn' onClick={(e)=>this.superscript(e)}><i className="fas fa-superscript"></i></button>
                        <button onClick={(e)=>this.toggleFontColorBtn(e)}><i className="material-icons">format_color_text</i></button>
                        <button onClick={(e)=>{this.toggleFontSizeBtn(e)}}><i className="material-icons">format_size</i></button>
                        
                        <div className='circlePicker' style={{display:'none'}}>
                            <p>Pick Font Color</p>
                            <CirclePicker  width='100%' color={ this.state.background }
                            onChangeComplete={ this.handleChangeComplete }
                            colors={this.state.colorSelection}/>
                        </div>

                        <div className='fontSizePicker' style={{display:'none'}}>
                            <p>Pick Font Size</p>
                            <div>
                                {this.fontSizeSelection()}
                            </div>
                        </div>


                    </div><br/>

                    <iframe id='richTextField' title='richTextField' onLoad={(e)=> this.iFrameOn(e)} src="" style={{border: '1px solid grey', height:'200px', width:'100%'}}>
                    </iframe>
            </div>
        )
    }
}

export default TextEditor 