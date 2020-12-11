"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ItemAttributeGroupsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemAttributeGroupsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemAttributeGroups) || this;
        /**
         * Representation of the [[ItemAttributeGroups.attribute1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute1 = new core_1.ComplexTypeStringPropertyField('Attribute1', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute2 = new core_1.ComplexTypeStringPropertyField('Attribute2', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute3 = new core_1.ComplexTypeStringPropertyField('Attribute3', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute4 = new core_1.ComplexTypeStringPropertyField('Attribute4', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute5 = new core_1.ComplexTypeStringPropertyField('Attribute5', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute6 = new core_1.ComplexTypeStringPropertyField('Attribute6', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute7 = new core_1.ComplexTypeStringPropertyField('Attribute7', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute8 = new core_1.ComplexTypeStringPropertyField('Attribute8', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute9 = new core_1.ComplexTypeStringPropertyField('Attribute9', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute10 = new core_1.ComplexTypeStringPropertyField('Attribute10', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute11]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute11 = new core_1.ComplexTypeStringPropertyField('Attribute11', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute12 = new core_1.ComplexTypeStringPropertyField('Attribute12', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute13 = new core_1.ComplexTypeStringPropertyField('Attribute13', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute14]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute14 = new core_1.ComplexTypeStringPropertyField('Attribute14', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute15]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute15 = new core_1.ComplexTypeStringPropertyField('Attribute15', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute16]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute16 = new core_1.ComplexTypeStringPropertyField('Attribute16', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute17]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute17 = new core_1.ComplexTypeStringPropertyField('Attribute17', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute18]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute18 = new core_1.ComplexTypeStringPropertyField('Attribute18', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute19]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute19 = new core_1.ComplexTypeStringPropertyField('Attribute19', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute20]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute20 = new core_1.ComplexTypeStringPropertyField('Attribute20', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute21]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute21 = new core_1.ComplexTypeStringPropertyField('Attribute21', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute22]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute22 = new core_1.ComplexTypeStringPropertyField('Attribute22', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute23]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute23 = new core_1.ComplexTypeStringPropertyField('Attribute23', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute24]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute24 = new core_1.ComplexTypeStringPropertyField('Attribute24', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute25]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute25 = new core_1.ComplexTypeStringPropertyField('Attribute25', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute26]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute26 = new core_1.ComplexTypeStringPropertyField('Attribute26', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute27]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute27 = new core_1.ComplexTypeStringPropertyField('Attribute27', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute28]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute28 = new core_1.ComplexTypeStringPropertyField('Attribute28', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute29]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute29 = new core_1.ComplexTypeStringPropertyField('Attribute29', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute30]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute30 = new core_1.ComplexTypeStringPropertyField('Attribute30', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute31]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute31 = new core_1.ComplexTypeStringPropertyField('Attribute31', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute32]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute32 = new core_1.ComplexTypeStringPropertyField('Attribute32', _this, 'Edm.String');
        /**
         * Representation of the [[ItemAttributeGroups.attribute33]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute33 = new core_1.ComplexTypeNumberPropertyField('Attribute33', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute34]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute34 = new core_1.ComplexTypeNumberPropertyField('Attribute34', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute35]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute35 = new core_1.ComplexTypeNumberPropertyField('Attribute35', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute36]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute36 = new core_1.ComplexTypeNumberPropertyField('Attribute36', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute37]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute37 = new core_1.ComplexTypeNumberPropertyField('Attribute37', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute38]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute38 = new core_1.ComplexTypeNumberPropertyField('Attribute38', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute39]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute39 = new core_1.ComplexTypeNumberPropertyField('Attribute39', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute40]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute40 = new core_1.ComplexTypeNumberPropertyField('Attribute40', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute41]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute41 = new core_1.ComplexTypeNumberPropertyField('Attribute41', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute42]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute42 = new core_1.ComplexTypeNumberPropertyField('Attribute42', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemAttributeGroups.attribute43]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute43 = new core_1.ComplexTypeDatePropertyField('Attribute43', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute44]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute44 = new core_1.ComplexTypeDatePropertyField('Attribute44', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute45]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute45 = new core_1.ComplexTypeDatePropertyField('Attribute45', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute46]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute46 = new core_1.ComplexTypeDatePropertyField('Attribute46', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute47]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute47 = new core_1.ComplexTypeDatePropertyField('Attribute47', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemAttributeGroups.attribute48]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute48 = new core_1.ComplexTypeNumberPropertyField('Attribute48', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute49]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute49 = new core_1.ComplexTypeNumberPropertyField('Attribute49', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute50]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute50 = new core_1.ComplexTypeNumberPropertyField('Attribute50', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute51]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute51 = new core_1.ComplexTypeNumberPropertyField('Attribute51', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute52]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute52 = new core_1.ComplexTypeNumberPropertyField('Attribute52', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute53]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute53 = new core_1.ComplexTypeNumberPropertyField('Attribute53', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute54]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute54 = new core_1.ComplexTypeNumberPropertyField('Attribute54', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute55]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute55 = new core_1.ComplexTypeNumberPropertyField('Attribute55', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute56]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute56 = new core_1.ComplexTypeNumberPropertyField('Attribute56', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute57]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute57 = new core_1.ComplexTypeNumberPropertyField('Attribute57', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute58]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute58 = new core_1.ComplexTypeNumberPropertyField('Attribute58', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute59]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute59 = new core_1.ComplexTypeNumberPropertyField('Attribute59', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute60]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute60 = new core_1.ComplexTypeNumberPropertyField('Attribute60', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute61]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute61 = new core_1.ComplexTypeNumberPropertyField('Attribute61', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute62]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute62 = new core_1.ComplexTypeNumberPropertyField('Attribute62', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute63]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute63 = new core_1.ComplexTypeNumberPropertyField('Attribute63', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemAttributeGroups.attribute64]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attribute64 = new core_1.ComplexTypeNumberPropertyField('Attribute64', _this, 'Edm.Double');
        return _this;
    }
    return ItemAttributeGroupsField;
}(core_1.ComplexTypeField));
exports.ItemAttributeGroupsField = ItemAttributeGroupsField;
var ItemAttributeGroups;
(function (ItemAttributeGroups) {
    /**
     * Metadata information on all properties of the `ItemAttributeGroups` complex type.
     */
    ItemAttributeGroups._propertyMetadata = [{
            originalName: 'Attribute1',
            name: 'attribute1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute2',
            name: 'attribute2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute3',
            name: 'attribute3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute4',
            name: 'attribute4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute5',
            name: 'attribute5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute6',
            name: 'attribute6',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute7',
            name: 'attribute7',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute8',
            name: 'attribute8',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute9',
            name: 'attribute9',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute10',
            name: 'attribute10',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute11',
            name: 'attribute11',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute12',
            name: 'attribute12',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute13',
            name: 'attribute13',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute14',
            name: 'attribute14',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute15',
            name: 'attribute15',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute16',
            name: 'attribute16',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute17',
            name: 'attribute17',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute18',
            name: 'attribute18',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute19',
            name: 'attribute19',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute20',
            name: 'attribute20',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute21',
            name: 'attribute21',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute22',
            name: 'attribute22',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute23',
            name: 'attribute23',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute24',
            name: 'attribute24',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute25',
            name: 'attribute25',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute26',
            name: 'attribute26',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute27',
            name: 'attribute27',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute28',
            name: 'attribute28',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute29',
            name: 'attribute29',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute30',
            name: 'attribute30',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute31',
            name: 'attribute31',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute32',
            name: 'attribute32',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Attribute33',
            name: 'attribute33',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute34',
            name: 'attribute34',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute35',
            name: 'attribute35',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute36',
            name: 'attribute36',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute37',
            name: 'attribute37',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute38',
            name: 'attribute38',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute39',
            name: 'attribute39',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute40',
            name: 'attribute40',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute41',
            name: 'attribute41',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute42',
            name: 'attribute42',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Attribute43',
            name: 'attribute43',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Attribute44',
            name: 'attribute44',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Attribute45',
            name: 'attribute45',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Attribute46',
            name: 'attribute46',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Attribute47',
            name: 'attribute47',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Attribute48',
            name: 'attribute48',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute49',
            name: 'attribute49',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute50',
            name: 'attribute50',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute51',
            name: 'attribute51',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute52',
            name: 'attribute52',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute53',
            name: 'attribute53',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute54',
            name: 'attribute54',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute55',
            name: 'attribute55',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute56',
            name: 'attribute56',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute57',
            name: 'attribute57',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute58',
            name: 'attribute58',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute59',
            name: 'attribute59',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute60',
            name: 'attribute60',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute61',
            name: 'attribute61',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute62',
            name: 'attribute62',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute63',
            name: 'attribute63',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Attribute64',
            name: 'attribute64',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemAttributeGroups);
    }
    ItemAttributeGroups.build = build;
})(ItemAttributeGroups = exports.ItemAttributeGroups || (exports.ItemAttributeGroups = {}));
//# sourceMappingURL=ItemAttributeGroups.js.map