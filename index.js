function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
  const currentDate = new Date();
  
  const uretimYili = currentDate.getFullYear() - yas;
 
  const carObject = {
    id: id,
    model: model,
    yakit: yakit,
    vites: vites,
    fiyat: fiyat,
    uretimYili: uretimYili,
    kilometre: kilometre,
  };
  return carObject;
}
