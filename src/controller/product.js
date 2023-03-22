import Product from "../model/product";
import Joi from "joi";
import { json } from "express";
const productShema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string().required(),
  status: Joi.boolean(),
  quantity: Joi.number().required(),
});
const getAll = async (req, res) => {
  const data = await Product.find();
  try {
    if (data.length == 0) {
      return res.status(400).json({
        message: "Khong tim thay san pham nao",
      });
    } else {
      return res.json({
        message: "Thanh cong",
        data,
      });
    }
  } catch (error) {
    return res.status.json({
      message: error,
    });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findOne({ _id: id });
    if (!data) {
      return res.status(400).json({
        message: "Khong tim thay san pham nao",
      });
    } else {
      return res.json({
        message: "Thanh cong",
        data,
      });
    }
  } catch (error) {
    return res.status.json({
      message: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findOneAndRemove({ _id: id });
    if (data.length == 0) {
      return res.status(400).json({
        message: "Khong tim thay san pham nao",
      });
    } else {
      return res.json({
        message: "Thanh cong",
        data,
      });
    }
  } catch (error) {
    return res.status.json({
      message: error,
    });
  }
};

const addProduct = async (req, res) => {
  const body = req.body;
  const { error } = productShema.validate(body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].error,
    });
  }
  try {
    const data = await Product.create(body);
    if (!data) {
      return res.status(400).json({
        message: "them that bai",
      });
    } else {
      return res.json({
        message: "Thanh cong",
        data,
      });
    }
  } catch (error) {
    return res.status.json({
      message: error,
    });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const { error } = productShema.validate(body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].error,
    });
  }
  try {
    const data = await Product.findOneAndUpdate({ _id: id }, body);
    if (!data) {
      return res.status(400).json({
        message: "cap nhat that bai",
      });
    } else {
      return res.json({
        message: "Thanh cong",
        data,
      });
    }
  } catch (error) {
    return res.status.json({
      message: error,
    });
  }
};
export { getAll, getOne, updateProduct, deleteProduct, addProduct };
