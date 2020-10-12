import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.initMenuDatas();
  }

  public menuItems: Array<MenuItem> = [];

  public initMenuDatas(): void {
    let subMenuA1: SubMenu = new SubMenu();
    subMenuA1.name = 'subMenuA1';
    subMenuA1.icon = '../../assets/baseline_masks_black_18dp.png';

    let subMenuA2: SubMenu = new SubMenu();
    subMenuA2.name = 'subMenuA2';
    subMenuA2.icon = '../../assets/baseline_mood_bad_black_18dp.png';

    let subMenuA3: SubMenu = new SubMenu();
    subMenuA3.name = 'subMenuA3';
    subMenuA3.icon = '../../assets/baseline_mood_black_18dp.png';

    let menuItemA1SubMenus: Array<SubMenu> = new Array<SubMenu>();
    menuItemA1SubMenus.push(subMenuA1);
    menuItemA1SubMenus.push(subMenuA2);
    menuItemA1SubMenus.push(subMenuA3);
    let menuItemA: MenuItem = new MenuItem('menuA', true, '../../assets/baseline_masks_black_18dp.png', false, menuItemA1SubMenus);

    this.menuItems.push(menuItemA);


    let subMenuB1: SubMenu = new SubMenu();
    subMenuB1.name = 'subMenuB1';
    subMenuB1.icon = '../../assets/baseline_masks_black_18dp.png';

    let subMenuB2: SubMenu = new SubMenu();
    subMenuB2.name = 'subMenuB2';
    subMenuB2.icon = '../../assets/baseline_mood_bad_black_18dp.png';

    let subMenuB3: SubMenu = new SubMenu();
    subMenuB3.name = 'subMenu3';
    subMenuB3.icon = '../../assets/baseline_mood_black_18dp.png';

    let menuItemBSubMenus: Array<SubMenu> = new Array<SubMenu>();
    menuItemBSubMenus.push(subMenuB1);
    menuItemBSubMenus.push(subMenuB2);
    menuItemBSubMenus.push(subMenuB3);
    let menuItemB: MenuItem = new MenuItem('menuB', false, '../../assets/baseline_masks_black_18dp.png', false, menuItemBSubMenus);

    this.menuItems.push(menuItemB);


    let subMenuC1: SubMenu = new SubMenu();
    subMenuC1.name = 'subMenuC1';
    subMenuC1.icon = '../../assets/baseline_masks_black_18dp.png';

    let subMenuC2: SubMenu = new SubMenu();
    subMenuC2.name = 'subMenuC2';
    subMenuC2.icon = '../../assets/baseline_mood_bad_black_18dp.png';

    let subMenuC3: SubMenu = new SubMenu();
    subMenuC3.name = 'subMenC3';
    subMenuC3.icon = '../../assets/baseline_mood_black_18dp.png';

    let menuItemCSubMenus: Array<SubMenu> = new Array<SubMenu>();
    menuItemCSubMenus.push(subMenuC1);
    menuItemCSubMenus.push(subMenuC2);
    menuItemCSubMenus.push(subMenuC3);
    let menuItemC: MenuItem = new MenuItem('menuC', false, '../../assets/baseline_masks_black_18dp.png', false, menuItemCSubMenus);

    this.menuItems.push(menuItemC);
  }
}

class MenuItem {
  private _name: string;
  private _active: boolean;
  private _iconUrl: string;
  private _disabled: boolean;
  private _subMenus: Array<SubMenu>;

  constructor(name: string, active: boolean, iconUrl: string, disabled: boolean, subMenus: Array<SubMenu>) {
    this._name = name;
    this._active = active;
    this._iconUrl = iconUrl;
    this._disabled = disabled;
    this._subMenus = subMenus;
  }

  get subMenus(): Array<SubMenu> {
    return this._subMenus;
  }

  set subMenus(value: Array<SubMenu>) {
    this._subMenus = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get iconUrl(): string {
    return this._iconUrl;
  }

  set iconUrl(value: string) {
    this._iconUrl = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}

class SubMenu {
  private _name;
  private _icon;

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
  }
}
