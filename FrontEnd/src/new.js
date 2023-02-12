"use strict";
import { renderHero } from "./hero.js";
import { renderWorks } from "./work.js";
import { renderSectionWorks } from "./workSection.js";
import { renderPartners } from "./partner.js";

class FrontEnd {
  constructor() {
    renderHero.bind(this)();
    renderWorks.bind(this)();
    renderSectionWorks.bind(this)();
    renderPartners.bind(this)();
  }
}

new FrontEnd();
