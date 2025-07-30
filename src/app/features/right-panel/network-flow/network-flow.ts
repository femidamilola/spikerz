import { Component } from '@angular/core';
import { Node } from '../node/node';
import { OptionBadge } from "../option-badge/option-badge";
@Component({
  selector: 'app-network-flow',
  imports: [Node, OptionBadge],
  templateUrl: './network-flow.html',
  styleUrl: './network-flow.scss'
})
export class NetworkFlow {

}
