import { ObjectId } from "mongodb";
import { db } from "../DB/connection.mjs";



export const addProduct = async (req, res) => {
   try {

      const { prodName, prodPrice, prodDesc } = req.body;

      await db.collection('products').insertOne({ prodName, prodPrice, prodDesc });
      res.send({
         message: "Product Added successfully!"
      })

   } catch (error) {
      console.log(error);
      res.send({ error })
   }
}


export const singleProduct = async (req, res) => {
   try {
      const { id } = req.params;
      const prodData = await db.collection('products').findOne({ _id: new ObjectId(id) });
      res.send(prodData)

   } catch (error) {
      console.log(error);
      res.send({ error })
   }
}
export const viewProduct = async (req, res) => {
   try {
      const prodData = await db.collection('products').find().toArray();
      res.send(prodData)

   } catch (error) {
      console.log(error);
      res.send({ error })
   }
}


export const deleteProduct = async (req, res) => {
   try {

      const { id } = req.params;

      await db.collection('products').deleteOne({ _id: new ObjectId(id) });
      res.send("Item Deleted Successfully")

   } catch (error) {
      console.log(error);
      res.send({ error })
   }
}

export const updateProduct = async (req, res) => {
   try {
      const { prodName, prodPrice, prodDesc } = req.body;
      const { id } = req.params;

      await db.collection('products').updateOne({ _id: new ObjectId(id) }, {
         $set: { prodName, prodPrice, prodDesc }
      });
      res.send("Item Updated Successfully")

   } catch (error) {
      console.log(error);
      res.send({ error })
   }
}