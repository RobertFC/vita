import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
