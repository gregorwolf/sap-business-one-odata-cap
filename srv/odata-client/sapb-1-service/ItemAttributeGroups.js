"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAttributeGroups = exports.ItemAttributeGroupsField = exports.createItemAttributeGroups = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemAttributeGroups.build]] instead.
 */
function createItemAttributeGroups(json) {
    return ItemAttributeGroups.build(json);
}
exports.createItemAttributeGroups = createItemAttributeGroups;
/**
 * ItemAttributeGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemAttributeGroupsField = /** @class */ (function (_super) {
    __extends(ItemAttributeGroupsField, _super);
    function ItemAttributeGroupsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemAttributeGroups.attribute1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute1 = new v4_1.ComplexTypeStringPropertyField('Attribute1', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute2 = new v4_1.ComplexTypeStringPropertyField('Attribute2', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute3 = new v4_1.ComplexTypeStringPropertyField('Attribute3', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute4 = new v4_1.ComplexTypeStringPropertyField('Attribute4', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute5 = new v4_1.ComplexTypeStringPropertyField('Attribute5', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute6 = new v4_1.ComplexTypeStringPropertyField('Attribute6', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute7 = new v4_1.ComplexTypeStringPropertyField('Attribute7', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute8 = new v4_1.ComplexTypeStringPropertyField('Attribute8', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute9 = new v4_1.ComplexTypeStringPropertyField('Attribute9', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute10 = new v4_1.ComplexTypeStringPropertyField('Attribute10', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute11]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute11 = new v4_1.ComplexTypeStringPropertyField('Attribute11', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute12 = new v4_1.ComplexTypeStringPropertyField('Attribute12', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute13 = new v4_1.ComplexTypeStringPropertyField('Attribute13', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute14]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute14 = new v4_1.ComplexTypeStringPropertyField('Attribute14', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute15]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute15 = new v4_1.ComplexTypeStringPropertyField('Attribute15', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute16]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute16 = new v4_1.ComplexTypeStringPropertyField('Attribute16', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute17]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute17 = new v4_1.ComplexTypeStringPropertyField('Attribute17', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute18]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute18 = new v4_1.ComplexTypeStringPropertyField('Attribute18', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute19]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute19 = new v4_1.ComplexTypeStringPropertyField('Attribute19', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute20]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute20 = new v4_1.ComplexTypeStringPropertyField('Attribute20', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute21]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute21 = new v4_1.ComplexTypeStringPropertyField('Attribute21', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute22]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute22 = new v4_1.ComplexTypeStringPropertyField('Attribute22', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute23]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute23 = new v4_1.ComplexTypeStringPropertyField('Attribute23', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute24]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute24 = new v4_1.ComplexTypeStringPropertyField('Attribute24', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute25]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute25 = new v4_1.ComplexTypeStringPropertyField('Attribute25', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute26]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute26 = new v4_1.ComplexTypeStringPropertyField('Attribute26', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute27]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute27 = new v4_1.ComplexTypeStringPropertyField('Attribute27', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute28]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute28 = new v4_1.ComplexTypeStringPropertyField('Attribute28', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute29]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute29 = new v4_1.ComplexTypeStringPropertyField('Attribute29', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute30]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute30 = new v4_1.ComplexTypeStringPropertyField('Attribute30', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute31]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute31 = new v4_1.ComplexTypeStringPropertyField('Attribute31', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute32]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute32 = new v4_1.ComplexTypeStringPropertyField('Attribute32', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute33]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute33 = new v4_1.ComplexTypeNumberPropertyField('Attribute33', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute34]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute34 = new v4_1.ComplexTypeNumberPropertyField('Attribute34', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute35]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute35 = new v4_1.ComplexTypeNumberPropertyField('Attribute35', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute36]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute36 = new v4_1.ComplexTypeNumberPropertyField('Attribute36', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute37]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute37 = new v4_1.ComplexTypeNumberPropertyField('Attribute37', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute38]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute38 = new v4_1.ComplexTypeNumberPropertyField('Attribute38', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute39]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute39 = new v4_1.ComplexTypeNumberPropertyField('Attribute39', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute40]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute40 = new v4_1.ComplexTypeNumberPropertyField('Attribute40', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute41]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute41 = new v4_1.ComplexTypeNumberPropertyField('Attribute41', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute42]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute42 = new v4_1.ComplexTypeNumberPropertyField('Attribute42', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute43]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute43 = new v4_1.ComplexTypeDatePropertyField('Attribute43', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute44]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute44 = new v4_1.ComplexTypeDatePropertyField('Attribute44', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute45]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute45 = new v4_1.ComplexTypeDatePropertyField('Attribute45', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute46]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute46 = new v4_1.ComplexTypeDatePropertyField('Attribute46', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute47]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute47 = new v4_1.ComplexTypeDatePropertyField('Attribute47', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute48]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute48 = new v4_1.ComplexTypeNumberPropertyField('Attribute48', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute49]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute49 = new v4_1.ComplexTypeNumberPropertyField('Attribute49', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute50]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute50 = new v4_1.ComplexTypeNumberPropertyField('Attribute50', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute51]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute51 = new v4_1.ComplexTypeNumberPropertyField('Attribute51', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute52]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute52 = new v4_1.ComplexTypeNumberPropertyField('Attribute52', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute53]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute53 = new v4_1.ComplexTypeNumberPropertyField('Attribute53', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute54]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute54 = new v4_1.ComplexTypeNumberPropertyField('Attribute54', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute55]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute55 = new v4_1.ComplexTypeNumberPropertyField('Attribute55', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute56]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute56 = new v4_1.ComplexTypeNumberPropertyField('Attribute56', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute57]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute57 = new v4_1.ComplexTypeNumberPropertyField('Attribute57', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute58]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute58 = new v4_1.ComplexTypeNumberPropertyField('Attribute58', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute59]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute59 = new v4_1.ComplexTypeNumberPropertyField('Attribute59', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute60]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute60 = new v4_1.ComplexTypeNumberPropertyField('Attribute60', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute61]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute61 = new v4_1.ComplexTypeNumberPropertyField('Attribute61', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute62]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute62 = new v4_1.ComplexTypeNumberPropertyField('Attribute62', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute63]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute63 = new v4_1.ComplexTypeNumberPropertyField('Attribute63', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute64]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute64 = new v4_1.ComplexTypeNumberPropertyField('Attribute64', _this, 'Edm.Double');
        return _this;
    }
    return ItemAttributeGroupsField;
}(v4_1.ComplexTypeField));
exports.ItemAttributeGroupsField = ItemAttributeGroupsField;
var ItemAttributeGroups;
(function (ItemAttributeGroups) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Attribute1: function (attribute1) { return ({ attribute1: v4_1.edmToTs(attribute1, 'Edm.String') }); },
            Attribute2: function (attribute2) { return ({ attribute2: v4_1.edmToTs(attribute2, 'Edm.String') }); },
            Attribute3: function (attribute3) { return ({ attribute3: v4_1.edmToTs(attribute3, 'Edm.String') }); },
            Attribute4: function (attribute4) { return ({ attribute4: v4_1.edmToTs(attribute4, 'Edm.String') }); },
            Attribute5: function (attribute5) { return ({ attribute5: v4_1.edmToTs(attribute5, 'Edm.String') }); },
            Attribute6: function (attribute6) { return ({ attribute6: v4_1.edmToTs(attribute6, 'Edm.String') }); },
            Attribute7: function (attribute7) { return ({ attribute7: v4_1.edmToTs(attribute7, 'Edm.String') }); },
            Attribute8: function (attribute8) { return ({ attribute8: v4_1.edmToTs(attribute8, 'Edm.String') }); },
            Attribute9: function (attribute9) { return ({ attribute9: v4_1.edmToTs(attribute9, 'Edm.String') }); },
            Attribute10: function (attribute10) { return ({ attribute10: v4_1.edmToTs(attribute10, 'Edm.String') }); },
            Attribute11: function (attribute11) { return ({ attribute11: v4_1.edmToTs(attribute11, 'Edm.String') }); },
            Attribute12: function (attribute12) { return ({ attribute12: v4_1.edmToTs(attribute12, 'Edm.String') }); },
            Attribute13: function (attribute13) { return ({ attribute13: v4_1.edmToTs(attribute13, 'Edm.String') }); },
            Attribute14: function (attribute14) { return ({ attribute14: v4_1.edmToTs(attribute14, 'Edm.String') }); },
            Attribute15: function (attribute15) { return ({ attribute15: v4_1.edmToTs(attribute15, 'Edm.String') }); },
            Attribute16: function (attribute16) { return ({ attribute16: v4_1.edmToTs(attribute16, 'Edm.String') }); },
            Attribute17: function (attribute17) { return ({ attribute17: v4_1.edmToTs(attribute17, 'Edm.String') }); },
            Attribute18: function (attribute18) { return ({ attribute18: v4_1.edmToTs(attribute18, 'Edm.String') }); },
            Attribute19: function (attribute19) { return ({ attribute19: v4_1.edmToTs(attribute19, 'Edm.String') }); },
            Attribute20: function (attribute20) { return ({ attribute20: v4_1.edmToTs(attribute20, 'Edm.String') }); },
            Attribute21: function (attribute21) { return ({ attribute21: v4_1.edmToTs(attribute21, 'Edm.String') }); },
            Attribute22: function (attribute22) { return ({ attribute22: v4_1.edmToTs(attribute22, 'Edm.String') }); },
            Attribute23: function (attribute23) { return ({ attribute23: v4_1.edmToTs(attribute23, 'Edm.String') }); },
            Attribute24: function (attribute24) { return ({ attribute24: v4_1.edmToTs(attribute24, 'Edm.String') }); },
            Attribute25: function (attribute25) { return ({ attribute25: v4_1.edmToTs(attribute25, 'Edm.String') }); },
            Attribute26: function (attribute26) { return ({ attribute26: v4_1.edmToTs(attribute26, 'Edm.String') }); },
            Attribute27: function (attribute27) { return ({ attribute27: v4_1.edmToTs(attribute27, 'Edm.String') }); },
            Attribute28: function (attribute28) { return ({ attribute28: v4_1.edmToTs(attribute28, 'Edm.String') }); },
            Attribute29: function (attribute29) { return ({ attribute29: v4_1.edmToTs(attribute29, 'Edm.String') }); },
            Attribute30: function (attribute30) { return ({ attribute30: v4_1.edmToTs(attribute30, 'Edm.String') }); },
            Attribute31: function (attribute31) { return ({ attribute31: v4_1.edmToTs(attribute31, 'Edm.String') }); },
            Attribute32: function (attribute32) { return ({ attribute32: v4_1.edmToTs(attribute32, 'Edm.String') }); },
            Attribute33: function (attribute33) { return ({ attribute33: v4_1.edmToTs(attribute33, 'Edm.Int32') }); },
            Attribute34: function (attribute34) { return ({ attribute34: v4_1.edmToTs(attribute34, 'Edm.Int32') }); },
            Attribute35: function (attribute35) { return ({ attribute35: v4_1.edmToTs(attribute35, 'Edm.Int32') }); },
            Attribute36: function (attribute36) { return ({ attribute36: v4_1.edmToTs(attribute36, 'Edm.Int32') }); },
            Attribute37: function (attribute37) { return ({ attribute37: v4_1.edmToTs(attribute37, 'Edm.Int32') }); },
            Attribute38: function (attribute38) { return ({ attribute38: v4_1.edmToTs(attribute38, 'Edm.Int32') }); },
            Attribute39: function (attribute39) { return ({ attribute39: v4_1.edmToTs(attribute39, 'Edm.Int32') }); },
            Attribute40: function (attribute40) { return ({ attribute40: v4_1.edmToTs(attribute40, 'Edm.Int32') }); },
            Attribute41: function (attribute41) { return ({ attribute41: v4_1.edmToTs(attribute41, 'Edm.Int32') }); },
            Attribute42: function (attribute42) { return ({ attribute42: v4_1.edmToTs(attribute42, 'Edm.Int32') }); },
            Attribute43: function (attribute43) { return ({ attribute43: v4_1.edmToTs(attribute43, 'Edm.DateTimeOffset') }); },
            Attribute44: function (attribute44) { return ({ attribute44: v4_1.edmToTs(attribute44, 'Edm.DateTimeOffset') }); },
            Attribute45: function (attribute45) { return ({ attribute45: v4_1.edmToTs(attribute45, 'Edm.DateTimeOffset') }); },
            Attribute46: function (attribute46) { return ({ attribute46: v4_1.edmToTs(attribute46, 'Edm.DateTimeOffset') }); },
            Attribute47: function (attribute47) { return ({ attribute47: v4_1.edmToTs(attribute47, 'Edm.DateTimeOffset') }); },
            Attribute48: function (attribute48) { return ({ attribute48: v4_1.edmToTs(attribute48, 'Edm.Double') }); },
            Attribute49: function (attribute49) { return ({ attribute49: v4_1.edmToTs(attribute49, 'Edm.Double') }); },
            Attribute50: function (attribute50) { return ({ attribute50: v4_1.edmToTs(attribute50, 'Edm.Double') }); },
            Attribute51: function (attribute51) { return ({ attribute51: v4_1.edmToTs(attribute51, 'Edm.Double') }); },
            Attribute52: function (attribute52) { return ({ attribute52: v4_1.edmToTs(attribute52, 'Edm.Double') }); },
            Attribute53: function (attribute53) { return ({ attribute53: v4_1.edmToTs(attribute53, 'Edm.Double') }); },
            Attribute54: function (attribute54) { return ({ attribute54: v4_1.edmToTs(attribute54, 'Edm.Double') }); },
            Attribute55: function (attribute55) { return ({ attribute55: v4_1.edmToTs(attribute55, 'Edm.Double') }); },
            Attribute56: function (attribute56) { return ({ attribute56: v4_1.edmToTs(attribute56, 'Edm.Double') }); },
            Attribute57: function (attribute57) { return ({ attribute57: v4_1.edmToTs(attribute57, 'Edm.Double') }); },
            Attribute58: function (attribute58) { return ({ attribute58: v4_1.edmToTs(attribute58, 'Edm.Double') }); },
            Attribute59: function (attribute59) { return ({ attribute59: v4_1.edmToTs(attribute59, 'Edm.Double') }); },
            Attribute60: function (attribute60) { return ({ attribute60: v4_1.edmToTs(attribute60, 'Edm.Double') }); },
            Attribute61: function (attribute61) { return ({ attribute61: v4_1.edmToTs(attribute61, 'Edm.Double') }); },
            Attribute62: function (attribute62) { return ({ attribute62: v4_1.edmToTs(attribute62, 'Edm.Double') }); },
            Attribute63: function (attribute63) { return ({ attribute63: v4_1.edmToTs(attribute63, 'Edm.Double') }); },
            Attribute64: function (attribute64) { return ({ attribute64: v4_1.edmToTs(attribute64, 'Edm.Double') }); }
        });
    }
    ItemAttributeGroups.build = build;
})(ItemAttributeGroups = exports.ItemAttributeGroups || (exports.ItemAttributeGroups = {}));
//# sourceMappingURL=ItemAttributeGroups.js.map