export const viewProduct = (req, res) => {
    res.send('This is product Route')
}


export const addProduct = (req,res)=>{
      const {productName, productPrice, productDesc} =  req.body;

      console.log(productName,productDesc,productPrice)
      res.send({
        productName, productPrice, productDesc
      });

}

export const deleteProduct = (req,res)=>{
   const {delId} = req.query
   console.log(delId)
   res.send({
    delId
   })
}
export const updateProduct = (req,res)=>{
   const {upId} = req.params
   console.log(upId)
   res.send({
    upId
   })
}

