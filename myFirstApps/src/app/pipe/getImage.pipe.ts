import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getImage'
})

export class GetImagePipe implements PipeTransform
{
    transform(imagePath: string, noImagePath: string, useHttps: boolean = false) : string {
        let _imagePath = '';
        
        if(imagePath) {
            _imagePath = imagePath;
        } else {
            _imagePath = noImagePath;
        }

        if (useHttps) {
            if(_imagePath.indexOf('https') == -1) {
                _imagePath = imagePath.replace('http', 'https');
            }
        }

        return _imagePath;
    }
}
