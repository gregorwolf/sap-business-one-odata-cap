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
exports.DocumentPackageItem = exports.DocumentPackageItemField = exports.createDocumentPackageItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentPackageItem.build]] instead.
 */
function createDocumentPackageItem(json) {
    return DocumentPackageItem.build(json);
}
exports.createDocumentPackageItem = createDocumentPackageItem;
/**
 * DocumentPackageItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentPackageItemField = /** @class */ (function (_super) {
    __extends(DocumentPackageItemField, _super);
    /**
     * Creates an instance of DocumentPackageItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentPackageItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentPackageItem) || this;
        /**
         * Representation of the [[DocumentPackageItem.packageNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageNumber = new core_1.ComplexTypeNumberPropertyField('PackageNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackageItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentPackageItem.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentPackageItem.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackageItem.measureUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measureUnit = new core_1.ComplexTypeStringPropertyField('MeasureUnit', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentPackageItem.unitsOfMeasurement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurement = new core_1.ComplexTypeNumberPropertyField('UnitsOfMeasurement', _this, 'Edm.Double');
        return _this;
    }
    return DocumentPackageItemField;
}(core_1.ComplexTypeField));
exports.DocumentPackageItemField = DocumentPackageItemField;
var DocumentPackageItem;
(function (DocumentPackageItem) {
    /**
     * Metadata information on all properties of the `DocumentPackageItem` complex type.
     */
    DocumentPackageItem._propertyMetadata = [{
            originalName: 'PackageNumber',
            name: 'packageNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'MeasureUnit',
            name: 'measureUnit',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnitsOfMeasurement',
            name: 'unitsOfMeasurement',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentPackageItem);
    }
    DocumentPackageItem.build = build;
})(DocumentPackageItem = exports.DocumentPackageItem || (exports.DocumentPackageItem = {}));
//# sourceMappingURL=DocumentPackageItem.js.map