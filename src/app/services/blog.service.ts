import { Injectable } from '@angular/core';
import { BlogArticle } from './blog-article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog:Array<BlogArticle> = [
    {
      id: 1,
      title: "How Our Beloved Café Came to Life",
      para: "Unveiling the Magical Journey Behind Our Café's Creation.",
      date: '3 march 2023',
   
      img: "/assets/home/blog/coffee-machine.jpg",
      article:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt semper lobortis. Fusce blandit ligula ante, mattis convallis turpis efficitur ac. Vestibulum faucibus eu est non porta. Cras nisi sem, consectetur non orci ut, tincidunt rhoncus magna. Proin pellentesque, eros pharetra faucibus viverra, sapien nisi dictum eros, et euismod nibh sapien a dolor. Aliquam aliquam auctor nisi, eget volutpat tellus. Proin tempor tempor efficitur. Nam vulputate at nisl quis aliquam.

      Vestibulum a pretium neque. Quisque dictum malesuada tincidunt. Phasellus in pretium justo. Aliquam finibus orci eu ex vehicula malesuada. Sed lacinia eget sapien sit amet lacinia. Ut interdum nisl a dui blandit maximus. Integer auctor pellentesque arcu, eget commodo orci porttitor vel. Integer eu turpis sit amet turpis tempor sollicitudin. Sed in neque et libero hendrerit venenatis et consequat lorem. Curabitur congue faucibus lectus nec pellentesque. Donec ornare nisl maximus vehicula suscipit. Pellentesque mattis augue elit, non dictum quam cursus ut. Vestibulum lacinia, risus a tempus pellentesque, lacus erat lacinia sapien, at sagittis velit dolor vel turpis.
      
      Suspendisse vitae urna efficitur, tempus nisl eget, dapibus nibh. Vestibulum ultrices cursus elit. Nulla facilisi. Suspendisse tincidunt odio magna, ut aliquam turpis sagittis pharetra. Ut vitae eros ullamcorper, tristique diam id, aliquet mi. Vestibulum hendrerit semper magna, nec vehicula risus malesuada sit amet. Aenean in hendrerit odio, eu malesuada lectus. Fusce quis imperdiet purus. Integer laoreet sem ut leo cursus, non aliquet lacus tempus. Mauris cursus dolor arcu, nec tincidunt nisi auctor eget. Curabitur ante diam, dignissim non purus id, tempor mattis neque. Morbi iaculis odio massa, at porta nisi varius ac. Vivamus vitae mi consectetur, consectetur tortor quis, facilisis sem. In hendrerit tincidunt lacus sed vehicula.
      
      `
    },
    {
      id: 2,
      title: "Exploring the Global Essence of Coffee Beans",
      para: "Embark on a Global Journey of Coffee Exploration.",
      date: '2 may 2023',
      img: "/assets/home/blog/beans.jpg",
      article:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt semper lobortis. Fusce blandit ligula ante, mattis convallis turpis efficitur ac. Vestibulum faucibus eu est non porta. Cras nisi sem, consectetur non orci ut, tincidunt rhoncus magna. Proin pellentesque, eros pharetra faucibus viverra, sapien nisi dictum eros, et euismod nibh sapien a dolor. Aliquam aliquam auctor nisi, eget volutpat tellus. Proin tempor tempor efficitur. Nam vulputate at nisl quis aliquam.

      Vestibulum a pretium neque. Quisque dictum malesuada tincidunt. Phasellus in pretium justo. Aliquam finibus orci eu ex vehicula malesuada. Sed lacinia eget sapien sit amet lacinia. Ut interdum nisl a dui blandit maximus. Integer auctor pellentesque arcu, eget commodo orci porttitor vel. Integer eu turpis sit amet turpis tempor sollicitudin. Sed in neque et libero hendrerit venenatis et consequat lorem. Curabitur congue faucibus lectus nec pellentesque. Donec ornare nisl maximus vehicula suscipit. Pellentesque mattis augue elit, non dictum quam cursus ut. Vestibulum lacinia, risus a tempus pellentesque, lacus erat lacinia sapien, at sagittis velit dolor vel turpis.
      
      Suspendisse vitae urna efficitur, tempus nisl eget, dapibus nibh. Vestibulum ultrices cursus elit. Nulla facilisi. Suspendisse tincidunt odio magna, ut aliquam turpis sagittis pharetra. Ut vitae eros ullamcorper, tristique diam id, aliquet mi. Vestibulum hendrerit semper magna, nec vehicula risus malesuada sit amet. Aenean in hendrerit odio, eu malesuada lectus. Fusce quis imperdiet purus. Integer laoreet sem ut leo cursus, non aliquet lacus tempus. Mauris cursus dolor arcu, nec tincidunt nisi auctor eget. Curabitur ante diam, dignissim non purus id, tempor mattis neque. Morbi iaculis odio massa, at porta nisi varius ac. Vivamus vitae mi consectetur, consectetur tortor quis, facilisis sem. In hendrerit tincidunt lacus sed vehicula.
      
      `
    },
    {
      id: 3,
      title: "Elevating Your Coffee Brewing Skills",
      para: "Elevate Your Coffee Brewing Skills with Our Expertise.",
      date: '11 april 2023',
      img: "/assets/home/blog/coffee-cake.jpg",
      article:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt semper lobortis. Fusce blandit ligula ante, mattis convallis turpis efficitur ac. Vestibulum faucibus eu est non porta. Cras nisi sem, consectetur non orci ut, tincidunt rhoncus magna. Proin pellentesque, eros pharetra faucibus viverra, sapien nisi dictum eros, et euismod nibh sapien a dolor. Aliquam aliquam auctor nisi, eget volutpat tellus. Proin tempor tempor efficitur. Nam vulputate at nisl quis aliquam.

      Vestibulum a pretium neque. Quisque dictum malesuada tincidunt. Phasellus in pretium justo. Aliquam finibus orci eu ex vehicula malesuada. Sed lacinia eget sapien sit amet lacinia. Ut interdum nisl a dui blandit maximus. Integer auctor pellentesque arcu, eget commodo orci porttitor vel. Integer eu turpis sit amet turpis tempor sollicitudin. Sed in neque et libero hendrerit venenatis et consequat lorem. Curabitur congue faucibus lectus nec pellentesque. Donec ornare nisl maximus vehicula suscipit. Pellentesque mattis augue elit, non dictum quam cursus ut. Vestibulum lacinia, risus a tempus pellentesque, lacus erat lacinia sapien, at sagittis velit dolor vel turpis.
      
      Suspendisse vitae urna efficitur, tempus nisl eget, dapibus nibh. Vestibulum ultrices cursus elit. Nulla facilisi. Suspendisse tincidunt odio magna, ut aliquam turpis sagittis pharetra. Ut vitae eros ullamcorper, tristique diam id, aliquet mi. Vestibulum hendrerit semper magna, nec vehicula risus malesuada sit amet. Aenean in hendrerit odio, eu malesuada lectus. Fusce quis imperdiet purus. Integer laoreet sem ut leo cursus, non aliquet lacus tempus. Mauris cursus dolor arcu, nec tincidunt nisi auctor eget. Curabitur ante diam, dignissim non purus id, tempor mattis neque. Morbi iaculis odio massa, at porta nisi varius ac. Vivamus vitae mi consectetur, consectetur tortor quis, facilisis sem. In hendrerit tincidunt lacus sed vehicula.
      
      `
    },
    {
      id: 4,
      title: "Painting with Milk and Coffee Dreams",
      para: "Dive into the Artful World of Latte Masterpieces.",
      date: '17 march 2023',
      img: "/assets/home/blog/coffee-milk.jpg",
      article:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt semper lobortis. Fusce blandit ligula ante, mattis convallis turpis efficitur ac. Vestibulum faucibus eu est non porta. Cras nisi sem, consectetur non orci ut, tincidunt rhoncus magna. Proin pellentesque, eros pharetra faucibus viverra, sapien nisi dictum eros, et euismod nibh sapien a dolor. Aliquam aliquam auctor nisi, eget volutpat tellus. Proin tempor tempor efficitur. Nam vulputate at nisl quis aliquam.

      Vestibulum a pretium neque. Quisque dictum malesuada tincidunt. Phasellus in pretium justo. Aliquam finibus orci eu ex vehicula malesuada. Sed lacinia eget sapien sit amet lacinia. Ut interdum nisl a dui blandit maximus. Integer auctor pellentesque arcu, eget commodo orci porttitor vel. Integer eu turpis sit amet turpis tempor sollicitudin. Sed in neque et libero hendrerit venenatis et consequat lorem. Curabitur congue faucibus lectus nec pellentesque. Donec ornare nisl maximus vehicula suscipit. Pellentesque mattis augue elit, non dictum quam cursus ut. Vestibulum lacinia, risus a tempus pellentesque, lacus erat lacinia sapien, at sagittis velit dolor vel turpis.
      
      Suspendisse vitae urna efficitur, tempus nisl eget, dapibus nibh. Vestibulum ultrices cursus elit. Nulla facilisi. Suspendisse tincidunt odio magna, ut aliquam turpis sagittis pharetra. Ut vitae eros ullamcorper, tristique diam id, aliquet mi. Vestibulum hendrerit semper magna, nec vehicula risus malesuada sit amet. Aenean in hendrerit odio, eu malesuada lectus. Fusce quis imperdiet purus. Integer laoreet sem ut leo cursus, non aliquet lacus tempus. Mauris cursus dolor arcu, nec tincidunt nisi auctor eget. Curabitur ante diam, dignissim non purus id, tempor mattis neque. Morbi iaculis odio massa, at porta nisi varius ac. Vivamus vitae mi consectetur, consectetur tortor quis, facilisis sem. In hendrerit tincidunt lacus sed vehicula.
      
      `
    },
  ]
  constructor() { }

  getBlog(){
    return this.blog
  }
}
