import { GetImagePipe } from './getImage.pipe'

describe('Testing for GetImagePipe', ()=>{
    let pipe: GetImagePipe;

    beforeEach(()=>{
        pipe = new GetImagePipe();
    });

    it('providing noImagePath if no value of imagePath', ()=>{
        expect(pipe.transform('', 'http://localhost/noImage.jpg'))
        .toBe('http://localhost/noImage.jpg');
    });

    it('providing ImagePath if has value of imagePath', ()=>{
        expect(pipe.transform('http://localhost/image/sample01.jpg', 'http://localhost/noImage.jpg'))
        .toBe('http://localhost/image/sample01.jpg');
    });

    it('Changing https if useHttps is true', ()=>{
        expect(pipe.transform('http://localhost/image/sample01.jpg', 'http://localhost/noImage.jpg', true))
        .toBe('https://localhost/image/sample01.jpg');
    });

})