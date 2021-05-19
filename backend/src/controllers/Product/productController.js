const Product = require('../../models/productModel');

const CreateProduct = function(req, res, next){
    const product = new Product(req.body);
    product.save(function(err, Productlist){
        if (err){
            console.log(err);
        }
        res.json({
            messsage: 'Create product successfully!',
            Productlist
        })
    })
}

const SelectAllProduct = function(req, res, next){
    Product.find(function(err, ProductList){
        if (err){
            console.log(err);
        }
        res.json(ProductList)
    })
}

const SelectProduct = function(req, res, next){
    Product.findById(req.params.id, function(err, ProductList){
        if (err){
            console.log(err);
        }
        res.json(ProductList)
    })
}
const UpdateProduct = function(req, res, next){
    var data = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        img: req.body.img,
        size: req.body.size,
        color: req.body.color
    }
    Product.findByIdAndUpdate(req.params.id, data, function(err){
        if (err){
            return next(err);
        }
        res.json({
            messsage: 'Update product successfully!',
            data
        })
    })
}

const DeleteProduct = function(req, res, next){
    Product.findByIdAndRemove(req.params.id, function(err){
        const id = req.params.id;
        if (err){
            console.log(err);
        }
        res.json({
            messsage: 'Delete product successfully!',
            id
        })
    });
}

module.exports = {
    CreateProduct,
    SelectAllProduct,
    SelectProduct,
    UpdateProduct,
    DeleteProduct
}