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
exports.AdvancedGlAccountParams = exports.AdvancedGlAccountParamsField = exports.createAdvancedGlAccountParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountParams.build]] instead.
 */
function createAdvancedGlAccountParams(json) {
    return AdvancedGlAccountParams.build(json);
}
exports.createAdvancedGlAccountParams = createAdvancedGlAccountParams;
/**
 * AdvancedGlAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AdvancedGlAccountParamsField = /** @class */ (function (_super) {
    __extends(AdvancedGlAccountParamsField, _super);
    function AdvancedGlAccountParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AdvancedGlAccountParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new v4_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new v4_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new v4_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.postingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDate = new v4_1.ComplexTypeDatePropertyField('PostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[AdvancedGlAccountParams.usage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usage = new v4_1.ComplexTypeNumberPropertyField('Usage', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf1 = new v4_1.ComplexTypeStringPropertyField('UDF1', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf2 = new v4_1.ComplexTypeStringPropertyField('UDF2', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf3 = new v4_1.ComplexTypeStringPropertyField('UDF3', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf4 = new v4_1.ComplexTypeStringPropertyField('UDF4', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf5 = new v4_1.ComplexTypeStringPropertyField('UDF5', _this, 'Edm.String');
        return _this;
    }
    return AdvancedGlAccountParamsField;
}(v4_1.ComplexTypeField));
exports.AdvancedGlAccountParamsField = AdvancedGlAccountParamsField;
var AdvancedGlAccountParams;
(function (AdvancedGlAccountParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            ShipToCountry: function (shipToCountry) { return ({ shipToCountry: v4_1.edmToTs(shipToCountry, 'Edm.String') }); },
            ShipToState: function (shipToState) { return ({ shipToState: v4_1.edmToTs(shipToState, 'Edm.String') }); },
            VatGroup: function (vatGroup) { return ({ vatGroup: v4_1.edmToTs(vatGroup, 'Edm.String') }); },
            PostingDate: function (postingDate) { return ({ postingDate: v4_1.edmToTs(postingDate, 'Edm.DateTimeOffset') }); },
            Usage: function (usage) { return ({ usage: v4_1.edmToTs(usage, 'Edm.Int32') }); },
            UDF1: function (udf1) { return ({ udf1: v4_1.edmToTs(udf1, 'Edm.String') }); },
            UDF2: function (udf2) { return ({ udf2: v4_1.edmToTs(udf2, 'Edm.String') }); },
            UDF3: function (udf3) { return ({ udf3: v4_1.edmToTs(udf3, 'Edm.String') }); },
            UDF4: function (udf4) { return ({ udf4: v4_1.edmToTs(udf4, 'Edm.String') }); },
            UDF5: function (udf5) { return ({ udf5: v4_1.edmToTs(udf5, 'Edm.String') }); }
        });
    }
    AdvancedGlAccountParams.build = build;
})(AdvancedGlAccountParams = exports.AdvancedGlAccountParams || (exports.AdvancedGlAccountParams = {}));
//# sourceMappingURL=AdvancedGlAccountParams.js.map