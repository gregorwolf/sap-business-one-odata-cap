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
exports.TaxReportDocument = exports.TaxReportDocumentField = exports.createTaxReportDocument = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxReportDocument.build]] instead.
 */
function createTaxReportDocument(json) {
    return TaxReportDocument.build(json);
}
exports.createTaxReportDocument = createTaxReportDocument;
/**
 * TaxReportDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxReportDocumentField = /** @class */ (function (_super) {
    __extends(TaxReportDocumentField, _super);
    function TaxReportDocumentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxReportDocument.fromNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fromNumber = new v4_1.ComplexTypeNumberPropertyField('FromNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxReportDocument.toNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.toNumber = new v4_1.ComplexTypeNumberPropertyField('ToNumber', _this, 'Edm.Int32');
        return _this;
    }
    return TaxReportDocumentField;
}(v4_1.ComplexTypeField));
exports.TaxReportDocumentField = TaxReportDocumentField;
var TaxReportDocument;
(function (TaxReportDocument) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FromNumber: function (fromNumber) { return ({ fromNumber: v4_1.edmToTs(fromNumber, 'Edm.Int32') }); },
            ToNumber: function (toNumber) { return ({ toNumber: v4_1.edmToTs(toNumber, 'Edm.Int32') }); }
        });
    }
    TaxReportDocument.build = build;
})(TaxReportDocument = exports.TaxReportDocument || (exports.TaxReportDocument = {}));
//# sourceMappingURL=TaxReportDocument.js.map