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
exports.DocumentChangeMenuName = exports.DocumentChangeMenuNameField = exports.createDocumentChangeMenuName = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentChangeMenuName.build]] instead.
 */
function createDocumentChangeMenuName(json) {
    return DocumentChangeMenuName.build(json);
}
exports.createDocumentChangeMenuName = createDocumentChangeMenuName;
/**
 * DocumentChangeMenuNameField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentChangeMenuNameField = /** @class */ (function (_super) {
    __extends(DocumentChangeMenuNameField, _super);
    /**
     * Creates an instance of DocumentChangeMenuNameField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentChangeMenuNameField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentChangeMenuName) || this;
        /**
         * Representation of the [[DocumentChangeMenuName.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new core_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentChangeMenuName.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new core_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentChangeMenuName.changedMenuName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changedMenuName = new core_1.ComplexTypeStringPropertyField('ChangedMenuName', _this, 'Edm.String');
        return _this;
    }
    return DocumentChangeMenuNameField;
}(core_1.ComplexTypeField));
exports.DocumentChangeMenuNameField = DocumentChangeMenuNameField;
var DocumentChangeMenuName;
(function (DocumentChangeMenuName) {
    /**
     * Metadata information on all properties of the `DocumentChangeMenuName` complex type.
     */
    DocumentChangeMenuName._propertyMetadata = [{
            originalName: 'Document',
            name: 'document',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentSubType',
            name: 'documentSubType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ChangedMenuName',
            name: 'changedMenuName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentChangeMenuName);
    }
    DocumentChangeMenuName.build = build;
})(DocumentChangeMenuName = exports.DocumentChangeMenuName || (exports.DocumentChangeMenuName = {}));
//# sourceMappingURL=DocumentChangeMenuName.js.map