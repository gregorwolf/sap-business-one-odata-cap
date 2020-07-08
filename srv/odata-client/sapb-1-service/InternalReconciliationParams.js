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
exports.InternalReconciliationParams = exports.InternalReconciliationParamsField = exports.createInternalReconciliationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationParams.build]] instead.
 */
function createInternalReconciliationParams(json) {
    return InternalReconciliationParams.build(json);
}
exports.createInternalReconciliationParams = createInternalReconciliationParams;
/**
 * InternalReconciliationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InternalReconciliationParamsField = /** @class */ (function (_super) {
    __extends(InternalReconciliationParamsField, _super);
    function InternalReconciliationParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[InternalReconciliationParams.reconNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reconNum = new v4_1.ComplexTypeNumberPropertyField('ReconNum', _this, 'Edm.Int32');
        return _this;
    }
    return InternalReconciliationParamsField;
}(v4_1.ComplexTypeField));
exports.InternalReconciliationParamsField = InternalReconciliationParamsField;
var InternalReconciliationParams;
(function (InternalReconciliationParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ReconNum: function (reconNum) { return ({ reconNum: v4_1.edmToTs(reconNum, 'Edm.Int32') }); }
        });
    }
    InternalReconciliationParams.build = build;
})(InternalReconciliationParams = exports.InternalReconciliationParams || (exports.InternalReconciliationParams = {}));
//# sourceMappingURL=InternalReconciliationParams.js.map