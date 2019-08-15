import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component ({
    selector: 'event-thumbnail',
    template: `
      <div class = "well hoverwell thumbail">
      <h2> {{event.name}} </h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span class="paf-lef"> {{event.location.city}}, {{event.location.country}}</span>
        </div>
        <hr>


    `
})

export class EventThumbnailComponent {
  @Input() event:any

}
