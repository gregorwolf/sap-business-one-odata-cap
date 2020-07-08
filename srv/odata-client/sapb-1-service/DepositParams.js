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
exports.DepositParams = exports.DepositParamsField = exports.createDepositParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DepositParams.build]] instead.
 */
function createDepositParams(json) {
    return DepositParams.build(json);
}
exports.createDepositParams = createDepositParams;
/**
 * DepositParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DepositParamsField = /** @class */ (function (_super) {
    __extends(DepositParamsField, _super);
    function DepositParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DepositParams.depositNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depositNumber = new v4_1.ComplexTypeNumberPropertyField('DepositNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DepositParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DepositParams.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        return _this;
    }
    return DepositParamsField;
}(v4_1.ComplexTypeField));
exports.DepositParamsField = DepositParamsField;
var DepositParams;
(function (DepositParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DepositNumber: function (depositNumber) { return ({ depositNumber: v4_1.edmToTs(depositNumber, 'Edm.Int32') }); },
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); }
        });
    }
    DepositParams.build = build;
})(DepositParams = exports.DepositParams || (exports.DepositParams = {}));
//# sourceMappingURL=DepositParams.js.map