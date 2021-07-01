export default (name: string): string => {
    return `import React, { useState } from 'react';
//import { useStateValue } from 'StateProvider';
import styles from './${name}.styles';

interface ${name}Props {
    title?: string
}

const ${name}: React.FC<${name}Props> = ({ title = 'default value in here' }) => {

    //const [globalState, setGlobalState] = useStateValue();
    const [showTitle,] = useState<boolean>(true);
    
    return (
        <div css={styles}>
            {showTitle && (
                <p className="">{title}</p>
            )}
        </div>
    );    
};

export default ${name};`;
};
