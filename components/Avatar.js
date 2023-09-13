import React, { useState } from 'react';
import { getEditorDefaults } from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';
import "@pqina/pintura/pintura.css";


import {
    createDefaultImageReader,
    createDefaultImageWriter,
    createDefaultShapePreprocessor,
  
    setPlugins,
    plugin_crop,
    plugin_finetune,
    plugin_finetune_defaults,
    plugin_filter,
    plugin_filter_defaults,
    plugin_annotate,
    markup_editor_defaults,
  } from "@pqina/pintura";

import {
    LocaleCore,
    LocaleCrop,
    LocaleFinetune,
    LocaleFilter,
    LocaleAnnotate,
    LocaleMarkupEditor,
  } from "@pqina/pintura/locale/en_GB";

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);


const editorDefaults = {
    utils: ["crop", "finetune", "filter", "annotate"],
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter(),
    shapePreprocessor: createDefaultShapePreprocessor(),
    ...plugin_finetune_defaults,
    ...plugin_filter_defaults,
    ...markup_editor_defaults,
    locale: {
        ...LocaleCore,
        ...LocaleCrop,
        ...LocaleFinetune,
        ...LocaleFilter,
        ...LocaleAnnotate,
        ...LocaleMarkupEditor,
    },
};

function PinturaImageWidget({ onChange }) {
    const [result, setResult] = useState("");
    const [selectedImage, setSelectedImage] = useState(null); 

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedImage(URL.createObjectURL(file));
        }
      };

    const handleImageProcessed = (resultURL) => {
        setResult(resultURL);
        onChange(resultURL);
      };
    
    return (
        <div>
            <p>Editor pintura</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            <div style={{ height: "70vh" }}>
                <PinturaEditor
                    {...editorDefaults}
                    src={selectedImage}
                    onLoad={(res) => console.log("load image", res)}
                    onProcess={({ dest }) => handleImageProcessed(URL.createObjectURL(dest))}
                    />
            </div>

            {!!result.length && (
                <p>
                    <img src={result} alt="" />
                </p>
            )}
        </div>
    );
}

export default PinturaImageWidget;
