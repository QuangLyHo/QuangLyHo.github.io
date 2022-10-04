import React from "react"
import Reactmde from "react-mde"
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css"


export default function Editer({currentNote, updateNote}) {
    const [selectedTab, setSelectedTab] = React.useState('write')

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    })
    
    return (
        <section className="pane editer">
            <Reactmde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) => 
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={90}
                heightUnits="vh"
            />
        </section>
    )
}