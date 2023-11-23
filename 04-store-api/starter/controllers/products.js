const getAllProductsStatic = async (req, res) => {
    throw newtesting 
    res.status(200).json({ msg: 'product testing routes' })
}
const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products route' })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}