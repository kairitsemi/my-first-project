import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, // when the path route is empty, it will go to the rout page
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'category/:categoryName', component: CategoryComponent}, // : stores variable like -category/sports
  {path: 'test', component: TestComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'blog-post/:id', component: BlogPostComponent},
  {path: 'blog-create', component: BlogCreateComponent},

  {path: '**', redirectTo: 'home'}
  // empty or invalid path leads to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
