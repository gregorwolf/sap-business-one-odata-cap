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
exports.DocumentPackageItem = exports.DocumentPackageItemField = exports.createDocumentPackageItem = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function DocumentPackageItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentPackageItem.packageNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageNumber = new v4_1.ComplexTypeNumberPropertyField('PackageNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackageItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentPackageItem.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentPackageItem.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackageItem.measureUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measureUnit = new v4_1.ComplexTypeStringPropertyField('MeasureUnit', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentPackageItem.unitsOfMeasurement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurement = new v4_1.ComplexTypeNumberPropertyField('UnitsOfMeasurement', _this, 'Edm.Double');
        return _this;
    }
    return DocumentPackageItemField;
}(v4_1.ComplexTypeField));
exports.DocumentPackageItemField = DocumentPackageItemField;
var DocumentPackageItem;
(function (DocumentPackageItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PackageNumber: function (packageNumber) { return ({ packageNumber: v4_1.edmToTs(packageNumber, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            MeasureUnit: function (measureUnit) { return ({ measureUnit: v4_1.edmToTs(measureUnit, 'Edm.String') }); },
            UnitsOfMeasurement: function (unitsOfMeasurement) { return ({ unitsOfMeasurement: v4_1.edmToTs(unitsOfMeasurement, 'Edm.Double') }); }
        });
    }
    DocumentPackageItem.build = build;
})(DocumentPackageItem = exports.DocumentPackageItem || (exports.DocumentPackageItem = {}));
//# sourceMappingURL=DocumentPackageItem.js.map