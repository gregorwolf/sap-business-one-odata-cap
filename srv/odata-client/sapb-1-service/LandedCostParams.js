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
exports.LandedCostParams = exports.LandedCostParamsField = exports.createLandedCostParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[LandedCostParams.build]] instead.
 */
function createLandedCostParams(json) {
    return LandedCostParams.build(json);
}
exports.createLandedCostParams = createLandedCostParams;
/**
 * LandedCostParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LandedCostParamsField = /** @class */ (function (_super) {
    __extends(LandedCostParamsField, _super);
    function LandedCostParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[LandedCostParams.landedCostNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.landedCostNumber = new v4_1.ComplexTypeNumberPropertyField('LandedCostNumber', _this, 'Edm.Int32');
        return _this;
    }
    return LandedCostParamsField;
}(v4_1.ComplexTypeField));
exports.LandedCostParamsField = LandedCostParamsField;
var LandedCostParams;
(function (LandedCostParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LandedCostNumber: function (landedCostNumber) { return ({ landedCostNumber: v4_1.edmToTs(landedCostNumber, 'Edm.Int32') }); }
        });
    }
    LandedCostParams.build = build;
})(LandedCostParams = exports.LandedCostParams || (exports.LandedCostParams = {}));
//# sourceMappingURL=LandedCostParams.js.map