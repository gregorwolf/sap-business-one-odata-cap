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
exports.AccountSegmentationParams = exports.AccountSegmentationParamsField = exports.createAccountSegmentationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationParams.build]] instead.
 */
function createAccountSegmentationParams(json) {
    return AccountSegmentationParams.build(json);
}
exports.createAccountSegmentationParams = createAccountSegmentationParams;
/**
 * AccountSegmentationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AccountSegmentationParamsField = /** @class */ (function (_super) {
    __extends(AccountSegmentationParamsField, _super);
    function AccountSegmentationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AccountSegmentationParams.numerator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numerator = new v4_1.ComplexTypeNumberPropertyField('Numerator', _this, 'Edm.Int32');
        return _this;
    }
    return AccountSegmentationParamsField;
}(v4_1.ComplexTypeField));
exports.AccountSegmentationParamsField = AccountSegmentationParamsField;
var AccountSegmentationParams;
(function (AccountSegmentationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Numerator: function (numerator) { return ({ numerator: v4_1.edmToTs(numerator, 'Edm.Int32') }); }
        });
    }
    AccountSegmentationParams.build = build;
})(AccountSegmentationParams = exports.AccountSegmentationParams || (exports.AccountSegmentationParams = {}));
//# sourceMappingURL=AccountSegmentationParams.js.map