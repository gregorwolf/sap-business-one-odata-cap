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
exports.ProductionOrdersSalesOrderLine = exports.ProductionOrdersSalesOrderLineField = exports.createProductionOrdersSalesOrderLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrdersSalesOrderLine.build]] instead.
 */
function createProductionOrdersSalesOrderLine(json) {
    return ProductionOrdersSalesOrderLine.build(json);
}
exports.createProductionOrdersSalesOrderLine = createProductionOrdersSalesOrderLine;
/**
 * ProductionOrdersSalesOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProductionOrdersSalesOrderLineField = /** @class */ (function (_super) {
    __extends(ProductionOrdersSalesOrderLineField, _super);
    /**
     * Creates an instance of ProductionOrdersSalesOrderLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ProductionOrdersSalesOrderLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ProductionOrdersSalesOrderLine) || this;
        /**
         * Representation of the [[ProductionOrdersSalesOrderLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersSalesOrderLine.baseNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseNumber = new core_1.ComplexTypeNumberPropertyField('BaseNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersSalesOrderLine.baseAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseAbsEntry = new core_1.ComplexTypeNumberPropertyField('BaseAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersSalesOrderLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        return _this;
    }
    return ProductionOrdersSalesOrderLineField;
}(core_1.ComplexTypeField));
exports.ProductionOrdersSalesOrderLineField = ProductionOrdersSalesOrderLineField;
var ProductionOrdersSalesOrderLine;
(function (ProductionOrdersSalesOrderLine) {
    /**
     * Metadata information on all properties of the `ProductionOrdersSalesOrderLine` complex type.
     */
    ProductionOrdersSalesOrderLine._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseNumber',
            name: 'baseNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseAbsEntry',
            name: 'baseAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ProductionOrdersSalesOrderLine);
    }
    ProductionOrdersSalesOrderLine.build = build;
})(ProductionOrdersSalesOrderLine = exports.ProductionOrdersSalesOrderLine || (exports.ProductionOrdersSalesOrderLine = {}));
//# sourceMappingURL=ProductionOrdersSalesOrderLine.js.map