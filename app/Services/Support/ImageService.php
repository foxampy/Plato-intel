<?php

namespace App\Services\Support;


use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImageService
{
    /**
     * Обрезка изображения
     * @param $filePath
     * @param null $width
     * @param null $height
     * @return string
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public static function resize($filePath,
                                  $sizes = FALSE,
                                  $option = FALSE,
                                  $position = 'center',
                                  $mime = FALSE,
                                  $watermark = FALSE)
    {
        $storage = Storage::disk('public');

        if ($filePath && $storage->exists($filePath)) {
            $image = 'storage/' . $filePath;
        }
        else {
            $image = 'storage/upload/no-thumb.png';
        }


        $imageSizes = getimagesize($image);

        $widthImageOriginal = $imageSizes[0];
        $heightImageOriginal = $imageSizes[1];

        $widthResize = $sizes[0];
        $heightResize = $sizes[1];

        $width = $sizes[0];
        $height = $sizes[1];
        $canvas = Image::canvas($width, $height);



        if ($filePath && $storage->exists($filePath)) {

            $filePrefix = '';

            if ($width) {
                $filePrefix .= 'w' . $width . '_';
            }
            if ($height) {
                $filePrefix .= 'h' . $height . '_';
            }

            if (substr($filePath, 0, 1) == '/') {
                $filePath = substr($filePath, 1);
            }
            $fileAndFolder = explode('/', $filePath);

            $thumbFolder = 'thumb/' . $fileAndFolder[0];

            if (!$storage->exists($thumbFolder)) {
                $storage->makeDirectory($thumbFolder);
            }

            if ($mime && self::getMime($filePath) != $mime) {
                $thumbPath = $thumbFolder . '/'. $filePrefix . str_replace('.' . self::getMime($filePath), '.' . $mime, array_pop($fileAndFolder));
            }
            else {
                $thumbPath = $thumbFolder . '/'. $filePrefix . array_pop($fileAndFolder);
            }

            if ($storage->exists($thumbPath)) {
                return $storage->url($thumbPath);
            } else {

                $img = Image::make($image)->encode($mime, 75);
                $img = self::setImageSizes($img, $widthImageOriginal, $heightImageOriginal, $widthResize, $heightResize, $option, $position);


                if ($watermark) {
                    $img->save('storage/' . $thumbPath);
                    $img = self::setWatermark($widthResize, $heightResize, 'storage/' . $thumbPath);
                }
                $canvas->insert($img,'center');
                $canvas->save('storage/' . $thumbPath);

                return $storage->url($thumbPath);
            }

        }
        return env('APP_URL') . '/storage/upload/no-thumb.png';
    }


    public static function setImageSizes($img,
                                    $widthImageOriginal,
                                    $heightImageOriginal,
                                    $widthResize,
                                    $heightResize,
                                    $option,
                                    $position)
    {
        $aspectRatio = $widthImageOriginal / $heightImageOriginal;
        $aspectRatioRevert = $heightImageOriginal / $widthImageOriginal;
        $size = [];

        switch ($option) {
            case 'cut':
                if ($aspectRatio > 1) {
                    $size[0] = $widthResize;
                    $size[1] = ($heightImageOriginal < $heightResize) ? $heightImageOriginal : $heightResize;
                } else {
                    $size[1] = $heightResize;
                    $size[0] = ($widthImageOriginal < $widthResize) ? $widthImageOriginal : $widthResize;
                }
                $img->fit($size[0], $size[1], function ($constraint) {
                    $constraint->aspectRatio();
                }, $position);
                break;
            case 'h':
                $img->resize(null, $heightResize, function ($constraint) {
                    $constraint->aspectRatio();
                }, $position);
                break;
            case 'w':
                $img->resize($widthResize, null, function ($constraint) {
                    $constraint->aspectRatio();
                }, $position);
                break;
            case 'min':
                if ($aspectRatio < $aspectRatioRevert) {
                    $img->resize(null, $heightResize, function ($constraint) {
                        $constraint->aspectRatio();
                    }, $position);
                }
                else {
                    $img->resize($widthResize, null, function ($constraint) {
                        $constraint->aspectRatio();
                    }, $position);
                }
                break;
            case 'max':
                if ($aspectRatio > $aspectRatioRevert) {
                    $img->resize($widthResize, null, function ($constraint) {
                        $constraint->aspectRatio();
                    }, $position);
                }
                else {
                    $img->resize(null, $heightResize, function ($constraint) {
                        $constraint->aspectRatio();
                    }, $position);
                }
                break;
            default:
                $img->fit($widthResize, $heightResize, function ($constraint) {
                    $constraint->aspectRatio();
                }, $position);
                break;
        }
        return $img;
    }

    public static function getMime($filePath)
    {
        $originalFileMimeArray = explode('/', mime_content_type('storage/' . $filePath));
        return end($originalFileMimeArray);
    }


    public static function setWatermark($widthResize, $heightResize, $imgPath)
    {
        $watermarkPath = 'upload/watermark.png';
        $img = Image::make($imgPath);
        $resizePercentage = 70;
        $watermarkWidth = round($widthResize * ((100 - $resizePercentage) / 100), 2);
        $watermarkHeight = round($heightResize * ((100 - $resizePercentage) / 100), 2);
        $watermarkImage = self::resize($watermarkPath, [$watermarkWidth, $watermarkHeight], null, null, null, null, null);
        return $img->insert($watermarkImage, 'bottom-right', 10, -55);

    }


}
