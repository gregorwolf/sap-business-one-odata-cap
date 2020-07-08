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
exports.TaxCodeDeterminationParams = exports.TaxCodeDeterminationParamsField = exports.createTaxCodeDeterminationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationParams.build]] instead.
 */
function createTaxCodeDeterminationParams(json) {
    return TaxCodeDeterminationParams.build(json);
}
exports.createTaxCodeDeterminationParams = createTaxCodeDeterminationParams;
/**
 * TaxCodeDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationParamsField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationParamsField, _super);
    function TaxCodeDeterminationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxCodeDeterminationParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return TaxCodeDeterminationParamsField;
}(v4_1.ComplexTypeField));
exports.TaxCodeDeterminationParamsField = TaxCodeDeterminationParamsField;
var TaxCodeDeterminationParams;
(function (TaxCodeDeterminationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); }
        });
    }
    TaxCodeDeterminationParams.build = build;
})(TaxCodeDeterminationParams = exports.TaxCodeDeterminationParams || (exports.TaxCodeDeterminationParams = {}));
//# sourceMappingURL=TaxCodeDeterminationParams.js.map