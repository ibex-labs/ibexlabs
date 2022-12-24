
import React, { useEffect } from "react";
import Prism from "prismjs";

interface Props {
    code: any
    language: string
}

const CodeBlock = ({ code, language }: Props) => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <React.Fragment>
            <pre>
              <code children={code} className={`language-${language}`} />
            </pre>
        </React.Fragment>

    );
};

export default CodeBlock;