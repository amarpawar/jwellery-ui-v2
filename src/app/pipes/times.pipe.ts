import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'times'
})
export class TimesPipe implements PipeTransform {

    transform(value: number, ...args: unknown[]): Iterable<any> {
        console.log('rating', value);
        const iterable = <Iterable<any>> {};
        iterable[Symbol.iterator] = function* () {
            let n = 0;
            while (n < value) {
                yield ++n;
            }
        };
        return iterable;
    }
}
