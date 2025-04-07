const { Gadget } = require("../models");

module.exports = {
  async createGadget(gadgetData) {
    const newGadget = await Gadget.create(gadgetData);
    return newGadget;
  },
  async updateGadget(id, updatedFields) {
    try {
      const response = await Gadget.update(updatedFields, {
        where: { id },
      });

      console.log("Updated gadget:", response);
      return response;
    } catch (error) {
      throw Error(error);
    }
  },
  async fetchAllGadgets(limit, skip) {
    try {
      const allGadget = await Gadget.findAndCountAll({
        attributes: ["id", "item_name", "item_price", "item_quantity"], // Select specific fields
        limit: limit, // Number of entries to return
        offset: skip, // Skip this many entries
      });
      return { data: allGadget.rows, count: allGadget.count };
    } catch (error) {
      throw Error(error);
    }
  },
  async fetchOneGadget(id) {
    try {
      const gadget = await Gadget.findOne({ where: { id: parseInt(id) } });
      console.log(gadget);
      return gadget;
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteOneGadget(id) {
    const result = await Gadget.destroy({
      where: { id }, // Specify the condition for deletion
    });

    return result;
  },
};
