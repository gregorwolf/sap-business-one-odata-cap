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
exports.CancelCheckRowParams = exports.CancelCheckRowParamsField = exports.createCancelCheckRowParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CancelCheckRowParams.build]] instead.
 */
function createCancelCheckRowParams(json) {
    return CancelCheckRowParams.build(json);
}
exports.createCancelCheckRowParams = createCancelCheckRowParams;
/**
 * CancelCheckRowParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CancelCheckRowParamsField = /** @class */ (function (_super) {
    __extends(CancelCheckRowParamsField, _super);
    function CancelCheckRowParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CancelCheckRowParams.depositId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depositId = new v4_1.ComplexTypeNumberPropertyField('DepositID', _this, 'Edm.Int32');
        /**
         * Representation of the [[CancelCheckRowParams.checkId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkId = new v4_1.ComplexTypeNumberPropertyField('CheckID', _this, 'Edm.Int32');
        return _this;
    }
    return CancelCheckRowParamsField;
}(v4_1.ComplexTypeField));
exports.CancelCheckRowParamsField = CancelCheckRowParamsField;
var CancelCheckRowParams;
(function (CancelCheckRowParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DepositID: function (depositId) { return ({ depositId: v4_1.edmToTs(depositId, 'Edm.Int32') }); },
            CheckID: function (checkId) { return ({ checkId: v4_1.edmToTs(checkId, 'Edm.Int32') }); }
        });
    }
    CancelCheckRowParams.build = build;
})(CancelCheckRowParams = exports.CancelCheckRowParams || (exports.CancelCheckRowParams = {}));
//# sourceMappingURL=CancelCheckRowParams.js.map