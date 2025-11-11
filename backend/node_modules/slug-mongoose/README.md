# slug-mongoose

**slug-mongoose** is a versatile npm package that simplifies the process of adding slug functionality to your Mongoose schemas. This package seamlessly integrates with Mongoose models, enabling you to automatically generate slugs based on specified fields while ensuring their uniqueness. By effortlessly handling slug creation and management, **slug-mongoose** streamlines URL-friendly naming for your MongoDB documents, enhancing the readability and searchability of your applications.

## Installation

To get started, install the **slug-mongoose** package via npm:

```bash
npm install slug-mongoose
```

## Usage

To use **slug-mongoose**, import the package:

```javascript
const slugMongoose = require("slug-mongoose");
```

Apply the **slug-mongoose** plugin to your Mongoose schema:

```javascript
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String, // Example field to generate slug from
});

schema.plugin(slugMongoose, {
  field: "title", // Field to generate the slug from
  slugField: "slug", // Field to store the generated slug
});

const Model = mongoose.model("Model", schema);
```

When you create and save documents using the Model, the slug field will be automatically generated:

```javascript
const instance = new Model({ title: "Sample Title" });
instance.save();

/**
 * Object Created
 * {
 *      "_id": "64dba901cced64bf4a950e50",
 *      "title": "Sample Title",
 *      "slug": "sample-title",
 *      "__v": 0
 * }
 */
```

Retrieve documents using the generated slug:

```javascript
const foundInstance = await Model.findBySlug("sample-title");
```

## Options

The **slug-mongoose** plugin accepts the following options:

- field: The field to generate the slug from (default: "name").
- slugField: The field to store the generated slug (default: "slug").

## Compatibility

**slug-mongoose** supports both CommonJS and ES Modules environments and latest mongoose versions, making it easy to integrate with your projects.

## License

This project is licensed under the MIT License.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the [GitHub repository](https://github.com/PeterEst/slug-mongoose). Contributions are also welcome!
