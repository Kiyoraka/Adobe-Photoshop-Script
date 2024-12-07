// @target photoshop
// Bulk Process Images to PNG-8 Script

// Enable double clicking from Explorer/Finder
#target photoshop

// Set to ruler units to pixels
app.preferences.rulerUnits = Units.PIXELS;

// Function to process a single file
function processFile(inputFile, outputFolder) {
    // Open the document
    var doc = open(inputFile);
    
    // Create export options
    var exportOptions = new ExportOptionsSaveForWeb();
    exportOptions.format = SaveDocumentType.PNG;
    exportOptions.PNG8 = true; // Enable 8-bit PNG
    exportOptions.transparency = true;
    exportOptions.interlaced = false;
    exportOptions.colors = 256; // Maximum colors for PNG-8
    exportOptions.dither = Dither.DIFFUSION; // Use diffusion dithering
    exportOptions.ditherAmount = 100;
    exportOptions.quality = 60;
    
    // Create output file path
    var outputPath = outputFolder + "/" + inputFile.name.replace(/\.[^\.]+$/, '') + "_8bit.png";
    
    // Export the file
    doc.exportDocument(File(outputPath), ExportType.SAVEFORWEB, exportOptions);
    
    // Close the document without saving changes
    doc.close(SaveOptions.DONOTSAVECHANGES);
}

// Main function to handle folder processing
function processFolder() {
    // Prompt user to select input folder
    var inputFolder = Folder.selectDialog("Select folder with images to process");
    if (!inputFolder) return;
    
    // Prompt user to select output folder
    var outputFolder = Folder.selectDialog("Select output folder for processed images");
    if (!outputFolder) return;
    
    // Get all files in the input folder
    var files = inputFolder.getFiles(/\.(jpg|jpeg|png|tif|psd|gif)$/i);
    
    // Process each file
    for (var i = 0; i < files.length; i++) {
        try {
            processFile(files[i], outputFolder);
        } catch(e) {
            alert("Error processing " + files[i].name + ": " + e);
        }
    }
    
    alert("Processing complete!\nProcessed " + files.length + " files.");
}

// Run the script
try {
    processFolder();
} catch(e) {
    alert("An error occurred: " + e);
}