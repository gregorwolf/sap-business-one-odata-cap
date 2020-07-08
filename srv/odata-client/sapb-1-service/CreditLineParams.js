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
exports.CreditLineParams = exports.CreditLineParamsField = exports.createCreditLineParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CreditLineParams.build]] instead.
 */
function createCreditLineParams(json) {
    return CreditLineParams.build(json);
}
exports.createCreditLineParams = createCreditLineParams;
/**
 * CreditLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreditLineParamsField = /** @class */ (function (_super) {
    __extends(CreditLineParamsField, _super);
    function CreditLineParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CreditLineParams.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        return _this;
    }
    return CreditLineParamsField;
}(v4_1.ComplexTypeField));
exports.CreditLineParamsField = CreditLineParamsField;
var CreditLineParams;
(function (CreditLineParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); }
        });
    }
    CreditLineParams.build = build;
})(CreditLineParams = exports.CreditLineParams || (exports.CreditLineParams = {}));
//# sourceMappingURL=CreditLineParams.js.map