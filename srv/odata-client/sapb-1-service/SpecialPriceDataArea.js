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
exports.SpecialPriceDataArea = exports.SpecialPriceDataAreaField = exports.createSpecialPriceDataArea = void 0;
var SpecialPriceQuantityArea_1 = require("./SpecialPriceQuantityArea");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceDataArea.build]] instead.
 */
function createSpecialPriceDataArea(json) {
    return SpecialPriceDataArea.build(json);
}
exports.createSpecialPriceDataArea = createSpecialPriceDataArea;
/**
 * SpecialPriceDataAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SpecialPriceDataAreaField = /** @class */ (function (_super) {
    __extends(SpecialPriceDataAreaField, _super);
    /**
     * Creates an instance of SpecialPriceDataAreaField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SpecialPriceDataAreaField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SpecialPriceDataArea) || this;
        /**
         * Representation of the [[SpecialPriceDataArea.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new core_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceDataArea.autoUpdate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.autoUpdate = new core_1.ComplexTypeEnumPropertyField('AutoUpdate', _this);
        /**
         * Representation of the [[SpecialPriceDataArea.dateto]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateto = new core_1.ComplexTypeDatePropertyField('Dateto', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SpecialPriceDataArea.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new core_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceDataArea.specialPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialPrice = new core_1.ComplexTypeNumberPropertyField('SpecialPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceDataArea.dateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateFrom = new core_1.ComplexTypeDatePropertyField('DateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SpecialPriceDataArea.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceDataArea.priceListNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceListNo = new core_1.ComplexTypeNumberPropertyField('PriceListNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceDataArea.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceDataArea.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceDataArea.specialPriceQuantityAreas]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialPriceQuantityAreas = new core_1.CollectionField('SpecialPriceQuantityAreas', _this, SpecialPriceQuantityArea_1.SpecialPriceQuantityArea);
        return _this;
    }
    return SpecialPriceDataAreaField;
}(core_1.ComplexTypeField));
exports.SpecialPriceDataAreaField = SpecialPriceDataAreaField;
var SpecialPriceDataArea;
(function (SpecialPriceDataArea) {
    /**
     * Metadata information on all properties of the `SpecialPriceDataArea` complex type.
     */
    SpecialPriceDataArea._propertyMetadata = [{
            originalName: 'PriceCurrency',
            name: 'priceCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AutoUpdate',
            name: 'autoUpdate',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Dateto',
            name: 'dateto',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Discount',
            name: 'discount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SpecialPrice',
            name: 'specialPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DateFrom',
            name: 'dateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceListNo',
            name: 'priceListNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SpecialPriceQuantityAreas',
            name: 'specialPriceQuantityAreas',
            type: SpecialPriceQuantityArea_1.SpecialPriceQuantityArea,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SpecialPriceDataArea);
    }
    SpecialPriceDataArea.build = build;
})(SpecialPriceDataArea = exports.SpecialPriceDataArea || (exports.SpecialPriceDataArea = {}));
//# sourceMappingURL=SpecialPriceDataArea.js.map