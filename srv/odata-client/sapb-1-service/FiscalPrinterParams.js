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
exports.FiscalPrinterParams = exports.FiscalPrinterParamsField = exports.createFiscalPrinterParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[FiscalPrinterParams.build]] instead.
 */
function createFiscalPrinterParams(json) {
    return FiscalPrinterParams.build(json);
}
exports.createFiscalPrinterParams = createFiscalPrinterParams;
/**
 * FiscalPrinterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FiscalPrinterParamsField = /** @class */ (function (_super) {
    __extends(FiscalPrinterParamsField, _super);
    function FiscalPrinterParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FiscalPrinterParams.equipmentNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equipmentNo = new v4_1.ComplexTypeStringPropertyField('EquipmentNo', _this, 'Edm.String');
        return _this;
    }
    return FiscalPrinterParamsField;
}(v4_1.ComplexTypeField));
exports.FiscalPrinterParamsField = FiscalPrinterParamsField;
var FiscalPrinterParams;
(function (FiscalPrinterParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EquipmentNo: function (equipmentNo) { return ({ equipmentNo: v4_1.edmToTs(equipmentNo, 'Edm.String') }); }
        });
    }
    FiscalPrinterParams.build = build;
})(FiscalPrinterParams = exports.FiscalPrinterParams || (exports.FiscalPrinterParams = {}));
//# sourceMappingURL=FiscalPrinterParams.js.map