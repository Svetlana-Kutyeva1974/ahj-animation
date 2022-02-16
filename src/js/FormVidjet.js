export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.string = 'Anim pariatur cliche reprehenderit,/ enim eiusmod high life accusamus/ terry richardson ad squid. Nihil anim /keffiyeh helvetica, craft beer labore wes /anderson cred nesciunt sapiente ea proident.';
  }

  static get markup() {
    return `
    <div class="button-relative">
    <button type="button" class="btn btn-secondary" data-id= "button-widjet" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Collapse
    </button>
    `;
  }

  static get buttonSelector() {
    return '[data-id=button-widjet]';
  }

  static get widjetSelector() {
    return '[data-widget=button-widget]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const button = this.parentEl.querySelector(this.constructor.buttonSelector);
    button.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    if (e.target.parentElement.children.length === 1) {
      this.createPopover();
    } else {
      e.target.parentElement.children[1].remove();
    }
  }

  createPopover() {
    const first = this.parentEl.querySelector(this.constructor.buttonSelector);// = button
    const popover = document.createElement('div');
    popover.className = 'popover fade show bs-popover-top';// 'div-propover';

    const popoverBody = document.createElement('div');
    popoverBody.className = 'popover-body';
    popoverBody.textContent = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';

    popover.appendChild(popoverBody);

    first.offsetParent.appendChild(popover);
    const min = 50;
    // popover.style.top = `${first.offsetTop + popover.offsetHeight / 2 + 10}px`;
    popover.style.top = `${first.offsetTop + min}px`;
    popover.style.left = `${first.offsetLeft}px`;
    this.transform();
  }

  deleteStr() {
    const mySplits = this.String.split(',');
    console.log(mySplits);
    return mySplits;
  }

  transform() {
    const max = 170;
    const stepHeight = 10;
    let value = 0;
    const pop = document.querySelector('.popover');
    console.log('pop', this, pop);
    function step() {
      value += stepHeight;
      pop.style.height = `${value}px`;
      if (value === max) {
        return;
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
}
