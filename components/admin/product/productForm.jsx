import React, { useState, useEffect, useMemo } from "react";
import {
  getDocuments,
  antdFieldValidation,
} from "../../../functions/firebase/getData";
import {
  Button,
  Form,
  Upload,
  message,
  Input,
  Select,
  Switch,
  InputNumber,
  Checkbox,
} from "antd";
const { TextArea } = Input;

import Image from "next/image";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ direction: "rtl" }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const RecipeForm = ({
  onFinish,
  initialValues,
  files,
  setFiles,

  isupdate = false,
  videoFile,
  setVideoFile,
}) => {
  const [images, setImages] = useState(initialValues?.images || []);

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const cats = [
    { id: 1, title: "men" },

    { id: 2, title: "women" },

    { id: 3, title: "children" },
  ];

  console.log("value-->", initialValues);

  return (
    <div className=" w-[80%] mx-auto mt-24 ">
      <div className=" w-full md:w-[70%] border-2 py-6 px-6">
        <Form
          layout="vertical"
          // onFinish same as submit normal form
          onFinish={(values) =>
            // name of our function
            onFinish({
              ...values,
              images,
            })
          }
          initialValues={{
            title: initialValues?.title || "",

            desc: initialValues?.desc || "",
            price: initialValues?.price || 0,
            category: initialValues?.category  || "",
          }}
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your title",
              },
            ]}
            name="title"
            label="Title "
          >
            <Input className="py-2" />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your price",
              },
            ]}
            name="price"
            label="Product price"
          >
            <Input className="py-2" />
          </Form.Item>

          <Form.Item name="category" label="category">
            <Select placeholder="Select Category">
              {cats?.map((category) => {
                return (
                  <Select.Option key={category?.id} value={category?.title}>
                    {category?.title}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

      

          <div>
            <Form.Item
              label="Description"
              name="desc"
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              {/* <textarea rows={5}></textarea> */}

              <ReactQuill
                modules={modules}
                theme="snow"
                className=" pb-[10px] mb-4  lg:!h-[300px]  text-black font-medium rounded-md
                border-teal-400 hover:border-blue-600"
              />
            </Form.Item>
          </div>

          {/* -----images upload----- */}

          <div>
            <Upload
              accept="image/*"
              multiple
              // files is data of images will be uploaded to firebase/storage
              beforeUpload={(file) => {
                setFiles((prev) => [...prev, file]);
                return false;
              }}
              listType="picture-card"
              onRemove={(file) => {
                console.log("fileDATA", file);
                setFiles((prev) => {
                  const index = prev.indexOf(file);
                  const newFileList = prev.slice();
                  newFileList.splice(index, 1);
                  return newFileList;
                });

                console.log("files", files);
              }}
            >
              Upload Images
            </Upload>
          </div>

          {/* -----show product images {update product} ---- */}

          <div className="flex flex-wrap gap-3 mt-2 ">
            {images?.map((data, index) => (
              <div key={index}>
                <img src={data} className="w-20 h-20 rounded-full " />
                <h1
                  onClick={() => {
                    // prev all previous images
                    setImages((prev) => {
                      // all images put into new array
                      const temp = [...prev];
                      // delete  image with clicked index
                      temp.splice(index, 1);
                      // return this new array after delete clicked image
                      return temp;
                    });
                  }}
                  className="text-center cursor-pointer text-red-600"
                >
                  remove
                </h1>
              </div>
            ))}
          </div>

          <div className=" ">
            <Button
              className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
              type="primary"
              htmlType="submit"
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RecipeForm;
