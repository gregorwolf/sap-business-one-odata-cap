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
exports.SpecialPriceQuantityArea = exports.SpecialPriceQuantityAreaField = exports.createSpecialPriceQuantityArea = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceQuantityArea.build]] instead.
 */
function createSpecialPriceQuantityArea(json) {
    return SpecialPriceQuantityArea.build(json);
}
exports.createSpecialPriceQuantityArea = createSpecialPriceQuantityArea;
/**
 * SpecialPriceQuantityAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SpecialPriceQuantityAreaField = /** @class */ (function (_super) {
    __extends(SpecialPriceQuantityAreaField, _super);
    /**
     * Creates an instance of SpecialPriceQuantityAreaField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SpecialPriceQuantityAreaField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SpecialPriceQuantityArea) || this;
        /**
         * Representation of the [[SpecialPriceQuantityArea.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceQuantityArea.spdaRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.spdaRowNumber = new core_1.ComplexTypeNumberPropertyField('SPDARowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceQuantityArea.specialPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialPrice = new core_1.ComplexTypeNumberPropertyField('SpecialPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceQuantityArea.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceQuantityArea.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceQuantityArea.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceQuantityArea.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new core_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceQuantityArea.discountin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountin = new core_1.ComplexTypeNumberPropertyField('Discountin', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceQuantityArea.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        return _this;
    }
    return SpecialPriceQuantityAreaField;
}(core_1.ComplexTypeField));
exports.SpecialPriceQuantityAreaField = SpecialPriceQuantityAreaField;
var SpecialPriceQuantityArea;
(function (SpecialPriceQuantityArea) {
    /**
     * Metadata information on all properties of the `SpecialPriceQuantityArea` complex type.
     */
    SpecialPriceQuantityArea._propertyMetadata = [{
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SPDARowNumber',
            name: 'spdaRowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SpecialPrice',
            name: 'specialPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PriceCurrency',
            name: 'priceCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Discountin',
            name: 'discountin',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SpecialPriceQuantityArea);
    }
    SpecialPriceQuantityArea.build = build;
})(SpecialPriceQuantityArea = exports.SpecialPriceQuantityArea || (exports.SpecialPriceQuantityArea = {}));
//# sourceMappingURL=SpecialPriceQuantityArea.js.map