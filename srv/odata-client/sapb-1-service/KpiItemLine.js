"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of KpiItemLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function KpiItemLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, KpiItemLine) || this;
        /**
         * Representation of the [[KpiItemLine.kpiCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiCode = new core_1.ComplexTypeStringPropertyField('KPICode', _this, 'Edm.String');
        /**
         * Representation of the [[KpiItemLine.kpiLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiLineNumber = new core_1.ComplexTypeNumberPropertyField('KPILineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[KpiItemLine.kpiName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiName = new core_1.ComplexTypeStringPropertyField('KPIName', _this, 'Edm.String');
        /**
         * Representation of the [[KpiItemLine.kpiValue1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue1 = new core_1.ComplexTypeNumberPropertyField('KPIValue1', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue2 = new core_1.ComplexTypeNumberPropertyField('KPIValue2', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue3 = new core_1.ComplexTypeNumberPropertyField('KPIValue3', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue4 = new core_1.ComplexTypeNumberPropertyField('KPIValue4', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue5 = new core_1.ComplexTypeNumberPropertyField('KPIValue5', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue6 = new core_1.ComplexTypeNumberPropertyField('KPIValue6', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue7 = new core_1.ComplexTypeNumberPropertyField('KPIValue7', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue8 = new core_1.ComplexTypeNumberPropertyField('KPIValue8', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue9 = new core_1.ComplexTypeNumberPropertyField('KPIValue9', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue10 = new core_1.ComplexTypeNumberPropertyField('KPIValue10', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue11]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue11 = new core_1.ComplexTypeNumberPropertyField('KPIValue11', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue12 = new core_1.ComplexTypeNumberPropertyField('KPIValue12', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue13 = new core_1.ComplexTypeNumberPropertyField('KPIValue13', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue14]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue14 = new core_1.ComplexTypeNumberPropertyField('KPIValue14', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue15]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue15 = new core_1.ComplexTypeNumberPropertyField('KPIValue15', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue16]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue16 = new core_1.ComplexTypeNumberPropertyField('KPIValue16', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue17]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue17 = new core_1.ComplexTypeNumberPropertyField('KPIValue17', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue18]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue18 = new core_1.ComplexTypeNumberPropertyField('KPIValue18', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue19]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue19 = new core_1.ComplexTypeNumberPropertyField('KPIValue19', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue20]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue20 = new core_1.ComplexTypeNumberPropertyField('KPIValue20', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue21]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue21 = new core_1.ComplexTypeNumberPropertyField('KPIValue21', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue22]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue22 = new core_1.ComplexTypeNumberPropertyField('KPIValue22', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue23]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue23 = new core_1.ComplexTypeNumberPropertyField('KPIValue23', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue24]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue24 = new core_1.ComplexTypeNumberPropertyField('KPIValue24', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue25]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue25 = new core_1.ComplexTypeNumberPropertyField('KPIValue25', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue26]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue26 = new core_1.ComplexTypeNumberPropertyField('KPIValue26', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue27]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue27 = new core_1.ComplexTypeNumberPropertyField('KPIValue27', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue28]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue28 = new core_1.ComplexTypeNumberPropertyField('KPIValue28', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue29]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue29 = new core_1.ComplexTypeNumberPropertyField('KPIValue29', _this, 'Edm.Double');
        /**
         * Representation of the [[KpiItemLine.kpiValue30]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.kpiValue30 = new core_1.ComplexTypeNumberPropertyField('KPIValue30', _this, 'Edm.Double');
        return _this;
    }
    return KpiItemLineField;
}(core_1.ComplexTypeField));
exports.KpiItemLineField = KpiItemLineField;
var KpiItemLine;
(function (KpiItemLine) {
    /**
     * Metadata information on all properties of the `KpiItemLine` complex type.
     */
    KpiItemLine._propertyMetadata = [{
            originalName: 'KPICode',
            name: 'kpiCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KPILineNumber',
            name: 'kpiLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'KPIName',
            name: 'kpiName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'KPIValue1',
            name: 'kpiValue1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue2',
            name: 'kpiValue2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue3',
            name: 'kpiValue3',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue4',
            name: 'kpiValue4',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue5',
            name: 'kpiValue5',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue6',
            name: 'kpiValue6',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue7',
            name: 'kpiValue7',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue8',
            name: 'kpiValue8',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue9',
            name: 'kpiValue9',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue10',
            name: 'kpiValue10',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue11',
            name: 'kpiValue11',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue12',
            name: 'kpiValue12',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue13',
            name: 'kpiValue13',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue14',
            name: 'kpiValue14',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue15',
            name: 'kpiValue15',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue16',
            name: 'kpiValue16',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue17',
            name: 'kpiValue17',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue18',
            name: 'kpiValue18',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue19',
            name: 'kpiValue19',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue20',
            name: 'kpiValue20',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue21',
            name: 'kpiValue21',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue22',
            name: 'kpiValue22',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue23',
            name: 'kpiValue23',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue24',
            name: 'kpiValue24',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue25',
            name: 'kpiValue25',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue26',
            name: 'kpiValue26',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue27',
            name: 'kpiValue27',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue28',
            name: 'kpiValue28',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue29',
            name: 'kpiValue29',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'KPIValue30',
            name: 'kpiValue30',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, KpiItemLine);
    }
    KpiItemLine.build = build;
})(KpiItemLine = exports.KpiItemLine || (exports.KpiItemLine = {}));
//# sourceMappingURL=KpiItemLine.js.map