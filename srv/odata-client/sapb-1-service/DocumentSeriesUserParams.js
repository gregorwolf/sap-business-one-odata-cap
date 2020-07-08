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
exports.DocumentSeriesUserParams = exports.DocumentSeriesUserParamsField = exports.createDocumentSeriesUserParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function DocumentSeriesUserParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentSeriesUserParams.document]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.document = new v4_1.ComplexTypeStringPropertyField('Document', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesUserParams.documentSubType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentSubType = new v4_1.ComplexTypeStringPropertyField('DocumentSubType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSeriesUserParams.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSeriesUserParams.user]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.user = new v4_1.ComplexTypeNumberPropertyField('User', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentSeriesUserParamsField;
}(v4_1.ComplexTypeField));
exports.DocumentSeriesUserParamsField = DocumentSeriesUserParamsField;
var DocumentSeriesUserParams;
(function (DocumentSeriesUserParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Document: function (document) { return ({ document: v4_1.edmToTs(document, 'Edm.String') }); },
            DocumentSubType: function (documentSubType) { return ({ documentSubType: v4_1.edmToTs(documentSubType, 'Edm.String') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); },
            User: function (user) { return ({ user: v4_1.edmToTs(user, 'Edm.Int32') }); }
        });
    }
    DocumentSeriesUserParams.build = build;
})(DocumentSeriesUserParams = exports.DocumentSeriesUserParams || (exports.DocumentSeriesUserParams = {}));
//# sourceMappingURL=DocumentSeriesUserParams.js.map