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
exports.TaxCodeDeterminationTcdByUsage = exports.TaxCodeDeterminationTcdByUsageField = exports.createTaxCodeDeterminationTcdByUsage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdByUsage.build]] instead.
 */
function createTaxCodeDeterminationTcdByUsage(json) {
    return TaxCodeDeterminationTcdByUsage.build(json);
}
exports.createTaxCodeDeterminationTcdByUsage = createTaxCodeDeterminationTcdByUsage;
/**
 * TaxCodeDeterminationTcdByUsageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdByUsageField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdByUsageField, _super);
    function TaxCodeDeterminationTcdByUsageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.usageCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usageCode = new v4_1.ComplexTypeNumberPropertyField('UsageCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxCodeDeterminationTcdByUsage.expTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expTaxCode = new v4_1.ComplexTypeStringPropertyField('ExpTaxCode', _this, 'Edm.String');
        return _this;
    }
    return TaxCodeDeterminationTcdByUsageField;
}(v4_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdByUsageField = TaxCodeDeterminationTcdByUsageField;
var TaxCodeDeterminationTcdByUsage;
(function (TaxCodeDeterminationTcdByUsage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            UsageCode: function (usageCode) { return ({ usageCode: v4_1.edmToTs(usageCode, 'Edm.Int32') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            ExpTaxCode: function (expTaxCode) { return ({ expTaxCode: v4_1.edmToTs(expTaxCode, 'Edm.String') }); }
        });
    }
    TaxCodeDeterminationTcdByUsage.build = build;
})(TaxCodeDeterminationTcdByUsage = exports.TaxCodeDeterminationTcdByUsage || (exports.TaxCodeDeterminationTcdByUsage = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdByUsage.js.map