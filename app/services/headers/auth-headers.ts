import { HttpHeaders } from '@angular/common/http';

export const contentHeaders = new HttpHeaders().set('Accept','application/json').set('Content-Type','application/json');
/*contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');*/
