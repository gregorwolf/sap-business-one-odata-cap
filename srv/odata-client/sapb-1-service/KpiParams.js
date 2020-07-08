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
exports.KpiParams = exports.KpiParamsField = exports.createKpiParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[KpiParams.build]] instead.
 */
function createKpiParams(json) {
    return KpiParams.build(json);
}
exports.createKpiParams = createKpiParams;
/**
 * KpiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var KpiParamsField = /** @class */ (function (_super) {
    __extends(KpiParamsField, _super);
    function KpiParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[KpiParams.kpiCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiCode = new v4_1.ComplexTypeStringPropertyField('KPICode', _this, 'Edm.String');
        /**
         * Representation of the [[KpiParams.kpiName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiName = new v4_1.ComplexTypeStringPropertyField('KPIName', _this, 'Edm.String');
        return _this;
    }
    return KpiParamsField;
}(v4_1.ComplexTypeField));
exports.KpiParamsField = KpiParamsField;
var KpiParams;
(function (KpiParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            KPICode: function (kpiCode) { return ({ kpiCode: v4_1.edmToTs(kpiCode, 'Edm.String') }); },
            KPIName: function (kpiName) { return ({ kpiName: v4_1.edmToTs(kpiName, 'Edm.String') }); }
        });
    }
    KpiParams.build = build;
})(KpiParams = exports.KpiParams || (exports.KpiParams = {}));
//# sourceMappingURL=KpiParams.js.map