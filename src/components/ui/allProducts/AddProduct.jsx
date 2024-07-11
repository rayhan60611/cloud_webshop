// import React from "react";

import { toast } from "react-toastify";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Textarea } from "../textarea";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const Form = event.target;
    const name = Form.name.value;
    const image = Form.image.value;
    const category = Form.category.value;
    const stock = Form.stock.value;
    const price = Form.price.value;
    const description = Form.description.value;
    const date = new Date().toISOString();

    const product = {
      name,
      image,
      category,
      stock,
      price,
      description,
      date,
    };

    console.log(product);

    // adding a Product to mongo db
    fetch("http://localhost:5000/products", {
      method: "POST", // method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.success(`${product.name} Addded Successfully`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          Form.reset();
        } else {
          toast.error(
            <div className="flex flex-col gap-1">
              {data?.error?.map((err, index) => (
                <p key={index}>
                  {index + 1} . {err}
                </p>
              ))}
            </div>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });

    console.log("form reset");
  };
  return (
    <form onSubmit={handleAddProduct}>
      <div className="container flex justify-center ">
        <div className=" flex flex-col gap-6 items-center p-8 rounded-xl my-12  shadow-lg hover:shadow-2xl duration-500 w-full md:w-2/4 h-full z-10">
          <img className="w-12 animate-pulse" src="/logtech-black.png" alt="" />
          <h1 className="font-bold text-3xl">Add Product</h1>
          <div className="grid w-full   gap-1.5">
            <Label htmlFor="nameId">Name</Label>
            <Input id="nameId" type="text" name="name" placeholder="Name" />
          </div>
          <div className="grid w-full   gap-1.5">
            <Label htmlFor="imageId">Picture</Label>
            <Input type="file" id="imageId" name="image" />
          </div>
          <div className="grid w-full   gap-1.5">
            <Label htmlFor="categoryId">Category</Label>
            <Input
              id="categoryId"
              type="text"
              name="category"
              placeholder="Category"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="stockId">Stock</Label>
            <Input
              id="stockId"
              type="number"
              name="stock"
              placeholder="Stock"
            />
          </div>
          <div className="grid w-full   gap-1.5">
            <Label htmlFor="priceId">Price</Label>
            <Input
              id="priceId"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="grid w-full   gap-1.5">
            <Label htmlFor="descriptionId">Description</Label>
            <Textarea
              id="descriptionId"
              name="description"
              placeholder="Type your message here."
            />
          </div>
          <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
};
export default AddProduct;
