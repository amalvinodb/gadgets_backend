const { Gadget } = require("../models/gadget");

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
    return "returning one entry";
  },
  deleteOneGadget() {
    return "deleted one Gadget";
  },
};
