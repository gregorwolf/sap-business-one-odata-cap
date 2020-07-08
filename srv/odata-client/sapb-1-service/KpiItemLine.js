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
exports.KpiItemLine = exports.KpiItemLineField = exports.createKpiItemLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[KpiItemLine.build]] instead.
 */
function createKpiItemLine(json) {
    return KpiItemLine.build(json);
}
exports.createKpiItemLine = createKpiItemLine;
/**
 * KpiItemLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var KpiItemLineField = /** @class */ (function (_super) {
    __extends(KpiItemLineField, _super);
    function KpiItemLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[KpiItemLine.kpiCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiCode = new v4_1.ComplexTypeStringPropertyField('KPICode', _this, 'Edm.String');
        /**
         * Representation of the [[KpiItemLine.kpiLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiLineNumber = new v4_1.ComplexTypeNumberPropertyField('KPILineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[KpiItemLine.kpiName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiName = new v4_1.ComplexTypeStringPropertyField('KPIName', _this, 'Edm.String');
        /**
         * Representation of the [[KpiItemLine.kpiValue1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue1 = new v4_1.ComplexTypeNumberPropertyField('KPIValue1', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue2 = new v4_1.ComplexTypeNumberPropertyField('KPIValue2', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue3 = new v4_1.ComplexTypeNumberPropertyField('KPIValue3', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue4 = new v4_1.ComplexTypeNumberPropertyField('KPIValue4', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue5 = new v4_1.ComplexTypeNumberPropertyField('KPIValue5', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue6 = new v4_1.ComplexTypeNumberPropertyField('KPIValue6', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue7 = new v4_1.ComplexTypeNumberPropertyField('KPIValue7', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue8 = new v4_1.ComplexTypeNumberPropertyField('KPIValue8', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue9 = new v4_1.ComplexTypeNumberPropertyField('KPIValue9', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue10 = new v4_1.ComplexTypeNumberPropertyField('KPIValue10', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue11]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue11 = new v4_1.ComplexTypeNumberPropertyField('KPIValue11', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue12 = new v4_1.ComplexTypeNumberPropertyField('KPIValue12', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue13 = new v4_1.ComplexTypeNumberPropertyField('KPIValue13', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue14]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue14 = new v4_1.ComplexTypeNumberPropertyField('KPIValue14', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue15]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue15 = new v4_1.ComplexTypeNumberPropertyField('KPIValue15', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue16]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue16 = new v4_1.ComplexTypeNumberPropertyField('KPIValue16', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue17]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue17 = new v4_1.ComplexTypeNumberPropertyField('KPIValue17', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue18]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue18 = new v4_1.ComplexTypeNumberPropertyField('KPIValue18', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue19]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue19 = new v4_1.ComplexTypeNumberPropertyField('KPIValue19', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue20]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue20 = new v4_1.ComplexTypeNumberPropertyField('KPIValue20', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue21]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue21 = new v4_1.ComplexTypeNumberPropertyField('KPIValue21', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue22]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue22 = new v4_1.ComplexTypeNumberPropertyField('KPIValue22', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue23]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue23 = new v4_1.ComplexTypeNumberPropertyField('KPIValue23', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue24]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue24 = new v4_1.ComplexTypeNumberPropertyField('KPIValue24', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue25]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue25 = new v4_1.ComplexTypeNumberPropertyField('KPIValue25', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue26]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue26 = new v4_1.ComplexTypeNumberPropertyField('KPIValue26', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue27]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue27 = new v4_1.ComplexTypeNumberPropertyField('KPIValue27', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue28]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue28 = new v4_1.ComplexTypeNumberPropertyField('KPIValue28', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue29]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue29 = new v4_1.ComplexTypeNumberPropertyField('KPIValue29', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue30]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue30 = new v4_1.ComplexTypeNumberPropertyField('KPIValue30', _this, 'Edm.Double');
        return _this;
    }
    return KpiItemLineField;
}(v4_1.ComplexTypeField));
exports.KpiItemLineField = KpiItemLineField;
var KpiItemLine;
(function (KpiItemLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            KPICode: function (kpiCode) { return ({ kpiCode: v4_1.edmToTs(kpiCode, 'Edm.String') }); },
            KPILineNumber: function (kpiLineNumber) { return ({ kpiLineNumber: v4_1.edmToTs(kpiLineNumber, 'Edm.Int32') }); },
            KPIName: function (kpiName) { return ({ kpiName: v4_1.edmToTs(kpiName, 'Edm.String') }); },
            KPIValue1: function (kpiValue1) { return ({ kpiValue1: v4_1.edmToTs(kpiValue1, 'Edm.Double') }); },
            KPIValue2: function (kpiValue2) { return ({ kpiValue2: v4_1.edmToTs(kpiValue2, 'Edm.Double') }); },
            KPIValue3: function (kpiValue3) { return ({ kpiValue3: v4_1.edmToTs(kpiValue3, 'Edm.Double') }); },
            KPIValue4: function (kpiValue4) { return ({ kpiValue4: v4_1.edmToTs(kpiValue4, 'Edm.Double') }); },
            KPIValue5: function (kpiValue5) { return ({ kpiValue5: v4_1.edmToTs(kpiValue5, 'Edm.Double') }); },
            KPIValue6: function (kpiValue6) { return ({ kpiValue6: v4_1.edmToTs(kpiValue6, 'Edm.Double') }); },
            KPIValue7: function (kpiValue7) { return ({ kpiValue7: v4_1.edmToTs(kpiValue7, 'Edm.Double') }); },
            KPIValue8: function (kpiValue8) { return ({ kpiValue8: v4_1.edmToTs(kpiValue8, 'Edm.Double') }); },
            KPIValue9: function (kpiValue9) { return ({ kpiValue9: v4_1.edmToTs(kpiValue9, 'Edm.Double') }); },
            KPIValue10: function (kpiValue10) { return ({ kpiValue10: v4_1.edmToTs(kpiValue10, 'Edm.Double') }); },
            KPIValue11: function (kpiValue11) { return ({ kpiValue11: v4_1.edmToTs(kpiValue11, 'Edm.Double') }); },
            KPIValue12: function (kpiValue12) { return ({ kpiValue12: v4_1.edmToTs(kpiValue12, 'Edm.Double') }); },
            KPIValue13: function (kpiValue13) { return ({ kpiValue13: v4_1.edmToTs(kpiValue13, 'Edm.Double') }); },
            KPIValue14: function (kpiValue14) { return ({ kpiValue14: v4_1.edmToTs(kpiValue14, 'Edm.Double') }); },
            KPIValue15: function (kpiValue15) { return ({ kpiValue15: v4_1.edmToTs(kpiValue15, 'Edm.Double') }); },
            KPIValue16: function (kpiValue16) { return ({ kpiValue16: v4_1.edmToTs(kpiValue16, 'Edm.Double') }); },
            KPIValue17: function (kpiValue17) { return ({ kpiValue17: v4_1.edmToTs(kpiValue17, 'Edm.Double') }); },
            KPIValue18: function (kpiValue18) { return ({ kpiValue18: v4_1.edmToTs(kpiValue18, 'Edm.Double') }); },
            KPIValue19: function (kpiValue19) { return ({ kpiValue19: v4_1.edmToTs(kpiValue19, 'Edm.Double') }); },
            KPIValue20: function (kpiValue20) { return ({ kpiValue20: v4_1.edmToTs(kpiValue20, 'Edm.Double') }); },
            KPIValue21: function (kpiValue21) { return ({ kpiValue21: v4_1.edmToTs(kpiValue21, 'Edm.Double') }); },
            KPIValue22: function (kpiValue22) { return ({ kpiValue22: v4_1.edmToTs(kpiValue22, 'Edm.Double') }); },
            KPIValue23: function (kpiValue23) { return ({ kpiValue23: v4_1.edmToTs(kpiValue23, 'Edm.Double') }); },
            KPIValue24: function (kpiValue24) { return ({ kpiValue24: v4_1.edmToTs(kpiValue24, 'Edm.Double') }); },
            KPIValue25: function (kpiValue25) { return ({ kpiValue25: v4_1.edmToTs(kpiValue25, 'Edm.Double') }); },
            KPIValue26: function (kpiValue26) { return ({ kpiValue26: v4_1.edmToTs(kpiValue26, 'Edm.Double') }); },
            KPIValue27: function (kpiValue27) { return ({ kpiValue27: v4_1.edmToTs(kpiValue27, 'Edm.Double') }); },
            KPIValue28: function (kpiValue28) { return ({ kpiValue28: v4_1.edmToTs(kpiValue28, 'Edm.Double') }); },
            KPIValue29: function (kpiValue29) { return ({ kpiValue29: v4_1.edmToTs(kpiValue29, 'Edm.Double') }); },
            KPIValue30: function (kpiValue30) { return ({ kpiValue30: v4_1.edmToTs(kpiValue30, 'Edm.Double') }); }
        });
    }
    KpiItemLine.build = build;
})(KpiItemLine = exports.KpiItemLine || (exports.KpiItemLine = {}));
//# sourceMappingURL=KpiItemLine.js.map