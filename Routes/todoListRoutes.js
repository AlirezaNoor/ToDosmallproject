const express=require("express");
const Router=express.Router();
const Controller=require("../Controller/listtodos");



Router.get("/",Controller.listcontroler);

module.exports=Router