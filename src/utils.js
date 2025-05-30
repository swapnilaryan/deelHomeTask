const getHeaderValue = (req, headerName) => {
    if (!req || !headerName || typeof headerName !== 'string') {
        return null;
    }
    const headerValue = req.get(headerName);
    return headerValue || null;
}

module.exports = {
    getHeaderValue,
}