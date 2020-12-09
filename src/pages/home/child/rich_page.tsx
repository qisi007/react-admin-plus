

import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

export default function () {

    const [ editorState, seteditorState ] = useState( BraftEditor.createEditorState(null) )

    return(
        <>
            <BraftEditor value = {editorState}
                         className="rich-box"
                         onChange={(e) => seteditorState(e)}>
            </BraftEditor>
        </>
    )
}