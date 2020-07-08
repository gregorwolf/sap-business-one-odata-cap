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
exports.BrazilFuelIndexerParams = exports.BrazilFuelIndexerParamsField = exports.createBrazilFuelIndexerParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BrazilFuelIndexerParams.build]] instead.
 */
function createBrazilFuelIndexerParams(json) {
    return BrazilFuelIndexerParams.build(json);
}
exports.createBrazilFuelIndexerParams = createBrazilFuelIndexerParams;
/**
 * BrazilFuelIndexerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BrazilFuelIndexerParamsField = /** @class */ (function (_super) {
    __extends(BrazilFuelIndexerParamsField, _super);
    function BrazilFuelIndexerParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BrazilFuelIndexerParams.fuelId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fuelId = new v4_1.ComplexTypeNumberPropertyField('FuelID', _this, 'Edm.Int32');
        /**
         * Representation of the [[BrazilFuelIndexerParams.fuelGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fuelGroupCode = new v4_1.ComplexTypeNumberPropertyField('FuelGroupCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BrazilFuelIndexerParams.fuelCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fuelCode = new v4_1.ComplexTypeStringPropertyField('FuelCode', _this, 'Edm.String');
        /**
         * Representation of the [[BrazilFuelIndexerParams.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return BrazilFuelIndexerParamsField;
}(v4_1.ComplexTypeField));
exports.BrazilFuelIndexerParamsField = BrazilFuelIndexerParamsField;
var BrazilFuelIndexerParams;
(function (BrazilFuelIndexerParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FuelID: function (fuelId) { return ({ fuelId: v4_1.edmToTs(fuelId, 'Edm.Int32') }); },
            FuelGroupCode: function (fuelGroupCode) { return ({ fuelGroupCode: v4_1.edmToTs(fuelGroupCode, 'Edm.Int32') }); },
            FuelCode: function (fuelCode) { return ({ fuelCode: v4_1.edmToTs(fuelCode, 'Edm.String') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); }
        });
    }
    BrazilFuelIndexerParams.build = build;
})(BrazilFuelIndexerParams = exports.BrazilFuelIndexerParams || (exports.BrazilFuelIndexerParams = {}));
//# sourceMappingURL=BrazilFuelIndexerParams.js.map