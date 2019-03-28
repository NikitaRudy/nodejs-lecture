const path = require('path');

exports.createDirTemplate = function (dir, requestedUrl) {
    return `
        <div>
            <h4>Directory ${requestedUrl}</h4>
            <ul>
                ${dir.map(file => {
                    const filePath = path.join(requestedUrl, file);
                    const fileUrl = path.relative(__dirname, filePath);
                    return `
                        <li>
                            <a href="${fileUrl}">${file}</a>
                        </li>
                    `
                })}
            </ul>
        </div>
    `
}