# Adobe Photoshop Scripts Collection

A collection of JSX scripts for Adobe Photoshop to automate various image processing tasks. These scripts are designed to enhance workflow efficiency and maintain consistency in image processing operations.

## 🎯 Features

Currently, this repository includes:

### Bulk Image Processing
- Convert and save multiple images to 8-bit format
- Optimize file sizes while maintaining quality
- Process large batches of images efficiently
- Preserve folder structure during batch processing

## 📋 Requirements

- Adobe Photoshop (Tested with versions CS6 and above)
- Basic knowledge of running scripts in Photoshop

## 🚀 Installation

1. Download the desired `.jsx` file from the repository
2. Place the script in your Photoshop Scripts folder:
   - Windows: `C:\Program Files\Adobe\Adobe Photoshop [Version]\Presets\Scripts`
   - macOS: `/Applications/Adobe Photoshop [Version]/Presets/Scripts`
3. Restart Photoshop
4. The script will appear in Photoshop under File > Scripts

## 📁 Repository Structure

```
├── README.md
├── bulk-image-processing/
│   ├── README.md              # Detailed documentation for bulk processing scripts
│   └── script.jsx    # Script for bulk converting images to 8-bit
```

## 💻 Usage

### Bulk Image Processing Script

1. Open Photoshop
2. Go to File > Scripts > convert-to-8bit
3. Select the source folder containing your images
4. Choose the destination folder for processed images
5. The script will process all images:
   - Convert to 8-bit color depth
   - Optimize file size
   - Save in the specified location

## ⚠️ Important Notes

- Always backup your original images before running any scripts
- The script processes the following image formats: JPG, JPEG, PNG, PSD
- Large batches of images may take some time to process depending on your system specifications

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## 📝 License

This project is open source

## 🔄 Updates

- Initial release: Bulk image processing script for 8-bit conversion

## 📞 Support

If you encounter any issues or have questions:
- Open an issue in the repository
- Provide detailed information about the problem
- Include your Photoshop version and operating system
