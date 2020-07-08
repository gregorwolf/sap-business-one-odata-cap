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
exports.BpFiscalTaxId = exports.BpFiscalTaxIdField = exports.createBpFiscalTaxId = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BpFiscalTaxId.build]] instead.
 */
function createBpFiscalTaxId(json) {
    return BpFiscalTaxId.build(json);
}
exports.createBpFiscalTaxId = createBpFiscalTaxId;
/**
 * BpFiscalTaxIdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpFiscalTaxIdField = /** @class */ (function (_super) {
    __extends(BpFiscalTaxIdField, _super);
    function BpFiscalTaxIdField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpFiscalTaxId.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new v4_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.cnaeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cnaeCode = new v4_1.ComplexTypeNumberPropertyField('CNAECode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpFiscalTaxId.taxId0]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId0 = new v4_1.ComplexTypeStringPropertyField('TaxId0', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId1 = new v4_1.ComplexTypeStringPropertyField('TaxId1', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId2 = new v4_1.ComplexTypeStringPropertyField('TaxId2', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId3 = new v4_1.ComplexTypeStringPropertyField('TaxId3', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId4 = new v4_1.ComplexTypeStringPropertyField('TaxId4', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId5 = new v4_1.ComplexTypeStringPropertyField('TaxId5', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId6 = new v4_1.ComplexTypeStringPropertyField('TaxId6', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId7 = new v4_1.ComplexTypeStringPropertyField('TaxId7', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId8 = new v4_1.ComplexTypeStringPropertyField('TaxId8', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId9 = new v4_1.ComplexTypeStringPropertyField('TaxId9', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId10 = new v4_1.ComplexTypeStringPropertyField('TaxId10', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId11]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId11 = new v4_1.ComplexTypeStringPropertyField('TaxId11', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId12 = new v4_1.ComplexTypeStringPropertyField('TaxId12', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId13 = new v4_1.ComplexTypeStringPropertyField('TaxId13', _this, 'Edm.String');
        return _this;
    }
    return BpFiscalTaxIdField;
}(v4_1.ComplexTypeField));
exports.BpFiscalTaxIdField = BpFiscalTaxIdField;
var BpFiscalTaxId;
(function (BpFiscalTaxId) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Address: function (address) { return ({ address: v4_1.edmToTs(address, 'Edm.String') }); },
            CNAECode: function (cnaeCode) { return ({ cnaeCode: v4_1.edmToTs(cnaeCode, 'Edm.Int32') }); },
            TaxId0: function (taxId0) { return ({ taxId0: v4_1.edmToTs(taxId0, 'Edm.String') }); },
            TaxId1: function (taxId1) { return ({ taxId1: v4_1.edmToTs(taxId1, 'Edm.String') }); },
            TaxId2: function (taxId2) { return ({ taxId2: v4_1.edmToTs(taxId2, 'Edm.String') }); },
            TaxId3: function (taxId3) { return ({ taxId3: v4_1.edmToTs(taxId3, 'Edm.String') }); },
            TaxId4: function (taxId4) { return ({ taxId4: v4_1.edmToTs(taxId4, 'Edm.String') }); },
            TaxId5: function (taxId5) { return ({ taxId5: v4_1.edmToTs(taxId5, 'Edm.String') }); },
            TaxId6: function (taxId6) { return ({ taxId6: v4_1.edmToTs(taxId6, 'Edm.String') }); },
            TaxId7: function (taxId7) { return ({ taxId7: v4_1.edmToTs(taxId7, 'Edm.String') }); },
            TaxId8: function (taxId8) { return ({ taxId8: v4_1.edmToTs(taxId8, 'Edm.String') }); },
            TaxId9: function (taxId9) { return ({ taxId9: v4_1.edmToTs(taxId9, 'Edm.String') }); },
            TaxId10: function (taxId10) { return ({ taxId10: v4_1.edmToTs(taxId10, 'Edm.String') }); },
            TaxId11: function (taxId11) { return ({ taxId11: v4_1.edmToTs(taxId11, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            TaxId12: function (taxId12) { return ({ taxId12: v4_1.edmToTs(taxId12, 'Edm.String') }); },
            TaxId13: function (taxId13) { return ({ taxId13: v4_1.edmToTs(taxId13, 'Edm.String') }); }
        });
    }
    BpFiscalTaxId.build = build;
})(BpFiscalTaxId = exports.BpFiscalTaxId || (exports.BpFiscalTaxId = {}));
//# sourceMappingURL=BpFiscalTaxId.js.map