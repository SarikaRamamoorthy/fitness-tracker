export const test = (req, res) => {
    res.status(200);
    res.json({
        message: 'Server is running good'
    })
}