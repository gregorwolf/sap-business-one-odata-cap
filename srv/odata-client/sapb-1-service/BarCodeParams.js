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
exports.BarCodeParams = exports.BarCodeParamsField = exports.createBarCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BarCodeParams.build]] instead.
 */
function createBarCodeParams(json) {
    return BarCodeParams.build(json);
}
exports.createBarCodeParams = createBarCodeParams;
/**
 * BarCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BarCodeParamsField = /** @class */ (function (_super) {
    __extends(BarCodeParamsField, _super);
    function BarCodeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BarCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BarCodeParams.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[BarCodeParams.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BarCodeParams.barcode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barcode = new v4_1.ComplexTypeStringPropertyField('Barcode', _this, 'Edm.String');
        return _this;
    }
    return BarCodeParamsField;
}(v4_1.ComplexTypeField));
exports.BarCodeParamsField = BarCodeParamsField;
var BarCodeParams;
(function (BarCodeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            Barcode: function (barcode) { return ({ barcode: v4_1.edmToTs(barcode, 'Edm.String') }); }
        });
    }
    BarCodeParams.build = build;
})(BarCodeParams = exports.BarCodeParams || (exports.BarCodeParams = {}));
//# sourceMappingURL=BarCodeParams.js.map