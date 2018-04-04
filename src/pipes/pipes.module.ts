import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';
import { FilterItemByIdPipe } from './filter-item-by-id/filter-item-by-id';
@NgModule({
	declarations: [FilterPipe,
    FilterItemByIdPipe],
	imports: [],
	exports: [FilterPipe,
    FilterItemByIdPipe,]
})
export class PipesModule {}
