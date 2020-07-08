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
exports.DocumentPackage = exports.DocumentPackageField = exports.createDocumentPackage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DocumentPackageItem_1 = require("./DocumentPackageItem");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentPackage.build]] instead.
 */
function createDocumentPackage(json) {
    return DocumentPackage.build(json);
}
exports.createDocumentPackage = createDocumentPackage;
/**
 * DocumentPackageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentPackageField = /** @class */ (function (_super) {
    __extends(DocumentPackageField, _super);
    function DocumentPackageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentPackage.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new v4_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackage.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new v4_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentPackage.totalWeight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalWeight = new v4_1.ComplexTypeNumberPropertyField('TotalWeight', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentPackage.units]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.units = new v4_1.ComplexTypeNumberPropertyField('Units', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackage.documentPackageItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPackageItems = new DocumentPackageItem_1.DocumentPackageItemField('DocumentPackageItems', _this);
        return _this;
    }
    return DocumentPackageField;
}(v4_1.ComplexTypeField));
exports.DocumentPackageField = DocumentPackageField;
var DocumentPackage;
(function (DocumentPackage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Number: function (number) { return ({ number: v4_1.edmToTs(number, 'Edm.Int32') }); },
            Type: function (type) { return ({ type: v4_1.edmToTs(type, 'Edm.String') }); },
            TotalWeight: function (totalWeight) { return ({ totalWeight: v4_1.edmToTs(totalWeight, 'Edm.Double') }); },
            Units: function (units) { return ({ units: v4_1.edmToTs(units, 'Edm.Int32') }); },
            DocumentPackageItems: function (documentPackageItems) { return ({ documentPackageItems: DocumentPackageItem_1.DocumentPackageItem.build(documentPackageItems) }); }
        });
    }
    DocumentPackage.build = build;
})(DocumentPackage = exports.DocumentPackage || (exports.DocumentPackage = {}));
//# sourceMappingURL=DocumentPackage.js.map