const gadgetsService = require("../services/gadgets.service");
const { encryptSecret, decrypt } = require("../helper/encryptHelper");

module.exports = {
  async getAllData(req, res) {
    const page = req.query.page;
    const allGadget = await gadgetsService.fetchAllGadgets(10, (page - 1) * 10);
    const totalPage = Math.ceil(allGadget.count / 10);
    res.status(200).json({
      message: "successfully retreaved all data",
      data: allGadget,
      page: { currentPage: page, totalPages: totalPage },
    });
  },
  async addGadget(req, res) {
    const user = req.user;
    const secret = encryptSecret(req.body.item_secret, req.body.key);
    const data = {
      item_name: req.body.item_name,
      item_secret: secret,
      item_price: req.body.item_price,
      item_quantity: req.body.item_quantity,
      item_description: req.body.item_description,
      user_id: user.id,
    };

    const newGadget = await gadgetsService.createGadget(data);
    res.status(200).json({ message: "created new Entry", data: newGadget });
  },
  async getSecret(req, res) {
    const data = req.body;
    const item = await gadgetsService.fetchOneGadget(data.id);
    const decryptedSecret = decrypt(item.dataValues.item_secret, data.key);
    res.status(200).json({
      message: "Successfully decrypted Secret",
      data: decryptedSecret,
    });
  },
  async findOne(req, res) {
    const id = req.params.id;
    const gadget = await gadgetsService.fetchOneGadget(id);
    console.log(gadget);
    res.status(200).json({ messsage: "some thing new", data: gadget });
  },
  async updateGadget(req, res) {
    const id = req.params.id;
    const data = req.body;
    if ("item_secret" in data) {
      console.log("secret is there");
      data.item_secret = encryptSecret(data.item_secret, data.key);
      delete data.key;
      console.log(data);
      const updatedGadget = await gadgetsService.updateGadget(id, data);
      res.status(200).json({ message: "updated the entry" });
    } else {
      const updatedGadget = await gadgetsService.updateGadget(id, data);
      res.status(200).json({ message: "updated the entry" });
    }
  },
  async deleteGadget(req, res) {
    const id = req.params.id;
    console.log(id);
    const response = await gadgetsService.deleteOneGadget(id);
    console.log(response);
    res.status(200).json({ message: "Deleted the entry" });
  },
  async deleteMultipe(req, res) {
    const data = req.body;
    const promise = data.itemList.map(async (item) => {
      return await gadgetsService.deleteOneGadget(item.id);
    });
    const result = await Promise.all(promise);
    console.log(result);
    res.status(200).json({ message: "successfully deleted all gadgets" });
  },
  async bulkUpdate(req, res) {
    const data = req.body;
    console.log(data);
    const promises = data.map(async (item) => {
      const id = item.id;
      delete item.id;
      if ("item_secret" in item) {
        console.log("secret is there");
        item.item_secret = encryptSecret(item, item.key);
        delete item.key;
        console.log(item);
        const updatedGadget = await gadgetsService.updateGadget(id, item);
        return updatedGadget;
      } else {
        const updatedGadget = await gadgetsService.updateGadget(id, item);
        return updatedGadget;
      }
    });
    const result = await Promise.all(promises);
    console.log(result);
    res.status(200).json({ message: "updated all data", data: result });
  },
};
