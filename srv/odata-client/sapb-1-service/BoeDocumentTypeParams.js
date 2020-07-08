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
exports.BoeDocumentTypeParams = exports.BoeDocumentTypeParamsField = exports.createBoeDocumentTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BoeDocumentTypeParams.build]] instead.
 */
function createBoeDocumentTypeParams(json) {
    return BoeDocumentTypeParams.build(json);
}
exports.createBoeDocumentTypeParams = createBoeDocumentTypeParams;
/**
 * BoeDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BoeDocumentTypeParamsField = /** @class */ (function (_super) {
    __extends(BoeDocumentTypeParamsField, _super);
    function BoeDocumentTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BoeDocumentTypeParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeDocumentTypeParams.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new v4_1.ComplexTypeStringPropertyField('DocType', _this, 'Edm.String');
        return _this;
    }
    return BoeDocumentTypeParamsField;
}(v4_1.ComplexTypeField));
exports.BoeDocumentTypeParamsField = BoeDocumentTypeParamsField;
var BoeDocumentTypeParams;
(function (BoeDocumentTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            DocType: function (docType) { return ({ docType: v4_1.edmToTs(docType, 'Edm.String') }); }
        });
    }
    BoeDocumentTypeParams.build = build;
})(BoeDocumentTypeParams = exports.BoeDocumentTypeParams || (exports.BoeDocumentTypeParams = {}));
//# sourceMappingURL=BoeDocumentTypeParams.js.map