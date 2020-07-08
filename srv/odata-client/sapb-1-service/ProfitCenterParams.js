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
exports.ProfitCenterParams = exports.ProfitCenterParamsField = exports.createProfitCenterParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ProfitCenterParams.build]] instead.
 */
function createProfitCenterParams(json) {
    return ProfitCenterParams.build(json);
}
exports.createProfitCenterParams = createProfitCenterParams;
/**
 * ProfitCenterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProfitCenterParamsField = /** @class */ (function (_super) {
    __extends(ProfitCenterParamsField, _super);
    function ProfitCenterParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProfitCenterParams.centerCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.centerCode = new v4_1.ComplexTypeStringPropertyField('CenterCode', _this, 'Edm.String');
        /**
         * Representation of the [[ProfitCenterParams.centerName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.centerName = new v4_1.ComplexTypeStringPropertyField('CenterName', _this, 'Edm.String');
        return _this;
    }
    return ProfitCenterParamsField;
}(v4_1.ComplexTypeField));
exports.ProfitCenterParamsField = ProfitCenterParamsField;
var ProfitCenterParams;
(function (ProfitCenterParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CenterCode: function (centerCode) { return ({ centerCode: v4_1.edmToTs(centerCode, 'Edm.String') }); },
            CenterName: function (centerName) { return ({ centerName: v4_1.edmToTs(centerName, 'Edm.String') }); }
        });
    }
    ProfitCenterParams.build = build;
})(ProfitCenterParams = exports.ProfitCenterParams || (exports.ProfitCenterParams = {}));
//# sourceMappingURL=ProfitCenterParams.js.map