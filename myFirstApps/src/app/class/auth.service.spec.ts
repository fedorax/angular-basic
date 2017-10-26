import { AuthService } from './auth.service';

describe('Testing for AuthService Class', ()=>{
    let service : AuthService;

    beforeEach(()=>{
        service = new AuthService();
    });

    afterEach(()=>{
        service = null;
        localStorage.removeItem('token');
    })

    it('should return true from isAuthenticated when localStorage have a token', ()=>{
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy(); // expect true
    })

    it('should return false from isAUthenticated when not have a token', ()=> {
        expect(service.isAuthenticated()).toBeFalsy(); // expect false
    });
});