import { Component, Input, OnInit } from '@angular/core';
import { Images } from '../../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void{
    if(!this.url) throw new Error('Url property is required');
  }

  onLoad(){
    this.hasLoaded = true;
  }
}
