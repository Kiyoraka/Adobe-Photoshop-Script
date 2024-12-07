# Photoshop Bulk PNG-8 Processing Script

A Photoshop script for batch processing images to optimized PNG-8 format with smaller file sizes. This script automates the process of converting multiple images to 8-bit PNG format while maintaining quality and optimizing for file size.

## Features

- Bulk processing of multiple image files
- Converts to PNG-8 (8-bit) format
- Maintains transparency
- Uses diffusion dithering for better quality
- Optimizes for smaller file sizes
- Supports multiple input formats (JPG, JPEG, PNG, TIF, PSD, GIF)
- Adds "_8bit" suffix to processed files

## Requirements

- Adobe Photoshop (Tested on CS6 and later versions)
- Supported input image formats:
  - JPEG (.jpg, .jpeg)
  - PNG (.png)
  - TIFF (.tif)
  - PSD (.psd)
  - GIF (.gif)

## Installation

1. Download the `Bulk_PNG8_Export.jsx` script
2. Place the script in one of these locations:
   - Windows: `C:\Program Files\Adobe\Adobe Photoshop [Version]\Presets\Scripts\`
   - macOS: `/Applications/Adobe Photoshop [Version]/Presets/Scripts/`
   
   Or keep it in any accessible folder on your computer

## Usage

### Method 1: From Photoshop Menu

1. Open Adobe Photoshop
2. Go to `File > Scripts > Browse`
3. Navigate to and select `Bulk_PNG8_Export.jsx`
4. Select your input folder when prompted
5. Select your output folder when prompted
6. Wait for processing to complete

### Method 2: Double-Click Script

1. Locate the script file in Explorer (Windows) or Finder (macOS)
2. Double-click the script file
3. Select your input folder when prompted
4. Select your output folder when prompted
5. Wait for processing to complete

## Script Settings

The script uses the following optimization settings:

```javascript
Format: PNG-8 (8-bit)
Colors: 256 maximum
Dithering: Diffusion
Dither Amount: 100%
Transparency: Enabled
Quality: 60%
Interlacing: Disabled
```

## Output

- Processed files will be saved in your selected output folder
- Original files remain unchanged
- Naming convention: `originalfilename_8bit.png`
- Files maintain original dimensions

## Error Handling

- The script includes error handling for individual files
- If an error occurs with one file, the script continues processing other files
- Error messages will alert you to any problems

## Best Practices

1. **Backup**: Always keep backups of your original files
2. **Organization**: Keep input files in a dedicated folder
3. **Testing**: Test with a few images first before processing large batches
4. **File Types**: While the script supports multiple formats, best results are typically achieved with:
   - Photos originally in JPEG format
   - Graphics with transparency in PNG format

## Troubleshooting

### Common Issues and Solutions

1. **Script Won't Run**
   - Ensure Photoshop has permission to run scripts
   - Check that the script file has .jsx extension
   - Try running Photoshop as administrator

2. **Processing Takes Too Long**
   - Reduce the number of files processed at once
   - Close other applications
   - Ensure adequate free disk space

3. **Output Files Too Large/Small**
   - Adjust the quality setting in the script
   - Modify the number of colors (default 256)

## Customization

To modify script settings, open the script in a text editor and adjust these values:

```javascript
exportOptions.colors = 256; // Adjust number of colors
exportOptions.ditherAmount = 100; // Adjust dither amount
exportOptions.quality = 60; // Adjust quality
```

## Contributing

Feel free to fork this script and modify it for your needs. If you make improvements, consider sharing them back to the community.

## License

This script is provided as-is under the MIT License. Feel free to use and modify for both personal and commercial projects.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review script settings
3. Test with a small batch of files first

## Version History

- 1.0.0 (2024-03-07): Initial release
  - Basic PNG-8 conversion
  - Bulk processing
  - Error handling