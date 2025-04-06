const { Gadget } = require("../models");

module.exports = {
  createGadget() {
    return "created new entry";
  },
  updateGadget() {
    return "updated gadget entry successfully";
  },
  fetchAllGadgets() {
    return "feting all entry";
  },
  fetchOneGadget() {
    try {
    } catch (error) {
      console.error("db error", error);
    }
  },
  deleteOneGadget() {
    return "deleted one Gadget";
  },
};
