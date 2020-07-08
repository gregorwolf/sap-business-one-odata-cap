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
exports.DocumentSeriesParams = exports.DocumentSeriesParamsField = exports.createDocumentSeriesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function DocumentSeriesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentSeriesParams.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new v4_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesParams.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new v4_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesParams.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentSeriesParamsField;
}(v4_1.ComplexTypeField));
exports.DocumentSeriesParamsField = DocumentSeriesParamsField;
var DocumentSeriesParams;
(function (DocumentSeriesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Document: function (document) { return ({ document: v4_1.edmToTs(document, 'Edm.String') }); },
            DocumentSubType: function (documentSubType) { return ({ documentSubType: v4_1.edmToTs(documentSubType, 'Edm.String') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); }
        });
    }
    DocumentSeriesParams.build = build;
})(DocumentSeriesParams = exports.DocumentSeriesParams || (exports.DocumentSeriesParams = {}));
//# sourceMappingURL=DocumentSeriesParams.js.map