// Angular import
import { Pipe, PipeTransform } from '@angular/core';

// project import
import * as _ from 'lodash-es';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  // public method
  // eslint-disable-next-line
  transform(array: any, query: string) {
    if (query) {
      return _.filter(array, (row: { name: string }) => row.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
    return array;
  }
}
