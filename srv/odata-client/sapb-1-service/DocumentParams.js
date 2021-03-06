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
exports.DocumentParams = exports.DocumentParamsField = exports.createDocumentParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentParams.build]] instead.
 */
function createDocumentParams(json) {
    return DocumentParams.build(json);
}
exports.createDocumentParams = createDocumentParams;
/**
 * DocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentParamsField = /** @class */ (function (_super) {
    __extends(DocumentParamsField, _super);
    /**
     * Creates an instance of DocumentParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentParams) || this;
        /**
         * Representation of the [[DocumentParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentParamsField;
}(core_1.ComplexTypeField));
exports.DocumentParamsField = DocumentParamsField;
var DocumentParams;
(function (DocumentParams) {
    /**
     * Metadata information on all properties of the `DocumentParams` complex type.
     */
    DocumentParams._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentParams);
    }
    DocumentParams.build = build;
})(DocumentParams = exports.DocumentParams || (exports.DocumentParams = {}));
//# sourceMappingURL=DocumentParams.js.map