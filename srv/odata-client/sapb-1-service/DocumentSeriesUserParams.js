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
exports.DocumentSeriesUserParams = exports.DocumentSeriesUserParamsField = exports.createDocumentSeriesUserParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesUserParams.build]] instead.
 */
function createDocumentSeriesUserParams(json) {
    return DocumentSeriesUserParams.build(json);
}
exports.createDocumentSeriesUserParams = createDocumentSeriesUserParams;
/**
 * DocumentSeriesUserParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentSeriesUserParamsField = /** @class */ (function (_super) {
    __extends(DocumentSeriesUserParamsField, _super);
    /**
     * Creates an instance of DocumentSeriesUserParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentSeriesUserParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentSeriesUserParams) || this;
        /**
         * Representation of the [[DocumentSeriesUserParams.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new core_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesUserParams.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new core_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesUserParams.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new core_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSeriesUserParams.user]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.user = new core_1.ComplexTypeNumberPropertyField('User', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentSeriesUserParamsField;
}(core_1.ComplexTypeField));
exports.DocumentSeriesUserParamsField = DocumentSeriesUserParamsField;
var DocumentSeriesUserParams;
(function (DocumentSeriesUserParams) {
    /**
     * Metadata information on all properties of the `DocumentSeriesUserParams` complex type.
     */
    DocumentSeriesUserParams._propertyMetadata = [{
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
            originalName: 'Series',
            name: 'series',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'User',
            name: 'user',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentSeriesUserParams);
    }
    DocumentSeriesUserParams.build = build;
})(DocumentSeriesUserParams = exports.DocumentSeriesUserParams || (exports.DocumentSeriesUserParams = {}));
//# sourceMappingURL=DocumentSeriesUserParams.js.map