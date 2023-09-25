const express = require("express");
const adminController = require("../Controllers/adminController");
const cartController = require("../Controllers/cartController");
const categoryController = require("../Controllers/categoryController");
const customerController = require("../Controllers/customerController");
const orderItemController = require("../Controllers/order_itemController");
const orderController = require("../Controllers/orderController");
const paymentController = require("../Controllers/paymentController");
const postController = require("../Controllers/postController");
const productController = require("../Controllers/productController");
const shipmentController = require("../Controllers/shipmentController");
const subAdminController = require("../Controllers/subAdminController");
const userController = require("../Controllers/userController");
const wishlistController = require("../Controllers/wishlistController");

const router = express.Router();

// admin routes
router.get("/admin/create", adminController.create);
router.get("/admin/read", adminController.read);
router.get("/admin/delete", adminController.delete);
router.get("/admin/update", adminController.update);

// cart routes
router.get("/cart/create", cartController.create);
router.get("/cart/read", cartController.read);
router.get("/cart/delete", cartController.delete);
router.get("/cart/update", cartController.update);

// category routes
router.get("/category/create", categoryController.create);
router.get("/category/read", categoryController.read);
router.get("/category/delete", categoryController.delete);
router.get("/category/update", categoryController.update);

// customer routes
router.get("/customer/create", customerController.create);
router.get("/customer/read", customerController.read);
router.get("/customer/delete", customerController.delete);
router.get("/customer/update", customerController.update);

// order_item routes
router.get("/order_item/create", orderItemController.create);
router.get("/order_item/read", orderItemController.read);
router.get("/order_item/delete", orderItemController.delete);
router.get("/order_item/update", orderItemController.update);

// order routes
router.get("/order/create", orderController.create);
router.get("/order/read", orderController.read);
router.get("/order/delete", orderController.delete);
router.get("/order/update", orderController.update);

// payment routes
router.get("/payment/create", paymentController.create);
router.get("/payment/read", paymentController.read);
router.get("/payment/delete", paymentController.delete);
router.get("/payment/update", paymentController.update);

// post routes
router.get("/post/create", postController.create);
router.get("/post/read", postController.read);
router.get("/post/delete", postController.delete);
router.get("/post/update", postController.update);

// product routes
router.get("/product/create", productController.create);
router.get("/product/read", productController.read);
router.get("/product/delete", productController.delete);
router.get("/product/update", productController.update);

// shipment routes
router.get("/shipment/create", shipmentController.create);
router.get("/shipment/read", shipmentController.read);
router.get("/shipment/delete", shipmentController.delete);
router.get("/shipment/update", shipmentController.update);

// sub_admin routes
router.get("/sub_admin/create", subAdminController.create);
router.get("/sub_admin/read", subAdminController.read);
router.get("/sub_admin/delete", subAdminController.delete);
router.get("/sub_admin/update", subAdminController.update);

// user routes
router.get("/user/create", userController.create);
router.get("/user/read", userController.read);
router.get("/user/delete", userController.delete);
router.get("/user/update", userController.update);

// wishlist routes
router.get("/wishlist/create", wishlistController.create);
router.get("/wishlist/read", wishlistController.read);
router.get("/wishlist/delete", wishlistController.delete);
router.get("/wishlist/update", wishlistController.update);

module.exports = router;
