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
exports.DocumentSeriesParams = exports.DocumentSeriesParamsField = exports.createDocumentSeriesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentSeriesParams.build]] instead.
 */
function createDocumentSeriesParams(json) {
    return DocumentSeriesParams.build(json);
}
exports.createDocumentSeriesParams = createDocumentSeriesParams;
/**
 * DocumentSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentSeriesParamsField = /** @class */ (function (_super) {
    __extends(DocumentSeriesParamsField, _super);
    /**
     * Creates an instance of DocumentSeriesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentSeriesParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentSeriesParams) || this;
        /**
         * Representation of the [[DocumentSeriesParams.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new core_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesParams.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new core_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesParams.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new core_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentSeriesParamsField;
}(core_1.ComplexTypeField));
exports.DocumentSeriesParamsField = DocumentSeriesParamsField;
var DocumentSeriesParams;
(function (DocumentSeriesParams) {
    /**
     * Metadata information on all properties of the `DocumentSeriesParams` complex type.
     */
    DocumentSeriesParams._propertyMetadata = [{
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
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentSeriesParams);
    }
    DocumentSeriesParams.build = build;
})(DocumentSeriesParams = exports.DocumentSeriesParams || (exports.DocumentSeriesParams = {}));
//# sourceMappingURL=DocumentSeriesParams.js.map