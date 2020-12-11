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
exports.DocumentPackage = exports.DocumentPackageField = exports.createDocumentPackage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DocumentPackageItem_1 = require("./DocumentPackageItem");
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of DocumentPackageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentPackageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentPackage) || this;
        /**
         * Representation of the [[DocumentPackage.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new core_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackage.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeStringPropertyField('Type', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentPackage.totalWeight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalWeight = new core_1.ComplexTypeNumberPropertyField('TotalWeight', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentPackage.units]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.units = new core_1.ComplexTypeNumberPropertyField('Units', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentPackage.documentPackageItems]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPackageItems = new core_1.CollectionField('DocumentPackageItems', _this, DocumentPackageItem_1.DocumentPackageItem);
        return _this;
    }
    return DocumentPackageField;
}(core_1.ComplexTypeField));
exports.DocumentPackageField = DocumentPackageField;
var DocumentPackage;
(function (DocumentPackage) {
    /**
     * Metadata information on all properties of the `DocumentPackage` complex type.
     */
    DocumentPackage._propertyMetadata = [{
            originalName: 'Number',
            name: 'number',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TotalWeight',
            name: 'totalWeight',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Units',
            name: 'units',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentPackageItems',
            name: 'documentPackageItems',
            type: DocumentPackageItem_1.DocumentPackageItem,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentPackage);
    }
    DocumentPackage.build = build;
})(DocumentPackage = exports.DocumentPackage || (exports.DocumentPackage = {}));
//# sourceMappingURL=DocumentPackage.js.map