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
exports.BoeLineParams = exports.BoeLineParamsField = exports.createBoeLineParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BoeLineParams.build]] instead.
 */
function createBoeLineParams(json) {
    return BoeLineParams.build(json);
}
exports.createBoeLineParams = createBoeLineParams;
/**
 * BoeLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BoeLineParamsField = /** @class */ (function (_super) {
    __extends(BoeLineParamsField, _super);
    function BoeLineParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BoeLineParams.boeKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeKey = new v4_1.ComplexTypeNumberPropertyField('BOEKey', _this, 'Edm.Int32');
        return _this;
    }
    return BoeLineParamsField;
}(v4_1.ComplexTypeField));
exports.BoeLineParamsField = BoeLineParamsField;
var BoeLineParams;
(function (BoeLineParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BOEKey: function (boeKey) { return ({ boeKey: v4_1.edmToTs(boeKey, 'Edm.Int32') }); }
        });
    }
    BoeLineParams.build = build;
})(BoeLineParams = exports.BoeLineParams || (exports.BoeLineParams = {}));
//# sourceMappingURL=BoeLineParams.js.map