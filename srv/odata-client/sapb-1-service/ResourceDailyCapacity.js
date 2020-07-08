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
exports.ResourceDailyCapacity = exports.ResourceDailyCapacityField = exports.createResourceDailyCapacity = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ResourceDailyCapacity.build]] instead.
 */
function createResourceDailyCapacity(json) {
    return ResourceDailyCapacity.build(json);
}
exports.createResourceDailyCapacity = createResourceDailyCapacity;
/**
 * ResourceDailyCapacityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceDailyCapacityField = /** @class */ (function (_super) {
    __extends(ResourceDailyCapacityField, _super);
    function ResourceDailyCapacityField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ResourceDailyCapacity.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceDailyCapacity.factor1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor1 = new v4_1.ComplexTypeNumberPropertyField('Factor1', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.factor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor2 = new v4_1.ComplexTypeNumberPropertyField('Factor2', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.factor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor3 = new v4_1.ComplexTypeNumberPropertyField('Factor3', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.factor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor4 = new v4_1.ComplexTypeNumberPropertyField('Factor4', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceDailyCapacity.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceDailyCapacity.singleRun]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRun = new v4_1.ComplexTypeNumberPropertyField('SingleRun', _this, 'Edm.Double');
        return _this;
    }
    return ResourceDailyCapacityField;
}(v4_1.ComplexTypeField));
exports.ResourceDailyCapacityField = ResourceDailyCapacityField;
var ResourceDailyCapacity;
(function (ResourceDailyCapacity) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Factor1: function (factor1) { return ({ factor1: v4_1.edmToTs(factor1, 'Edm.Double') }); },
            Factor2: function (factor2) { return ({ factor2: v4_1.edmToTs(factor2, 'Edm.Double') }); },
            Factor3: function (factor3) { return ({ factor3: v4_1.edmToTs(factor3, 'Edm.Double') }); },
            Factor4: function (factor4) { return ({ factor4: v4_1.edmToTs(factor4, 'Edm.Double') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            SingleRun: function (singleRun) { return ({ singleRun: v4_1.edmToTs(singleRun, 'Edm.Double') }); }
        });
    }
    ResourceDailyCapacity.build = build;
})(ResourceDailyCapacity = exports.ResourceDailyCapacity || (exports.ResourceDailyCapacity = {}));
//# sourceMappingURL=ResourceDailyCapacity.js.map