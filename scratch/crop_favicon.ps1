Add-Type -AssemblyName System.Drawing
$inputFile = "c:\HOME LOCAL\PROYECTOS\Antigravity\proyectos\assets\img\logo\logo_oscuro.png"
$outputFile = "c:\HOME LOCAL\PROYECTOS\Antigravity\proyectos\assets\img\logo\favicon_square.png"

$img = [System.Drawing.Image]::FromFile($inputFile)
$bmp = New-Object System.Drawing.Bitmap 1890, 1890
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0, [System.Drawing.Rectangle]::new(0, 0, 1890, 1890), [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$img.Dispose()
$bmp.Dispose()
Write-Host "Favicon cropped successfully!"
